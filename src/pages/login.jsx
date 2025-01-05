import { FormControl, TextField } from "@mui/material";
import React from "react";
import loginBackground from "../assets/images/1.jpg";
import Buttons from "../components/buttons";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center w-screen h-screen bg-scroll fixed justify-center  -z-10"
      style={{ backgroundImage: `url(${loginBackground})` }}
    >
      <section className="flex flex-col gap-5 justify-center h-screen items-center">
        <div>
          <p className="text-white text-3xl ">Login</p>
        </div>
        <FormControl
          className="flex  gap-2 "
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": { borderColor: "#f59e0b" },
              "&.Mui-focused fieldset": { borderColor: "green" },
            },
          }}
        >
          <TextField className="bg-white rounded " fullWidth label="email" />
          <TextField  className="bg-white rounded"fullWidth label="password" />
        </FormControl>
        <div>
          <Buttons width="200px" text="submit" />
        </div>
      </section>
    </div>
  );
};

export default Login;
