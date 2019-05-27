import React,{Component} from 'react'
import './assets/css/login.css';
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import {login} from "../../store/actions/login";
class Login extends Component{
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
    let {login}=this.props;
    return (
      <div className="login">
        <section className="g-flexview">

        
        <header className="m-navbar">
            <a href="#" className="navbar-item"><i className="back-ico" onClick={()=>window.history.go(-1)}></i></a>
            <div className="navbar-center">
                <span className="navbar-title">用户登录</span>
            </div>
        </header>
        
        <div className="g-scrollview">
            
            <div className="m-cell">
                <div className="cell-item">
                    <div className="cell-left">姓名：</div>
                    <div className="cell-right">
                        <input type="text" name="username" className="cell-input" value={username} onChange={this.changeIpt.bind(this)}/>
                    </div>
                </div>
               
                <div className="cell-item">
                    <div className="cell-left">密码：</div>
                    <div className="cell-right">
                        <input type="text"  name="password" className="cell-input" value={password}  onChange={this.changeIpt.bind(this)}/>
                    </div>
                </div>
            </div>

            

        </div>
        
       
        <div className="reg-btn">
            <div className="base-flexbox-align">
                <p className="base-font-size30">登记手机之后，您将获得</p>
                <p className="base-font-size26">1.一对一的筹粮顾问服务</p>
                <p className="base-font-size26">2.免费获得筹粮秘籍</p>
                <p className="base-font-size26">3.号召大家一起帮助你的机会</p>
            </div>
            <button  className="btn-block btn-warning radius88" onClick={()=>login(username, password,this)}>
                确认登录
            </button>
            <Link className="base-font-size30" to="/reg">注册</Link>
            
        </div>
		<div style={{height:0.2+"rem"}}>{mess}</div>
    </section>
      </div>
    )
  }
  
}
const initMapStateToProps=state=>({

});

const initMapDispatchToProps=dispatch=>({
  login:(username,password,_this)=>{
    // console.log(_this,username,password)
    dispatch(login({
      url:`/app/login/`,
      username,password
    })).then(
      res=>{
         res.code === "1" &&  _this.props.history.push({pathname:'/user'})
       // if(res.code === "1")  {document.cookie = "user=admin"; _this.props.history.push({pathname:'/user'})}
        res.code === "0" && _this.setState({mess:res.msg})
      }
    )
  }
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Login)