import React, { useState } from "react";
import { FormControl, TextField } from "@mui/material";
import loginBackground from "../assets/images/1.jpg";
import Buttons from "../components/buttons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../store/actions/authActions";
import { loginInfo } from "../constant/api.js";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.get(loginInfo);

      if (response.data) {
        if (response.data.length > 0) {
          const userData = response.data[0];

          if (
            username === userData.username &&
            password === userData.password
          ) {
            dispatch(setLoggedIn(true));
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            toast.success("Successfully logged in!");
            navigate("/reserveForm");
          } else {
            toast.error("Invalid username or password");
          }
        } else {
          toast.error("No user data found in the response");
        }
      } else {
        toast.error("Data property is undefined in the response");
      }
    } catch (error) {
      toast.error("Error logging in");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="bg-cover bg-center w-screen h-screen bg-scroll justify-center -z-10"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <section className="flex flex-col gap-5 justify-center h-screen items-center">
        <div>
          <p className="text-white text-3xl">Login</p>
        </div>
        <FormControl
          className="flex gap-2"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": { borderColor: "#f59e0b" },
              "&.Mui-focused fieldset": { borderColor: "green" },
            },
          }}
        >
          <TextField
            className="bg-white rounded"
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className="bg-white rounded"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <div className="flex flex-col items-center">
          <Buttons width="200px" text="Submit" onClick={handleLogin} />
          <Buttons width="60px" text="Back" onClick={handleBack} />
        </div>
      </section>
    </div>
  );
};

export default Login;
