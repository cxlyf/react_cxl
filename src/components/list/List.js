import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import './assets/css/list.css';
import img from "./assets/img/item-img.jpg"
export default class List extends Component{
  render(){
    return (
      <ul className="list">
         <li className="base-flexbox base-flexbox-column base-padding30 base-margin-top20">
             <NavLink to="/detail/1">
                <div className="base-flexbox">
                    <div className="base-img base-img-60 base-margin-right12">
                        <img className="radius" src={img}/>
                    </div>
                    <p className="base-font-size30">甜甜圈</p>
                </div>
                <div className="base-margin-top20">
                    <div className="base-img base-img-400">
                        <img className="radius12" src={img}/>
                    </div>
                </div>
                <div className="base-margin-top20 base-flexbox-align" >
                    <p className="base-font-size30">我家Raby最可爱，你们觉着呢~</p>
                </div>
               </NavLink>
            </li>
            <li className="base-flexbox base-flexbox-column base-padding30 base-margin-top20" style={{marginBottom:33+"px"}}>
             <NavLink to="/detail/2">
                <div className="base-flexbox">
                    <div className="base-img base-img-60 base-margin-right12">
                        <img className="radius" src={img}/>
                    </div>
                    <p className="base-font-size30">甜甜圈</p>
                </div>
                <div className="base-margin-top20">
                    <div className="base-img base-img-400">
                        <img className="radius12" src={img}/>
                    </div>
                </div>
                <div className="base-margin-top20 base-flexbox-align">
                    <p className="base-font-size30">我家Raby最可爱，你们觉着呢~</p>
                </div>
               </NavLink>
            </li>
            

        </ul>
    )
  }
  
}