import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <input type="radio" name="tabs" id={this.props.id} />
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <div className="tab">
                    <details>    
                        <summary>{this.props.course_name}</summary>
                        <h4>Course Id: {this.props.course_id}</h4>
                        <details><summary>Books: </summary>
                            {this.props.books.map((book,i) => 
                                <ul key={i} >
                                    <li><a href={book.link} > {book.name}</a></li>
                                    <li>{book.rating} </li>
                                </ul>
                            )}
                        </details>
                    </details>
                </div>
            </div>
        );
    }
}