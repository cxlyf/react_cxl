import React,{Component} from 'react';
import './assets/css/home.css';
import Slider from '../../common/slider/Slider.js'
import Nav from '../nav/Nav.js'
import List from '../list/List.js'
import { connect } from 'react-redux'
import { product } from '../../store/actions/product'
import {UPDATE_PRODUCT} from '../../store/types'
class Home extends Component{
  constructor(props){
    super();

    props.getHome();//发送action
    props.getSlider();//发送action
  }
  render(){
    let {banner1,home}=this.props
   
    return (
      <div className="g-scrollview">
        <Slider  slide={this.props.banner1} dataName="home"/>
        <Nav/>
        <List list={home} />
      </div>
    )
  }
  
}
const initMapStateToProps=state=>({
  banner1:state.banner1,
  home:state.home
});

const initMapDispatchToProps=dispatch=>({
  getHome:()=>dispatch(product({
    url:`/api/product`,
    dataName:'home',
    // start:1,
    // count:4,
    type:UPDATE_PRODUCT,
    stateName:'home'
  })),
  getSlider:()=>dispatch(product({
    url:`/api/product`,
    dataName:'banner1',
    // start:1,
    // count:4,
    type:UPDATE_PRODUCT,
    stateName:'banner1'
  }))
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home)
