import React, { Component } from 'react';

export default class AddDept extends Component {
    render() {
        return (
            <div className="add-course">
                <p>Course's Name: <input type="text" placeholder="Enter course's name" /> </p>
                <p>Course's ID: <input type="text" placeholder="Enter course's id" /> </p>
                <p>Semester Number: <input type="text" placeholder="Enter the semester" /> </p>
                <p>Add a Book 
                    <br/> Name of Book : <input type="text" placeholder="Enter book's name" />
                    <br/> Rating : <input type="text" placeholder="Enter book's rating" />
                    <br/> Upload Book here : 
                    <br/> OR
                    <br/> Online link : 
                </p>
                <p>Add an Online Course
                    <br/> Online link : <input type="text" placeholder="Enter course's link" />
                </p>
                <p>Add a Powerpoint Presentation
                    <br/> Topic : <input type="text" placeholder="Enter Presentation's topic" />
                    <br/> Rating : <input type="text" placeholder="Enter Presentation's rating" />
                    <br/> Author : <input type="text" placeholder="Enter Presentation's author" />
                    <br/> Session : <input type="text" placeholder="Enter Presentation's Session" />
                    <br/> Upload Presentation here :
                    <br/> OR
                    <br/> Online link : 
                </p>
                <p>Add a Professor's Notes
                    <br/> Professor : <input type="text" placeholder="Enter Professor's name" />
                    <br/> Session : <input type="text" placeholder="Enter Session" />
                    <br/> Rating : <input type="text" placeholder="Enter Rating" />
                    <br/> Upload Notes here : 
                    <br/> OR
                    <br/> Online link : 
                </p>
            </div>
        )
    }
}