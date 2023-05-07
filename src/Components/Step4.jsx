import React, { useEffect, useState } from "react";

const Step4 = ({
  setindex,
  settoggled,
  toggled,
  user,
  selectedAddOns,
  setSelectedAddOns,
}) => {
  const [total, settotal] = useState(Number(user.prixplan));

  useEffect(() => {
    const newTotal = selectedAddOns.reduce(
      (acc, addOn) => acc + Number(addOn.price),
      Number(user.prixplan)
    );

    settotal(newTotal);
  }, [selectedAddOns, user.prixplan]);

  
  return (
    <div className="top_cont">
      <div className="step">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="prices">
          <div className="name_price">
            <div className="selected_plan">
              <h4>
                {user.plan} ({toggled ? "Yearly" : "Monthly"})
              </h4>
              <button onClick={() => (setSelectedAddOns([]),settoggled(false),setindex(1))}>Change</button>
            </div>
            <h4 id="plan_prix">
              ${user.prixplan}/{toggled ? "yr" : "mo"}
            </h4>
          </div>
          <hr />
          {selectedAddOns.map((addOn) =>
            addOn.title != "" ? (
              <div className="name_price">
                <h4>{addOn.title}</h4>
                <h4 className="prix">
                  +${addOn.price}/{toggled ? "yr" : "mo"}
                </h4>
              </div>
            ) : null
          )}
        </div>
        <div className="total">
          <h4>Total (per {toggled ? "year" : "month"})</h4>
          <h3>
            +${total}/{toggled ? "yr" : "mo"}
          </h3>
        </div>
      </div>

      <div className="next_back">
        <button className="back" onClick={() => (setSelectedAddOns([]),setindex(2))}>
          Go Back
        </button>

        <button className="next confirm" onClick={() => setindex(5)}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Step4;
