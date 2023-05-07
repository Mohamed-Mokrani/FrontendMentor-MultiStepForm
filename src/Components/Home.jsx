import React, { useEffect, useState } from "react";
import slide_mobile from "../images/bg-sidebar-mobile.svg";
import slide_desktop from "../images/bg-sidebar-desktop.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Thankyou from "./Thankyou";
const Home = () => {
  const [index, setindex] = useState(0);
  
  const [user, setuser] = useState({
    name: " ",
    email: " ",
    phone: " ",
    plan:"Arcade",
    prixplan:"9"
  });
  
  const [toggled, settoggled] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState([{
    title:"",
    price:"",
  }]);
  useEffect(() => {
    const updateSteps = (selector) => {
      const steps = document.querySelectorAll(selector);
      steps.forEach((step, indexPos) => {
        if (indexPos === index) {
          step.classList.add("steps_num_index");
        } else {
          step.classList.remove("steps_num_index");
        }
      });
    };
    
    updateSteps(".step_index_desk");
    updateSteps(".step_index_mobile");
  }, [index]);
  
  return (
    <div className="home">
      <div className="bg_sideba_mobile">
        <img src={slide_mobile} alt="" />
      </div>
      <div className="bg_sideba_desktop">
        {/* <img src={slide_desktop} alt="" /> */}
        <ul className="steps_nums steps_desktop">
          <li>
            {" "}
            <a className="step_index_desk"  href="#" >
              1
            </a>{" "}
            <div>
              <h6>STEP 1</h6> <h5>YOUR INFO</h5>
            </div>{" "}
          </li>
          <li >
            <a className="step_index_desk"   href="#">
              2
            </a>
            <div>
              <h6>STEP 2</h6> <h5>SELECT PLAN</h5>
            </div>
          </li>
          <li>
            <a className="step_index_desk"   href="#">
              3
            </a>
            <div>
              <h6>STEP 3</h6> <h5>ADD-ONS</h5>
            </div>
          </li>
          <li>
            <a className="step_index_desk"   href="#">
              4
            </a>
            <div>
              <h6>STEP 4</h6> <h5>SUMMARY</h5>
            </div>
          </li>
        </ul>
      </div>
      <div className="container">
        {/******************************************-Steps nums-***************************************** */}

        <ul className="steps_nums steps_mobile">
          <li>
            {" "}
            <a className="step_index_mobile"   href="#">
              1
            </a>{" "}
          </li>
          <li>
            <a className="step_index_mobile"   href="#">
              2
            </a>
          </li>
          <li>
            <a className="step_index_mobile"   href="#">
              3
            </a>
          </li>
          <li>
            <a className="step_index_mobile"   href="#">
              4
            </a>
          </li>
        </ul>
        {/******************************************-End Steps nums-***************************************** */}
        {index===0?<Step1  setindex={setindex} user={user} setuser={setuser}/>:index===1?<Step2 setuser={setuser} user={user} toggled={toggled} settoggled={settoggled}  setindex={setindex} />:index===2?<Step3 selectedAddOns={selectedAddOns}  setSelectedAddOns={setSelectedAddOns} settoggled={settoggled} toggled={toggled} setindex={setindex} />:index===3?<Step4 setSelectedAddOns={setSelectedAddOns} selectedAddOns={selectedAddOns} settoggled={settoggled} toggled={toggled} user={user}  setindex={setindex}/>:<Thankyou/>}
      </div>
    </div>
  );
};

export default Home;
