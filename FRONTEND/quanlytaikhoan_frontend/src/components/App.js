import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import ListItem from './ListItem';
import axios from 'axios';


const getdata=()=> axios.get('http://localhost:4000/getDatatk')
          .then((res)=> res.data)

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      data:null
    }
  }
  
  componentWillMount() {
    if(this.state.data===null)
    {
      // console.log(getdata());
      //Lấy dữ liệu từ State
      getdata().then((res)=>{
          this.setState({
            data:res
          });
      })
      
    }
  }



  printData= () => {
      if(this.state.data !== null) {
        return this.state.data.map((value,key)=>
          (<ListItem 
              key={key}
              tentho={value.tenTho}
              diachi={value.diaChi}
              sodt={value.soDT}
              sosao={value.sosaoTB}
              image={value.anhTho} />)
        )
      }
  }
  render() {
    console.log(this.state.data);
    
  //   axios.get('http://localhost:4000/getDatatk')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });
      
      

    return (
      <div >
        <HeadTitle/>
        <div className="container">
          <div className="row">

            {this.printData()}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;


{/* <h4 class="card-title">Tên Thợ</h4>
                  <p class="card-text">Địa chỉ</p>
                  <p class="card-text">Số điện thoại</p>
                  <p class="card-text">Số sao</p> */}