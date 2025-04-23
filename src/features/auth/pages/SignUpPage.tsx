import React from "react";
import Auth from "../components/Auth";

const SignUpPage = () => {
  const handleSubmitSignup = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const myFormData = new FormData(event.currentTarget);
    const newUser = {
      first_name: myFormData.get("firstname") as string,
      last_name: myFormData.get("lastname") as string,
      email: myFormData.get("email") as string,
      password: myFormData.get("password") as string,
    };
    const confirmPassword = myFormData.get("confirmPassword");

    if (confirmPassword !== newUser.password) {
    }
    console.log(newUser);
    console.log(confirmPassword);

    // try {
    //   const user = await apiRequest("/signup", "POST", newUser);
    //   console.log(user);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <Auth login={false} handleSubmit={handleSubmitSignup} />
    </>
  );
};

export default SignUpPage;
