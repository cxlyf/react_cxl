import React,{Component} from 'react';
import './assets/css/car.css';
import store6 from "./assets/img/store6.png"
import item from "./assets/img/item-img.jpg"
export default class Car extends Component{
	state = {
           goods:[]
        }
  render(){
    return (
      <div className="car">
        <section className="g-flexview">
		<header className="m-navbar">
			<a href="#" className="navbar-item">
				<i className="back-ico" onClick={()=>window.history.go(-1)}></i>
			</a>
			<div className="navbar-center">
				<span className="navbar-title">购物车</span>
			</div>
		</header>

		<div className="g-scrollview" id="cont">

			<div className="base-flexbox base-padding30 base-margin-top20">
				<div className="base-img base-img-88">
					<img src={store6}/>
				</div>
				<div className="base-img base-img-140 base-margin-right12">
					<img src={item}/>
				</div>
				<div className="base-flexbox-item">
					<h2 className="base-text-ellipsis base-width450">天然奶糕 奶糕天然粮 10KG</h2>
					<div className="base-flexbox base-margin-top20">
						<h2 className="base-font-size30 base-margin-right12 base-text-yellow base-width236">
							&yen; 60.
							<span className="base-font-size26 base-text-yellow">00</span>
						</h2>
						<div className="base-flexbox">
							<span className="m-spinner base-margin-right12" data-ydui-spinner="{input: '.J_Input', add: '.J_Add', minus: '.J_Del'}">
								<a href="javascript:;" className="J_Del"></a>
								<input type="text" className="J_Input" placeholder=""/>
								<a href="javascript:;" className="J_Add"></a>
							</span>
							<a href="javascript:;" className="btn btn-danger">
								<i className="icon-delete"></i>
							</a>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div className="base-flexbox" style={{position:"fixed",bottom:0}}>
			<div className="base-flexbox base-flexbox-item2 base-flexbox-between">
				<div className="base-flexbox-item">
					<label className="cell-item">
						<span className="cell-left">
							<div className="base-img base-img-88">
								<img src={store6}/>
							</div>
							全选
						</span>
					</label>
				</div>
				<div className="base-flexbox-item">
					<h2 className="base-font-size30 base-margin-right12">
						总计：
						<span className="base-font-size26 base-text-yellow">&yen; 0.</span>
						<span className="base-font-size26 base-text-yellow">00</span>
					</h2>
				</div>
			</div>
			<div className="base-flexbox base-flexbox-item">
				<div className="base-flexbox-item base-flexbox base-bg-red">
					<p className="base-font-size32 base-text-center car-Settlement">
						去结算
					</p>
				</div>
			</div>
		</div>

	</section>
      </div>
    )
  }
  
  
}