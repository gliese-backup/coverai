"use server";

export const register = async function (prevState, formData) {
  const errors = [];

  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  console.log(data);

  //  Step 1: Validate the incoming user data
  if (typeof data.username !== "string") data.username = "";
  if (typeof data.password !== "string") data.password = "";

  data.username = data.username.trim();

  if (data.username.length < 3)
    errors.push("Username must be atleast 3 characters");

  if (errors.length) {
    return {
      errors: errors,
      success: false,
    };
  }

  //  Step 2: Save the user in to our database
  //  Step 3: Send a cookie back for login session

  return { success: true };
};
