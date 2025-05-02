import React from "react";
import Auth from "../components/Auth";
import { apiRequest } from "../../../shared/utils/api";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const user = {
      email: myFormData.get("email") as string,
      password: myFormData.get("password") as string,
    };

    try {
      const auth = await apiRequest("/login", "POST", user);

      if (!auth) return;

      navigate("/dashboard");
    } catch (error) {}
  };
  return <Auth login={true} handleSubmit={handleSubmitLogin} />;
};

export default LoginPage;
