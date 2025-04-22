"use server";

import bcrypt from "bcrypt";
import { isAlphaNumeric } from "@/lib/utils";
import { getCollection } from "@/lib/db";

export const register = async function (prevState, formData) {
  const errors = {}; // username: , password:

  const ourUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  console.log(ourUser);

  //  Step 1: Validate the incoming user data
  if (typeof ourUser.username !== "string") ourUser.username = "";
  if (typeof ourUser.password !== "string") ourUser.password = "";

  ourUser.username = ourUser.username.trim();

  if (ourUser.username.length < 3)
    errors.username = "Username must be atleast 3 characters.";
  if (ourUser.username > 15)
    errors.username = "Username can not exceed 15 characters.";
  if (ourUser.username == "") errors.username = "Username must not be empty.";
  if (!isAlphaNumeric(ourUser.username))
    errors.username = "Username can't contain special characters.";
  // Check if the user is not already present in our database
  const usersCollection = await getCollection("users");
  const userInQuestion = await usersCollection.findOne({
    username: ourUser.username,
  });

  if (userInQuestion) {
    errors.username = "Username already exists.";
  }

  if (ourUser.password.length < 6)
    errors.password = "Password must be atleast 6 characters.";
  if (ourUser.password > 20)
    errors.password = "Password can not exceed 20 characters.";
  if (ourUser.password == "") errors.password = "Password must not be empty.";

  if (errors.username || errors.password) {
    return {
      errors,
      success: false,
    };
  }

  //  Step 2: Save the user in to our database

  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  ourUser.password = bcrypt.hashSync(ourUser.password, salt);

  usersCollection.insertOne(ourUser);

  //  Step 3: Send a cookie back for login session

  return { success: true };
};
