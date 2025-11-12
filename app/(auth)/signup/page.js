import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import SocialBtn from "@/components/auth/SocialBtn";
import SubmitButton from "@/components/auth/SubmitButton";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <AuthLayout
      title="Signup"
      illustration="/illustartion.png"
      illustrationText="Paste the text in the input box, or import a file from your system."
      illustrationTitle="Paste Text Inside Box"
    >
      <form className="flex flex-col gap-4">
        <SocialBtn />
        <InputField label="First Name" type="text" placeholder="Enter Name" />
        <InputField label="Email" type="email" placeholder="Enter Email" />
        <InputField
          label="password"
          type="password"
          placeholder="Enter password"
        />
        <p className="text-sm font-normal">
          Did you forget your password?
          <Link
            href="#"
            className="underline text-sm text-[#3889EF] font-normal"
          >
            Reset it now.
          </Link>
        </p>
        <SubmitButton btnText="Create Acount" />
      </form>
      <div className="flex justify-center gap-2 mt-5">
        <p className="text-sm">Already have an account?</p>
        <Link href="/login" className="text-sm underline text-[#3889EF]">
          Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Signup;
