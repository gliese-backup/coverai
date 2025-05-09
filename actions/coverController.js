"use server";

import { getUserFromCookies } from "@/lib/getUser";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { isAlphaNumericWithSpace } from "@/lib/utils";
import { getCollection } from "@/lib/db";

async function sharedCoverValidation(formData, user) {
  const errors = {};

  const ourCover = {
    line1: formData.get("line1"),
    line2: formData.get("line2"),
    line3: formData.get("line3"),
    author: ObjectId.createFromHexString(user.userId),
  };

  // Check for the data type if not string
  if (typeof ourCover.line1 != "string") ourCover.line1 = "";
  if (typeof ourCover.line2 != "string") ourCover.line2 = "";
  if (typeof ourCover.line3 != "string") ourCover.line3 = "";

  // Clean the extra whitespace
  ourCover.line1 = ourCover.line1.trim();
  ourCover.line2 = ourCover.line2.trim();
  ourCover.line3 = ourCover.line3.trim();

  // Line length
  if (ourCover.line1.length < 5)
    errors.line1 = "Too few characters, atleast 5.";
  if (ourCover.line1.length > 20)
    errors.line1 = "Too many characters, at max 20.";

  if (ourCover.line2.length < 7)
    errors.line2 = "Too few characters, atleast 7.";
  if (ourCover.line2.length > 25)
    errors.line2 = "Too many characters, at max 25.";

  if (ourCover.line3.length < 5)
    errors.line3 = "Too few characters, atleast 5.";
  if (ourCover.line3.length > 20)
    errors.line3 = "Too many characters, at max 20.";

  // No special characters allowed
  if (!isAlphaNumericWithSpace(ourCover.line1))
    errors.line1 = "No special characters allowed.";
  if (!isAlphaNumericWithSpace(ourCover.line2))
    errors.line2 = "No special characters allowed.";
  if (!isAlphaNumericWithSpace(ourCover.line3))
    errors.line3 = "No special characters allowed.";

  // Check for missing input
  if (ourCover.line1.length == 0) errors.line1 = "Field is required.";
  if (ourCover.line2.length == 0) errors.line2 = "Field is required.";
  if (ourCover.line3.length == 0) errors.line3 = "Field is required.";

  // return errors and ourCover
  return {
    ourCover,
    errors,
  };
}

export const createCover = async function (prevState, formData) {
  const user = await getUserFromCookies();

  if (!user) {
    return redirect("/");
  }

  const result = await sharedCoverValidation(formData, user);

  // If errors then return the errors
  if (result.errors.line1 || result.errors.line2 || result.errors.line3) {
    return { errors: result.errors };
  }

  // Save to db
  const coverCollection = await getCollection("covers");
  const newCover = coverCollection.insertOne(result.ourCover);
  return redirect("/");
};
