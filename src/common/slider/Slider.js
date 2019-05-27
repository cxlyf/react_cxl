import React,{Component} from 'react';
import './assets/css/slider.css';
import move from'./assets/js/move'
import img1 from './assets/img/1.jpg'
import img2 from './assets/img/2.jpg'
import img3 from './assets/img/3.jpg'
export default class Slider extends Component{
  render(){
    return(
     <div className="cont">
        
        <a><img src={img1} alt=""/></a>
        <a><img src={img2} alt=""/></a>
        <a><img src={img3} alt=""/></a>
        <a><img src={img2} alt=""/></a>
        
        
        <div className="btns">
            <input type="button" value="<<" id="left" a-liyang="admin"/>
            <input type="button" value=">>" id="right" disabled="disabled"/>
        </div>
    </div>
    )
}
 componentDidMount() {  
   function Banner(){
            // 选元素
            this.img = document.querySelectorAll(".cont a");
            this.left = document.getElementById("left");
            this.right = document.getElementById("right");

            this.iNow = 0;
            this.iPrev = this.img.length-1;
            // 执行绑定事件
            this.addEvent()
        }
        Banner.prototype.addEvent = function(){
            var that = this;
            // 触发事件的时候
            this.left.onclick = function(){
                // 改变索引
                that.changeIndex(1)
            }
            this.right.onclick = function(){
                // 改变索引
                that.changeIndex(2)
            }
        }
        Banner.prototype.changeIndex = function(type){
            // 改变索引
            if(type == 1){
                if(this.iNow == 0){
                    this.iNow = this.img.length-1;
                    this.iPrev = 0
                }else{
                    this.iNow--;
                    this.iPrev = this.iNow + 1
                }
                // 根据索引切换图片
                this.move(1)
            }else{
                if(this.iNow == this.img.length-1){
                    this.iNow = 0;
                    this.iPrev = this.img.length-1
                }else{
                    this.iNow++;
                    this.iPrev = this.iNow-1
                }
                // 根据索引切换图片
                this.move(-1)
            }
            // console.log(this.iPrev,this.iNow)
        }
        Banner.prototype.move = function(type){
            this.img[this.iPrev].style.left = 0;

            move(this.img[this.iPrev],{left:this.img[0].offsetWidth * type})
            this.img[this.iNow].style.left = -this.img[0].offsetWidth * type+"px";

            move(this.img[this.iNow],{left:0})
        }

        new Banner();
      document.getElementById("right").disabled = false;
      var button = document.getElementById("right");
       setInterval(function() {
        if (button.disabled == false) {
            button.click();
        }
     },
    3000);
  }
}