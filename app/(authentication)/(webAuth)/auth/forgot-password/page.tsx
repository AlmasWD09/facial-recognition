import ForgotPasswordSuspense from "@/components/view/forgotPasswordSuspense";


export const metadata = {
    title: "Kirsten Munro | Forgot Password",
    description: "Reset your password to regain access to services by Kirsten Munro.",
};

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordSuspense />
    </>
  );
};

export default ForgotPassword;
