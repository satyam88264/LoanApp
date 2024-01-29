import { Meteor } from 'meteor/meteor';
import { Loans } from '/imports/api/loans';

async function insertLink({ email, role }) {
  await Loans.insertAsync({ email, role, createdAt: new Date() });
}

Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  if (await Loans.find().countAsync() === 0) {
    await insertLink({
      title: 'Do the Tutorial',
      url: 'https://react-tutorial.meteor.com/simple-todos/01-creating-app.html',
    });   
  }

  // We publish the entire Links collection to all clients.
  // In order to be fetched in real-time to the clients
  Meteor.publish("loans", function () {
    return Loans.find();
  });
});
