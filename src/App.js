import { Link, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import ChildToP from './PropschildToparent/cToP';
// import MyLocalStorage from './localstorage/myLocalS';
// import Localstorage from './localstorage/Localstorage';
// import UseEffect from './useEffect/UseEffect';
// import LearnUsereducer from './useReducer/learn';
// import UseReducerHomeWork from './useReducer/reducerWithForm/homeWork';
// import UseReducerWithForm from './useReducer/reducerWithForm/reducerWithform';
// import UseState from './useStateFolder/UseStateFile'
// import UseState from './useStateFolder/UseStateFile1'
// import Form from './useStateFolder/form';
// import Form1 from './useStateFolder/myForm'
// import Form2 from './useStateFolder/changesOnmyform'
// import UseReducer from './useReducer/useReducer';
// import UseReducerWithObj from './useReducer/useReducerWithObj';
// import { Avatar, Col, Rate, Row } from "antd"
// import Dstructuring from './learn/dstructuring'
// import Spreadop from './learn/spreadOperator'
   import UseRef from './UserRef/UseRef';
// import TaskUseRef from './UserRef/Task1';
// import UseReducerWithFormWithLocalStorage from './localstorage/storeFormData'
// import UseReducerWithForm1WitihLocalS from './localstorage/StoreFormDataInLocalS'
   import Main from './pages/Main';
   import AnyFile from './AnyFile';
   import FormWithUseContext from './MyUseContextTask/FormWithUseContext'
   import DisplayFormData from './MyUseContextTask/DisplayFormData';
   import Login from './loginPage/login';
   import Dashboard from './Dashboard';
   import { useEffect, useState } from 'react';
   import FetchApi from './Api/FetchApi';
   import TaskApi from './Api/TaskSearch';
   import TaskCard1 from './Api/TaskCard';


const App = () => {

  const [login,setLogin]=useState(false)
//   const func1 = (value,cData) => {
//     console.log(value, 'AM IN PARENT COMOPONENT') // console mai deikna
//     console.log(cData, "mile na parent main")
//   }


const isLogin = localStorage.getItem('islogin') || null;  {/* Retrieve authentication status */}


useEffect(()=>{

  if (isLogin !== null) {
    setLogin(true)
    
  }
  else{
    setLogin(false)

  }
},[isLogin])
  return (
    <div className="h-100">
      {/* <UseReducerWithForm1WitihLocalS/> */}
      {/* <UseReducerWithFormWithLocalStorage/> */}
      {/* <ChildToP func1={func1} />*/} {/*sending func1 to ChildToP component and above we recive data from child */}
      {/* <UseRef/> */}
      {/* <TaskUseRef/> */}
      {/* <MyLocalStorage/> */}
      {/* <UseState/> */}
      {/* <LearnUsereducer/> */}
      {/* <UseReducerHomeWork/> */}
      {/* <UseEffect/> */}
      {/* <Localstorage/> */}
      {/* <UseReducerWithForm/> */}
      {/* <UseReducer/> */}
      {/* <UseReducerWithObj/>  */}
      {/* <Form/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <Dstructuring/> */}
      {/* <Spreadop/> */}
      {/* <UseState/>*/}

     {/* Render Navbar only if authenticated */}
      {/* {isLogin &&  <Dashboard/>}    */}
       {/* <Navbar/> true hai he hai abb isLogin be true hona chaheye  */}
   

        {/* <hr /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/fetchApi" element={<FetchApi/>} />
          <Route path="/Form-useContext" element={<FormWithUseContext/>} />
          <Route path="/DisplayForm-useContext" element={<DisplayFormData/>} />
          <Route path="/about" element={<UseRef />} />
          <Route path="/main" element={<Main/>} />
          <Route path="/anyFile" element={<AnyFile/>} />
          <Route path="/TaskkApi" element={<TaskApi/>}/>
          <Route path="/Taskkcard" element={<TaskCard1/>}/>
        </Routes>

    { login &&   <Routes>
          <Route path="/dashboard" element={ <Dashboard />  } />
        </Routes>}
    </div>
  );
}

export default App;
