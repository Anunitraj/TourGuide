import React,{useState} from 'react';

import axios from 'axios';


function Booking(){
   
   
const [datetime,setdatetime] = useState('');

const [name,setname] =useState('');

const [email,setemail] =useState('');

const [destination,setdestination] =useState('');
const [message,setmessage] =useState('')



   const datetimeset =(e)=>{
    setdatetime(e.target.value)
   }
   
   const nameset =(e)=>{
    setname(e.target.value)
   }

   const emailset=(e)=>{
    setemail(e.target.value)
   }
   
   const destinationchange =(e)=>{
    setdestination(e.target.value)
   }
   





   const register=async()=>{
//sending data to server


//making object
const student ={
    "datetime":datetime,
    "name":name,
    "email":email,
    "destination":destination
}

try{
    const res =await axios.post('http://localhost:5000/addstudent',student)
    if(res.data._id !==undefined || res.data._id ==null){
  setmessage("registration successfull  🙂 🙂")
    }
    else{
        setmessage("registration failed 😕😕")
    }
}catch(e){
    alert(e)
}

   }
   
    return(
        <>
        
        <div style={{display:"flex",backgroundColor:"white",zIndex:"-1",alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80%",boxSizing:"border-box",backgroundColor:"#F5F5DC",backgroundImage:"url(./img/booking.jpg)",  backgroundRepeat: 'no-repeat',
        gap:"10px"
      }}>
        <div style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>________BOOKING________</div>
<div style={{color:"black",fontSize:"40px",fontWeight:'bold'}}> Booking Details!!!</div>
<div style={{color:"black",fontWeight:"bolder"}}>_____________________________________</div>

        <div style={{display:"flex",flexDirection:"column" ,backgroundColor:"rgba(0,0,0,0.5)",gap:"10px",boxShadow:"20px 20px 20px 20px #8888",margin:"50px",padding:"50px",boxSizing:"border-box",color:"white",fontWeight:"bold"}}>
        <div>
     

        <label for="rollno">Enter Date of Booking :  </label>
        <br></br>
            <input type="date" style={{width:"200px",padding:"5px",borderRadius:"0 10px 10px 0",borderBottom:"3px solid black",margin:"10px"}} class="rollno" placeholder="" border="none" onChange={datetimeset}/>
          
        </div>

        <div>
        <label for="name_enter">Enter Your  Name_ :</label>
        <br></br>
            <input type="text" style={{width:"200px",padding:"5px",borderRadius:"0 10px 10px 0",border:"none",outline:"none",borderBottom:"3px solid black",margin:"10px"}}  class="name_enter" placeholder="enter  name" onChange={nameset}/>
          
        </div>
        <div>
        <label for="email_enter">Enter Your Email_ID : </label>
        <br></br>
            <input style={{width:"200px",padding:"5px",border:"none",outline:"none",borderBottom:"3px solid black",margin:"10px",borderRadius:"0 10px 10px 0"}} type="email" class="email_enter" placeholder="enter email" onChange={emailset}/>
          
        </div>
        <div>
          <label for="option_are">Select Your Destination:</label>
          <br></br>
        <select style={{width:"200px",border:"none",padding:"5px",outline:"none",borderBottom:"3px solid black",margin:"10px",borderRadius:"0 10px 10px 0"}} class="option_are" onChange={destinationchange}>
       <option selected>select destination</option>
        <option value="Thailand">Thailand</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Australia">Australia</option>
        <option value="Indonesia">Indonesia</option>
       </select>
        </div><br></br>
        <button onClick={register} style={{borderRadius:"10px 0px 30px 0px",margin:"10px",padding:"10px",color:"yellow",backgroundColor:"black",opacity:"",fontWeight:"bolder"}}>BOOK NOW ! 🙂 🙂  </button>
        </div>
      <div style={{color:"black"}}>{message}</div>
        </div>
        </div>
        </>
    )
}
export default Booking;