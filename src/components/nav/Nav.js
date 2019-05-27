import React,{Component} from 'react';
import './assets/css/nav.css';
import img1 from './assets/img/home-first.png'
import img2 from './assets/img/nav.jpg'
export default class Nav extends Component{
  render(){
    return (
      <div className="nav">
         <div className="base-flexbox base-flexbox-column base-padding30">
                <div className="base-flexbox base-flexbox-between">
                    <h2 className="base-font-size30">今日明星宝贝</h2>
                    <p className="base-font-size26">查看更多</p>
                </div>
                <div className="base-flexbox base-margin-top50">
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="base-flexbox base-flexbox-column base-padding30 base-margin-top20">
                <div className="base-flexbox base-flexbox-between">
                    <h2 className="base-font-size30">今日爱心宝贝</h2>
                    <p className="base-font-size26">查看更多</p>
                </div>
                <div className="base-flexbox base-margin-top50">
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                    <div className="base-flexbox-item">
                        <a href="#">
                            <div className="base-img base-img-110 base-margin-auto">
                                <img className="base-absolute nav-img" src={img1}/>
                                <img className="radius base-absolute base-index2" src={img2}/>
                                <span className="index-badge">5555</span>
                            </div>
                            <p className="base-font-size24 base-margin-top20 base-text-center">萌猫</p>
                        </a>
                    </div>
                </div>
            </div>
      </div>
    )
  }
  
}