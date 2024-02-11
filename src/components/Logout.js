import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Sign.css';

const Logout = () => {


  const navigate = useNavigate();

useEffect(()=>{
 let activeuser=localStorage.getItem('currentuser')
 let data=localStorage.getItem(JSON.parse(activeuser))
 let newdata=JSON.parse(data)
 newdata.active=false
 let actuser=JSON.parse(activeuser)
 localStorage.setItem(actuser,JSON.stringify(newdata))
navigate("/")

},[])
  
  
};

export default Logout;
