import React from "react";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 sm:gap-[10px] mb-4">
        <button className="w-full flex items-center justify-center px-[24px] py-4 bg-[rgba(56,137,239,0.1)] rounded-xl">
          <Image
            src="/google.svg"
            alt="google-icon"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-sm font-normal">Sign in with Google</span>
        </button>
        <button className="w-full flex items-center justify-center px-4 py-4 bg-[rgba(56,137,239,0.1)] rounded-xl">
          <Image
            src="facebook (2).svg"
            alt="google-icon"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-sm font-normal">Sign in with Facebook</span>
        </button>
      </div>

      <div className="flex items-center my-[20px]">
        <div className="flex-grow h-px bg-[#DADADA]"></div>
        <span className="px-4 text-sm text-[#DADADA] font-normal">or</span>
        <div className="flex-grow h-px bg-[#DADADA]"></div>
      </div>
    </div>
  );
};

export default SocialBtn;
