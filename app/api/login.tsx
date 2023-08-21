import { apiAuth } from "@/services/axios/axoisRepo";
import Cookies from "js-cookie";
export default function handler({req, res}) {
  // Check user credentials
  const submission = {
    username: req.body.username,
    password: req.body.password,
  };
  const user = apiAuth.login(submission);
  if (!user) {
    res.status(401).send("Invalid credentials");
    return;
  }

  // Set authentication cookie
  Cookies.set("auth_token", "");

  // Redirect to dashboard page
  res.redirect("/");
}
