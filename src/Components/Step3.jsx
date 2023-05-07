import React, { useEffect, useState } from "react";

const Step3 = ({setindex,settoggled,toggled,setSelectedAddOns,selectedAddOns}) => {
    
  
    function handleAddOnChange(event) {
      const h4 = event.target.parentNode.querySelector('h4');
      const prices = event.target.parentNode.querySelectorAll('p');
      const price = prices[1].textContent;
      const value = {title: h4.textContent, price: price.substring(price.indexOf("$")+1,price.indexOf("/"))};
      const checked = event.target.checked;
      if (checked) {
        setSelectedAddOns(prevSelectedAddOns => [...prevSelectedAddOns, value]);
      } else {
        setSelectedAddOns(prevSelectedAddOns => prevSelectedAddOns.filter(item => item.title !== value.title));
      }
    }
    
    
  
  return (
    <div className="top_cont">
    <div className="step step3">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      <ul className="add_ons">
        <li className="add_on">
          <input type="checkbox" name=""  onChange={handleAddOnChange}  />{" "}
          <div>
            <h4>Online service</h4> <p>Access to multiplayer games</p>
          </div>{" "}
          <p className="price">+${toggled?"10/yr":"1/mo"}</p>
        </li>
        <li className="add_on">
          <input type="checkbox" name=""  id="" onChange={handleAddOnChange} />{" "}
          <div>
            <h4>Larger Storage</h4> <p>Extra 1TB of cloud save</p>
          </div>{" "}
          <p className="price">+${toggled?"20/yr":"2/mo"}</p>
        </li>
        <li className="add_on">
          <input type="checkbox" name="" id="" onChange={handleAddOnChange} />{" "}
          <div>
            <h4>Customizable profile</h4> <p>Custom theme on your profile</p>
          </div>{" "}
          <p className="price">+${toggled?"20/yr":"2/mo"}</p>
        </li>
      </ul>
    </div>

    <div className="next_back">
    <button className="back" onClick={()=>(settoggled(false),setindex(1))}>Go Back</button>
    <button className="next" onClick={()=>setindex(3)} >  
      Next Step
    </button>
  </div>

    </div>
  );
};

export default Step3;
