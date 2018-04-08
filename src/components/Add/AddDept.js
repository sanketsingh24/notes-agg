import React, { Component } from 'react';

export default class AddDept extends Component {
    render() {
        return (
            <div className="add-dept">
                <p>Department's Name: <input type="text" placeholder="Enter department's name" /></p>
                <br/><p>Department's ID: <input type="text" placeholder="Enter department's id" /></p>
            </div>
        )
    }
}