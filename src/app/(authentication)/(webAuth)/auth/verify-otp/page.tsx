import VerifyCode from "@/src/components/view/verifyCode";



export const metadata = {
    title: "Facial Recognition | Verify OTP",
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
