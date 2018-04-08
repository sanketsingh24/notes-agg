import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OnebitTabs from './OnebitTabs';
import Expander from './Expander';


import {Tab} from 'material-ui/Tabs';

export default class Tabs extends Component {
    constructor(props) {
        super(props)
    }
    look () {
        const id = this.props.id;
        console.log(id);
    //    document.getElementById(id).style.height="100px";
        document.getElementById(id).style.display="block";
    }
    render () {
        return (

        );
    }
}

/**<details>    
                        <summary>{this.props.course_name}</summary>
                        <h4>Course Id: {this.props.course_id}</h4>
                        <details><summary>Books: </summary>
                            {this.props.books.map((book,i) => 
                                <ul key={i} >
                                    <li><a href={book.link} > {book.name}</a></li>
                                    <li>{book.rating} </li>
                                </ul>
                            )}
                        </details> */