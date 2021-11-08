import React, { useState } from "react";

const InputIndex: React.FC = () => {

  const [existingCustomerThreeMonthsAgo, setExistingCustomerThreeMonthsAgo] = useState("Hellllo");

  const handleSalesRegistraionInputs = (e: any) => {
    setExistingCustomerThreeMonthsAgo(e.target.value) ;
  }

  return (
    <div>
      <input type="text" value={existingCustomerThreeMonthsAgo} onChange={handleSalesRegistraionInputs}/>
    </div>
  );
};

export default InputIndex;
