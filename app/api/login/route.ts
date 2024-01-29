import { apiAuth } from "@/services/axios/axoisRepo";
import Cookies from "js-cookie";
import { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (!user) {
  // res.status(401).send("Invalid credentials");
  // return;
  // }

  // Set authentication cookie
  // Cookies.set("auth_token", "");

  // Redirect to dashboard page
  // res.redirect("/");

  const body = req.body;

  console.log(body);
  return new Response("Ok")

}
