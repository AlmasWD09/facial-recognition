import LoginSuspense from '@/components/view/login'

export const metadata = {
    title: "Kirsten Munro | Login",
    description: "Log in to access services by Kirsten Munro.",
};


const LoginPage = () => {
  return (
  <>
  <LoginSuspense />
  </>
  )
}

export default LoginPage