import React,{Component} from 'react';
import './assets/css/reg.css';
import item from './assets/img/item-img.jpg'
import {Link} from "react-router-dom";
import {reg} from "../../store/actions/reg";
import connect from "react-redux/es/connect/connect";
class Reg extends Component{
   state={
    username:'',
    password:'',
    mess:''
  };
  changeIpt(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  render(){
    let {username,password,mess}=this.state;
    let {reg}=this.props;
    return (
      <div className="reg">
        <div className="g-scrollview">
            <div className="base-flexbox base-padding-lr base-padding-top80" style={{height:4+"rem",width:4+"rem"}}>
                <div className="base-flexbox-item">
                   
                    <input className="basicData-input" type="text" name="username" placeholder="点击输入名字" value={username} onChange={this.changeIpt.bind(this)}/>
                
                </div>
                <div className="base-img base-img-160">
                    <img className="radius" src="" id="imgshow" style={{height:1.6+"rem",width:1.6+"rem",borderRadius:0.8+"rem"}}/>
                    <input type="file" placeholder="上传头像" id="icon" />
                </div>
                
            </div>

            <div className="m-cell">
                <div className="cell-item">
                    <div className="cell-left">生日：</div>
                    <div className="cell-right"><input type="date" className="cell-input"/></div>
                </div>
                <div className="cell-item">
                    <div className="cell-left">密码：</div>
                    <div className="cell-right"><input type="text" name="password"  value={password} className="cell-input" placeholder="请输入密码" onChange={this.changeIpt.bind(this)}/></div>
                </div>
                <div className="cell-item">
                    <div className="cell-left">个性签名：</div>
                    <div className="cell-right"><input type="text" className="cell-input" placeholder="爱吃啥，有啥特点…"/></div>
                </div>
                <div className="m-celltitle">我的简介(选填)</div>
                <div className="m-cell">
                    <div className="cell-item">
                        <div className="cell-right">
                            <textarea className="cell-textarea" placeholder="填写简介信息"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="base-margin30">
            <button className="btn-block btn-warning radius88" onClick={()=>reg(username, password,this)}>完成注册</button>
    
            <p className="base-margin-top20 base-font-size24 base-text-center">虚假身份，广告，侮辱性的公社卡将会被删除</p>
        </div>
      </div>
    )
  }
  componentDidMount(){
    
 

var inputBox = document.getElementById("icon");
var img = document.getElementById("imgshow");
inputBox.addEventListener("change",function(){
  var reader = new FileReader();
  reader.readAsDataURL(inputBox.files[0]);//发起异步请求
  reader.onload = function(){
    //读取完成后，将结果赋值给img的src
    img.src = this.result
    console.log(this.result)
  }
})

  }
}

const initMapStateToProps=state=>({

});

const initMapDispatchToProps=dispatch=>({
  reg:(username,password,_this)=>{
     console.log(_this,username,password)
    dispatch(reg({
      url:`/app/register/`,
      username,password
    })).then(
      res=>{
        res.code === "1"  && _this.props.history.push({pathname:'/login'});
        res.code === "0" && _this.setState({mess:res.msg})
      }
    )
  }
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Reg)
