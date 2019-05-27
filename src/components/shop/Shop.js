import React,{Component} from 'react';
import './assets/css/shop.css';
import Slider from '../../common/slider/Slider.js'
import store2 from "./assets/img/store2.png"
import store1 from "./assets/img/store1.png"
import it from "./assets/img/item-img.jpg"
import food from "./assets/img/store3-food.png"
import axios from 'axios';
export default class Shop extends Component{
        state = {
           goods:[]
        }
  render(){
      let goods=this.state.goods
    return (
      <div className="shop">
        <Slider/>
        <div className="g-scrollview">
            <div className="base-margin30 shop-panle">
                <div className="base-img base-img-shop">
                    <img className="base-absolute base-index3" src={store1}/>
                    <p className="base-font-size30 base-text-shop">粮食兑换</p>
                </div>
                <div className="shop-box" id="cont">
                    {
                   goods.map((item,index) => (
                    <div className="shop-box-item" key={index} >
                        <div className="base-img base-img-300">
                            <img src={"http://47.93.7.118"+item.img}/>
                            {/*<img src={it}/>*/}
                        </div>
                        <p className="base-text-ellipsis base-margin-top20 base-width300">{item.name}</p>
                        <div className="base-flexbox base-margin-top20">
                            <div className="shop-box-item-img">
                                <img src={food} style={{width:30+"px"}}/>
                            </div>
                            <span className="base-font-size24 base-margin-right12"style={{marginRight:0+"px",width:45+"px",position:"relative",right:8+"px"}}>{item.price}</span>
                            <input className="btn btn-warning" id={item.id} value="立即购买" type="button"/>
                        </div>
                    </div>
                   ))
                    }
                    
                </div>
            </div>

            <div className="base-margin30">
                <div className="base-img base-img-shop">
                    <img className="base-absolute base-index3" src={store1}/>
                    <p className="base-font-size30 base-text-shop">义卖救助流浪动物</p>
                </div>
                <div className="base-flexbox base-flexbox-wrap base-padding30 radius12 base-padding-top80" style={{marginBottom:40+"px"}}>
                    <div className="base-flexbox-item base-margin-left30 base-margin-bottom20">
                        <a href="#">
                            <div className="base-img base-img-300">
                                <img src={it}/>
                            </div>
                            <p className="base-text-ellipsis base-margin-top20 base-width300">狗狗零食大礼包</p>
                            <div className="base-flexbox base-margin-top20">
                                <h2 className="base-font-size30 base-margin-right12 base-text-yellow">
                                    &yen; 60.
                                    <span className="base-font-size26 base-text-yellow">00</span>
                                </h2>
                            </div>
                        </a>
                    </div>
                    <div className="base-flexbox-item base-margin-left30 base-margin-bottom20">
                        <a href="#">
                            <div className="base-img base-img-300">
                                <img src={it}/>
                            </div>
                            <p className="base-text-ellipsis base-margin-top20 base-width300">狗狗零食大礼包</p>
                            <div className="base-flexbox base-margin-top20">
                                <h2 className="base-font-size30 base-margin-right12 base-text-yellow">
                                    &yen; 60.
                                    <span className="base-font-size26 base-text-yellow">00</span>
                                </h2>
                            </div>
                        </a>
                    </div>
                    <div className="base-flexbox-item base-margin-left30 base-margin-bottom20">
                        <a href="#">
                            <div className="base-img base-img-300">
                                <img src={it}/>
                            </div>
                            <p className="base-text-ellipsis base-margin-top20 base-width300">狗狗零食大礼包</p>
                            <div className="base-flexbox base-margin-top20">
                                <h2 className="base-font-size30 base-margin-right12 base-text-yellow">
                                    &yen; 60.
                                    <span className="base-font-size26 base-text-yellow">00</span>
                                </h2>
                            </div>
                        </a>
                    </div>
                    <div className="base-flexbox-item base-margin-left30 base-margin-bottom20">
                        <a href="#">
                            <div className="base-img base-img-300">
                                <img src={it}/>
                            </div>
                            <p className="base-text-ellipsis base-margin-top20 base-width300">狗狗零食大礼包</p>
                            <div className="base-flexbox base-margin-top20">
                                <h2 className="base-font-size30 base-margin-right12 base-text-yellow">
                                    &yen; 60.
                                    <span className="base-font-size26 base-text-yellow">00</span>
                                </h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
  
  }
  
   componentWillMount(){
    var getInformation ={
      method:"POST",
      headers:{
      "Content-Type":"application/json"
      },
     
      }
      fetch("/app/goods/")
      .then(response => response.json())
      .then(json =>{
        // 返回的数据类型
        // console.log(json.data)
      this.setState({
          goods:json.data
      })
    })

   
   }
   
  componentDidMount(){
    let cont = document.getElementById("cont")
     cont.addEventListener("click",function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "INPUT"){
                var id = target.getAttribute("id");
              let goods = getCookie("goods")==="" ? [] : JSON.parse(getCookie("goods"));
                    if(goods.length < 1){
                        goods.push({
                            id:id,
                            num:1
                        })
                    }else{
                        var onoff = true;
                        for(var i=0;i<goods.length;i++){
                            if(goods[i].id === id){
                                goods[i].num++;
                                onoff = false;
                                break;
                            }
                        }
                    
                        if(onoff){
                            goods.push({
                                id:id,
                                num:1
                            })
                        }
                    }
                
                    setCookie("goods",JSON.stringify(goods));
                        }
                    })
    function setCookie(key,value,day){
        var d = new Date();
        d.setDate(d.getDate()+day);
        document.cookie = key + "=" + value + ";expires=" + d;
    }
    function getCookie(key){
        var arr = document.cookie.split("; ");
        for(var i=0;i<arr.length;i++){
            if(arr[i].split("=")[0] == key){
                return arr[i].split("=")[1]
            }
        }
        return "";
    }
    }





}


