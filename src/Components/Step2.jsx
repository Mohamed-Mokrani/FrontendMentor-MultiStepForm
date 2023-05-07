import React, { useEffect, useState } from "react";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import arcade from "../images/icon-arcade.svg";

const Step2 = ({setindex,toggled,settoggled,setuser,user}) => {
  const [indexPlan, setIndexPlan] = useState(0);
  useEffect(() => {
    const plans = document.querySelectorAll(".plan");
    plans.forEach((plan, index) => {
      if (index === indexPlan) {
        plan.classList.add("selected_plan");
      } else {
        plan.classList.remove("selected_plan");
      }
    });
  }, [indexPlan]);
  useEffect(() => {
    setuser({ ...user, plan: 'Arcade', prixplan: '9' });
  }, []);

  return (
    <div className="top_cont">
    <div className="step">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <ul className="plans" >
        <li className="plan  " onClick={()=>(setIndexPlan(0),setuser({...user,plan:"Arcade",prixplan:toggled?90:9}))}>
          <img src={arcade} alt="" />
          <div className="plan_desc">
            <h4>Arcade</h4>
            <h5>{toggled?"$90/yr":"$9/mo"}</h5>
            {toggled?<h5>2 months free</h5>:null}
          </div>
        </li>
        <li className="plan" onClick={()=>(setIndexPlan(1),setuser({...user,plan:"Advanced",prixplan:toggled?120:12}))}>
          <img src={advanced} alt="" />
          <div className="plan_desc">
            <h4>Advanced</h4>
            <h5>{toggled?"$120/yr":"$12/mo"}</h5>
            {toggled?<h5>2 months free</h5>:null}
          </div>
        </li>
        <li className="plan " onClick={()=>(setIndexPlan(2),setuser({...user,plan:"Pro",prixplan:toggled?150:15}))}>
          <img src={pro} alt="" />
          <div className="plan_desc">
            <h4>Pro</h4>
            <h5>{toggled?"$150/yr":"$15/mo"}</h5>
            {toggled?<h5>2 months free</h5>:null}
          </div>
        </li>
      </ul>
      <div className="monthly_yearly">
        <h4>Monthly</h4>
        <label className="switch" >
          <input type="checkbox" onClick={()=>settoggled(!toggled)} />
          <span className="slider round"></span>
        </label>
        <h4>Yearly</h4>
      </div>
    </div>
    <div className="next_back">
    <button className="back" onClick={()=>setindex(0)}>Go Back</button>
    <button className="next" onClick={()=>setindex(2)} >  
      Next Step
    </button>
  </div>
  </div>
  );
};

export default Step2;
