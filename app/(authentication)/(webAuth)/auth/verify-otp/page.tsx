import VerifyCode from "@/components/view/verifyCode";


export const metadata = {
    title: "Kirsten Munro | Verify OTP",
    description: "Enter the OTP sent to your email to verify and reset your password.",
};

const VerifyPage = () => {
  return (
    <>
      <VerifyCode />
    </>
  );
};

export default VerifyPage;
