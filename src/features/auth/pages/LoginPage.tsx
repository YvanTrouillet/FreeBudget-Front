import React from "react";
import Auth from "../components/Auth";
import { apiRequest } from "../../../shared/utils/api";

const LoginPage = () => {
  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const newUser = {
      email: myFormData.get("email") as string,
      password: myFormData.get("password") as string,
    };
    console.log(newUser);
    try {
      const user = await apiRequest("/users", "POST", newUser);
      console.log(user);
    } catch (error) {}
  };
  return <Auth login={true} handleSubmit={handleSubmitLogin} />;
};

export default LoginPage;
