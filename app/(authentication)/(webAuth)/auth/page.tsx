import LoginSuspense from '@/components/view/login'

export const metadata = {
    title: "Facial Recognition | Login",
    description: "Log in to access services by Facial Recognition.",
};


const LoginPage = () => {
  return (
  <>
  <LoginSuspense />
  </>
  )
}

export default LoginPage