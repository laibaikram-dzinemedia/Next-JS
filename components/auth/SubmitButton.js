import React from "react";

const SubmitButton = ({ btnText }) => {
  return (
    <button
      type="submit"
      className="bg-[#3889EF] text-[#FFFFFF] text-[18px] font-medium rounded-[12px] w-full py-3 mt-[25px] flex items-center justify-center gap-2"
    >
      {btnText}
    </button>
  );
};

export default SubmitButton;
