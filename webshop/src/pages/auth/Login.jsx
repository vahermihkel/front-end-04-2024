import React from "react";
import AuthForm from "./AuthForm";
 
function Login() {
  return (
    <AuthForm 
      headerText="Login"
      isUsername={false}
      isConfirmPassword={false}
      footerText="Don't have an account? "
      linkUrl="/signup"
      linkText="Signup"
      isRememberMe={true}
      url={"signInWithPassword"}
      />
  );
}
 
export default Login;