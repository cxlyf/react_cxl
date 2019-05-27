import React,{Component} from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import Header from '../common/header/Header.js'
import Footer from '../common/footer/Footer.js'
import Error from '../common/error/Error.js'
import Login from "./login/Login";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Reg from "./reg/Reg";
import User from "./user/User";
import Like from './like/Like.js'
import Car from "./car/Car.js"
import Detail from "./detail/Detail";
import { connect } from 'react-redux'
import Loading from "../common/loading/Loading";
import {VIEW_FOOT, VIEW_LOADING, VIEW_HEAD} from "../store/types";
import AuthUser from "../guard/AuthUser";
class App extends Component{
  componentWillReceiveProps(nextProps){//路由监听
    let {viewHead,viewFoot} = this.props;
    let path = nextProps.location.pathname;
    // console.log('app',path);

    if (/home|like|shop|reg|user/.test(path)){
      viewHead(true);viewFoot(true)
    }
    if (/detail/.test(path)){
      viewHead(false);viewFoot(false)
    }
    if (/login/.test(path)){
      viewHead(false);viewFoot(true)
    }
    if (/car/.test(path)){
      viewHead(false);viewFoot(false)
    }

  }
    render(){
        let {bHead,bFoot,bLoading} = this.props;
        return (
          <React.Fragment>
            {bLoading && <Loading/>}
            {bHead && <Header/>}
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/shop" component={Shop}/>

            <AuthUser path="/user" component={User}/>
            
            <Route path="/like" component={Like}/>
            <Route path="/login" component={Login}/>
            <Route path="/car" component={Car}/>
            <Route path="/reg" component={Reg}/>
            <Route path="/detail/:id" component={Detail}/>
            <Redirect exact from="/" to="/home" />
            <Route component={Error} />
          </Switch>
            {bFoot && <Footer/>}
        </React.Fragment>
        )
    }
    }
const initMapStateToProps=state=>({
  bHead:state.bHead,
  bFoot:state.bFoot,
  bLoading:state.bLoading
});

const initMapDispatchToProps=dispatch=>({
  viewHead:(bl)=>dispatch({type:VIEW_HEAD,payload:bl}),
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)

