import React from "react";
import Image from "next/image";

const AuthLayout = ({
  title,
  illustration,
  children,
  illustrationTitle,
  illustrationText,
}) => {
  return (
    <section className="flex min-h-screen flex-col w-full bg-white lg:flex-row">
      <div className="flex items-center justify-center w-full lg:w-1/2 px-5 my-auto py-5 sm:py-12 md:py-4">
        <div className="w-full max-w-[411px] mx-auto my-auto">
          <h1 className="mt-5 mb-6 sm:mb-[35px] text-[30px] sm:text-[38px] md:text-[45px] font-bold">
            {title}
          </h1>

          {children}
        </div>
      </div>

      <div className="flex-col items-center justify-center hidden w-1/2 lg:flex bg-[url('/bg-auth.svg')] p-3">
        <div className="flex flex-col items-center justify-center my-auto">
          <Image
            src={illustration}
            alt="Illustration"
            className="mb-[54px]"
            width={400}
            height={318}
          />
          <h2 className="mb-[10px] text-[26px] font-semibold">
            {illustrationTitle}
          </h2>
          <p className="max-w-sm text-center">{illustrationText}</p>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
