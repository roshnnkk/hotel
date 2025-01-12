import React from "react";

import PropTypes from "prop-types";
import { TextField } from "@mui/material";
const Input = ({ id, label, register, error, type = "text" }) => {
  return (
    <div>
      <TextField
        key={id}
        {...register}
        label={label}
        variant="outlined"
        fullWidth
        className="text-black bg-white rounded-md"
        type={type}
      />
      {!!error && <p className="text-sm text-red">{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.string,
 
  type: PropTypes.oneOf(["text", "textarea", "number", "password", "email"]),
};

export default Input;
