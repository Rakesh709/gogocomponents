import React, { useState } from "react";
import OtpInput from "react-otp-input";

function OTPInput() {
  const [otp, setOtp] = useState("");
  return (
    <div className="flex justify-center">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span className="mx-1">-</span>}
        inputStyle="w-10 h-10 border rounded text-center"
        isInputNum
      />
    </div>
  );
}

export default OTPInput;
