import React from "react";
import Auth from "../components/Auth";
import { apiRequest } from "../../../shared/utils/api";

const LoginPage = () => {
  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const user = {
      email: myFormData.get("email") as string,
      password: myFormData.get("password") as string,
    };
    console.log(user);
    try {
      const auth = await apiRequest("/login", "POST", user);
      console.log(auth);
    } catch (error) {}
  };
  return <Auth login={true} handleSubmit={handleSubmitLogin} />;
};

export default LoginPage;
