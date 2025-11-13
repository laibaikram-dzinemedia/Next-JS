import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import SocialBtn from "@/components/auth/SocialBtn";
import SubmitButton from "@/components/auth/SubmitButton";
import AuthMain from "@/components/general/AuthMain";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <AuthMain>
      <AuthLayout
        title="Login"
        illustration="/illustartion.png"
        illustrationText="Paste the text in the input box, or import a file from your system."
        illustrationTitle="Paste Text Inside Box"
      >
        <form className="flex flex-col gap-4">
          <SocialBtn />
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
          <SubmitButton btnText="Login" />
        </form>
        <div className="flex justify-center gap-2 mt-5">
          <p className="text-sm">Already have an account?</p>
          <Link href="/signup" className="text-sm underline text-[#3889EF]">
            Signup
          </Link>
        </div>
      </AuthLayout>
    </AuthMain>
  );
};

export default Login;
