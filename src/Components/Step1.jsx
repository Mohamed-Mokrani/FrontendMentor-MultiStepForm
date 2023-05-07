import React, { useEffect, useState } from "react";

const Step1 = ({setuser,user,setindex}) => {
  

  const handleValidate = () => {
    user.name.length > 1 && user.email.length > 1 && user.phone.length > 1
      ? setindex(1)
      : setindex(0)
      
  };
 
  return (
    <div className="top_cont">
    <div className="step step1">
      <h1>Personal info</h1>
      <p>Please provide your name, email adress, and phone number</p>
      <form action="">
        <div className="Name">
          <label htmlFor="">
            Name {user.name===""?<span>This field is required</span>:null}
          </label>
          <input type="email" name="" value={user.name} id="" placeholder="e.g. Stephen King" onChange={(e)=>setuser({...user,name:e.target.value})} />
        </div>
        <div className="Email">
          <label htmlFor="">Email Adress {user.email===""?<span>This field is required</span> :null}</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="e.g. stephenking@lorem.com"
            value={user.email}
            onChange={(e)=>setuser({...user,email:e.target.value})}
          />
        </div>
        <div className="Phone">
          <label htmlFor="">Phone Number {user.phone==="" ?<span>This field is required</span>:null}</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="e.g. +1 234 567 890"
            value={user.phone}
            onChange={(e)=>setuser({...user,phone:e.target.value})}
          />
        </div>
      </form>
      </div>
      <div className="next_back">
            <button className="back"></button>
            <button className="next"  onClick={()=>handleValidate()}>  
              Next Step
            </button>
          </div>
    </div>
    
  );
};

export default Step1;
