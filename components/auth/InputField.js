import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div>
      <div>
        {label && (
          <label className="block mb-3 text-base font-semibold">{label}</label>
        )}
        <input
          type={type}
          className="w-full form-input p-[15px] rounded-lg bg-[#F6F6F6] border border-[#E9E9E9] text-[14px] text-[#595959] placeholder:text-[14px] l focus:outline-none focus:border-[#B0B0B0]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputField;
