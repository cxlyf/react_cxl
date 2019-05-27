import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
 import './assets/css/footer.css';
import img1 from './assets/img/tab-home-selected.png'
import img2 from './assets/img/tab-commune-default.png'
import img3 from './assets/img/tab-store-default.png'
import img4 from './assets/img/tab-mine-default.png'
export default class Footer extends Component{
  render(){
    return (
     <footer className="m-tabbar">
            <NavLink className="tabbar-item" activeClassName="tabbar-active" to="/home">
                <span className="tabbar-icon">
                    <img src={img1}/>
                </span>
                <span className="tabbar-txt">首页</span>
            </NavLink>
            <NavLink className="tabbar-item" activeClassName="tabbar-active" to="/like">
               <span className="tabbar-icon">
                    <img src={img2}/>
                </span>
                <span className="tabbar-txt">公社</span>
            </NavLink>
            <NavLink className="tabbar-item" activeClassName="tabbar-active" to="/shop">
              <span className="tabbar-icon">
                    <img src={img3}/>
                </span>
                <span className="tabbar-txt">杂货铺</span>
            </NavLink>
            <NavLink className="tabbar-item" activeClassName="tabbar-active" to="/user">
              <span className="tabbar-icon">
                    <img src={img4}/>
                </span>
                <span className="tabbar-txt">我的</span>
            </NavLink>
        </footer>
    )
  }
  
}