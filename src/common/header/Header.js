import React,{Component} from 'react';
import './assets/css/header.css';
export default class Header extends Component{
  render(){
    return (
            <header className="m-navbar">
                <div className="navbar-center">
                    <span className="navbar-title">宠物之家</span>
                </div>
            </header>
    )
  }
  
}