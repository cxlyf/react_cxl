import React,{Component} from 'react';
import {NavLink} from "react-router-dom"
import './assets/css/user.css';
import nav from './assets/img/nav.jpg'
import mine1 from './assets/img/mine1.png'
import mine2 from './assets/img/mine2.png'
import mine3 from './assets/img/mine3.png'
import mine4 from './assets/img/mine4.png'
import mine5 from './assets/img/mine5.png'
import mine6 from './assets/img/mine6.png'
export default class user extends Component{
  render(){
    return (
      <div className="user">
        <div className="g-scrollview">
            <div className="m-cell">
                <div className="cell-item base-padding30">
                    <a className="base-flexbox" href="#">
                        <div className="cell-left">
                            <div className="base-img base-img-110 base-margin-right12">
                                <img className="radius" src={nav}/>
                            </div>
                            <div>
                                <h2 className="base-font-size30">甜甜圈</h2>
                                <p className="base-font-size26 base-margin-top20">已有2只宝贝,拥有100g喂养粮食可以使用</p>
                            </div>
                        </div>
                        <div className="cell-right cell-arrow base-padding-right0"></div>
                    </a>
                </div>
            </div>

            <div className="m-cell">
                <NavLink className="cell-item" href="javascript:;" to="/login" >
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine6} />
                        </span>
                        登录
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </NavLink>
                 <NavLink className="cell-item" href="javascript:;" to="/reg" >
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine6} />
                        </span>
                        注册
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </NavLink>
               
                <a className="cell-item" href="javascript:;">
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine6} />
                        </span>
                        我的关注
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </a>
                <a className="cell-item" href="javascript:;">
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine5} />
                        </span>
                        粮食充值
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </a>
            </div>

            <div className="m-cell">
                <NavLink className="cell-item" href="javascript:;" to="/car" >
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine6} />
                        </span>
                        购物车
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </NavLink>
                <a className="cell-item" href="javascript:;">
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine3} />
                        </span>
                        我的消息
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </a>
                <a className="cell-item" href="javascript:;">
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine2} />
                        </span>
                        流浪动物救助人认证
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </a>
                <a className="cell-item" href="javascript:;">
                    <div className="cell-left">
                        <span className="cell-icon">
                            <img src={mine1} />
                        </span>
                        关于我们
                    </div>
                    <div className="cell-right cell-arrow"></div>
                </a>
            </div>

        </div>
      </div>
    )
  }
  
}