import React,{Component} from 'react';
import './assets/css/like.css';
import it from './assets/img/item-img.jpg'
import $ from '../../library/jquery-2.1.4.min.js';
export default class Like extends Component{
     state = {
           like:[]
        }
  render(){
      let like=this.state.like
    return (
     <div className="g-scrollview">
            <div id="J_Tab" className="m-tab">
                <ul className="tab-nav">
                    <li className="tab-nav-item tab-active"><a href="javascript:;">喂养的宝贝们</a></li>
                    <li className="tab-nav-item"><a href="javascript:;">喜欢的宝贝们</a></li>
                </ul>
                <div className="tab-panel">
                    <div className="tab-panel-item tab-active">
                        <div className="base-flexbox base-flexbox-wrap">
                            {  
                                like.map((item,index) => (
                                <div className="base-img base-img-220" key={index}>
                                <img src={"http://47.93.7.118"+item.img}/>
                                <p className="base-badge-text">
                                    <i className="icon-like-outline"></i>
                                    2086
                                </p>
                            </div>
                                ))
                            }
                           
                        </div>
                    </div>
                    <div className="tab-panel-item">
                        <div className="base-flexbox base-flexbox-wrap">
                             {  
                                like.map((item,index) => (
                                <div className="base-img base-img-220" key={index}>
                                <img src={"http://47.93.7.118"+item.img}/>
                                <p className="base-badge-text">
                                    <i className="icon-like-outline"></i>
                                    2086
                                </p>
                            </div>
                                ))
                            }
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
      fetch("/app/cats/")
      .then(response => response.json())
      .then(json =>{
        // 返回的数据类型
        // console.log(json.data)
      this.setState({
          like:json.data
      })
    })

   
   }
  componentDidMount() {
     var ali = document.querySelectorAll("li")
    var ap = document.getElementsByClassName("tab-panel-item")
     for(var i=0;i<ali.length;i++){
        ali[i].index = i;
        ali[i].onclick = function(){
            for(var j=0;j<ali.length;j++){
                ali[j].className = "tab-nav-item";
                ap[j].className = "tab-panel-item";
            }
            this.className = "tab-nav-item tab-active";
            ap[this.index].className = "tab-panel-item tab-active"
        }
    }


  }
  
}