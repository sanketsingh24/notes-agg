import React, {Component} from 'react';
import Dialogx from './dialogboxx';
import './icons.css';

//import images
import depart from '../../data/departments';


export default class Iconz extends Component {
    constructor(props){
       super(props);
 	    this.state = { img : depart };
       this.look=this.look.bind(this);
       this.show=this.show.bind(this);
       this.close=this.close.bind(this);
    }
    show(ev){
     const id=ev.currentTarget.dataset.id.toString();
     console.log(id+" show");
     document.getElementById(id).style.display="block";
    }
    close(ev){
     const id=ev.currentTarget.dataset.id;
     console.log(id+" close");
     document.getElementById(id).style.display="none";
    }
    look (imgdes, i) {
      let text = imgdes.dept_name;
  		let imgw = imgdes.imge;
  		let sems = imgdes.sem_no;
        return (
          <div key={i} data-id={i} onClick={this.show}>
            <div className = "onebit" >
              <img className = "image" src= {imgw} alt={text} />
              <p className = "texts" >{text}</p>
            </div>
            <Dialogx index={i} number={sems} closed={this.close}  />
          </div>
            );
        }

    render () {
        return (
          <div>
            <h1>Departments</h1>
            <div className="pro" >
              {this.state.img.map(this.look)}
            </div>
          </div>
        );
    }
};
