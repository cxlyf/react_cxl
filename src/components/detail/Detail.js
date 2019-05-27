import React,{Component} from 'react';
import './assets/css/detail.css';
import item from "./assets/img/item-img.jpg"
export default class Detail extends Component{
  render(){
    return (
      <div className="detail">
        <header className="m-navbar">
            <a href="#" className="navbar-item"><i className="back-ico" onClick={()=>this.props.history.go(-1)}></i></a>
            <div className="navbar-center">
                <span className="navbar-title">详细资料</span>
            </div>
        </header>

        <div className="g-scrollview">
            <div className="base-flexbox base-padding-lr base-padding-top80">
                <div className="base-flexbox-item">
                    <p className="data-title">龙猫</p>
                    <div className="base-flexbox base-margin-top20">
                        <p className="base-font-size30">性别：</p>
                        <a href="javascript:;" className="btn btn-warning">男</a>
                    </div>
                </div>
                <div className="base-img base-img-160">
                    <img className="radius" src={item}/>
                </div>
            </div>

            <div className="m-cell">
                <div className="cell-item">
                    <div className="cell-left">生日：</div>
                    <div className="cell-right base-flexbox-content">
                        2017-07-07
                    </div>
                </div>
                <div className="cell-item">
                    <div className="cell-left">体重：</div>
                    <div className="cell-right base-flexbox-content">
                        10Kg
                    </div>
                </div>
                <div className="cell-item">
                    <div className="cell-left">个性签名：</div>
                    <div className="cell-right base-flexbox-content">
                        我爱吃鱼
                    </div>
                </div>
                <div className="cell-item">
                    <div className="cell-left">是否绝育：</div>
                    <div className="cell-right base-flexbox-content">
                        <a href="javascript:;" className="btn btn-warning">已绝育</a>
                    </div>
                </div>
                <div className="m-celltitle">我的简介(选填)</div>
                <div className="m-cell">
                    <div className="cell-item">
                        <div className="base-padding-tb30 base-padding-right30 base-font-size30">
                            我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼我爱吃鱼
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
  }
  
}