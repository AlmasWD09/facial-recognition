import ForgotPasswordSuspense from "@/src/components/view/forgotPasswordSuspense";



export const metadata = {
    title: "Facial Recognition | Forgot Password",
    description: "Reset your password to regain access to services by Facial Recognition.",
};

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordSuspense />
    </>
  );
};

export default ForgotPassword;
