import React,{useState,useEffect,useReducer } from 'react';
import './App.css';
import LabelComponent from "./Component/LabelComponent";
import InputComponent from "./Component/InputComponent";
import ButtonComponent from "./Component/ButtonComponent";
import UserListComponent from "./Component/UserListComponent";
import axios from "axios";
import {Row,Col} from "react-bootstrap";
import { useSelector,useStore } from 'react-redux';

function App() {
  const [state, setState] = useState({
      firstName:"",
      lastName:"",
      middleName:"",
      nickName:"",
      prefix:"",
      addressLine1:"",
      addressLine2:"",
      zipcode:"",
      city:"",
      state:"",
      country:"",
      friends:[],
      hobbies:[]
  })
  const store = useStore();
  useEffect(() => {
    getDetails();
  },[]);
  const getDetails = ()=>{
    fetch("/getUsers")
            .then(function (response) {
            console.log(response)
                response.json().then(function (responseText) {
                  store.dispatch({type: 'GET_DATA', UserList: responseText.userList});
                });
            });
   }

  const handleChange = (data,id)=>{
    setState({
      ...state,
      [id]: data
    });
  }
  const handleClick =()=>{
    let details = {
      ...state
    }
    console.log(details)
    if(details){
      axios.post("/createUser",details)
      .then(result=>{
            getDetails();
      })
      .catch(err=>{
        alert("Enter all the value")
      })
    }else{
       alert("Enter value")
    }
  }

  const UserList = useSelector(state => state && state.UserList);
  return (
    <div className="container">
         <div className="pad15"><LabelComponent className = "Heading" textName={"User"}/></div>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={12}>
              <span>First name: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={12}>
              <InputComponent id="firstName" type="text" placeholder="Enter first name" value={state.firstName} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Last name: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="lastName" type="text" placeholder="Enter last name" value={state.lastName} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
               <span>Middle name: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="middleName" type="text" placeholder="Enter middle name" value={state.middleName} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
               <span>Prefix: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="prefix" type="text" placeholder="Enter prefix" value={state.prefix} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
             <span>Nick name: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="nickName" type="text" placeholder="Enter nick name" value={state.nickName} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Address Line1: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="addressLine1" type="text" placeholder="Enter address" value={state.addressLine1} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Address Line2: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="addressLine2" type="text" placeholder="Enter address" value={state.addressLine2} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Zipcode: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="zipcode" type="text" placeholder="Enter zipcode" value={state.zipcode} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>City: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="city" type="text" placeholder="Enter city" value={state.city} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>State: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="state" type="text" placeholder="Enter state" value={state.state} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Country: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="country" type="text" placeholder="Enter country" value={state.country} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Friends: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="friends" type="text" placeholder="Enter friends name" value={state.friends} handleChange={handleChange} />
           </Col>
         </Row>
         <Row className="pad15">
           <Col lg={2} md={2} sm={2} xs={4}>
           <span>Hobbies: </span>
           </Col>
           <Col lg={8} md={8} sm={8} xs={8}>
           <InputComponent id="hobbies" type="text" placeholder="Enter hobbies" value={state.hobbies} handleChange={handleChange} />
           </Col>
         </Row>
         <ButtonComponent className= {"btn btn-primary"} handleClick={handleClick} BtnText="Add"/>
         <div>
           <UserListComponent  UserList={UserList}/>
         </div>
    </div>
  );
}

export default App;
