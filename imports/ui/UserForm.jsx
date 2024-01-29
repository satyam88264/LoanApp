import React, { useState } from 'react';

export const UserForm = () => {

    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const submit = e => {
        e.preventDefault();
    
        //Meteor.saveUserDetails(email, role);
        Meteor.call('tasks.insert', email);
        setText('');
      };

    return (
        <div>
            <table>
                <tr>
                    <td> <label>Enter Email:</label>  </td>
                    <td><input type="text" id="email" placeholder='Enter email...'  required  onChange={(e) => setEmail(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label for="role">Select a Role:</label></td>
                    <td> 
                        <select id="role" required onChange={(e) => setRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="borrower">Borrower</option>
                            <option value="lender">Lender</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Save User</button></td>
                </tr>
            </table>
        </div>
    );
};