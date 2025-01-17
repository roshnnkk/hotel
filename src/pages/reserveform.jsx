import React, { useEffect, useState } from "react";
import { FormControl, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import reserveBackground from "../assets/images/2.jpg";
import Buttons from "../components/buttons";
import "../styles/scroll-bar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { saveUserData } from "../store/actions/dataAction";

const Reserve = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Must be more than 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid"),
    phone: yup
      .number()
      .required("Phone is required")
      .typeError("Phone is required")
      .positive("Phone number is not correctly formatted"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  useEffect(() => {
    const savedUserData = JSON.parse(localStorage.getItem("userData"));
    if (savedUserData) {
      setCheckInDate(savedUserData.checkInDate ? new Date(savedUserData.checkInDate) : new Date());
      setCheckOutDate(savedUserData.checkOutDate ? new Date(savedUserData.checkOutDate) : new Date());
      setAdults(savedUserData.adults || 1);
      setChildren(savedUserData.children || 0);
      setRooms(savedUserData.rooms || 1);
    }
  }, []);

  const onSubmit = (data) => {
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      userData = { reservations: [] };
    } else if (!userData.reservations) {
      userData.reservations = [];
    }

    const newReservation = {
      checkInDate,
      checkOutDate,
      adults,
      children,
      rooms,
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    userData.reservations.push(newReservation);

    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch(saveUserData(userData));
    navigate("/reservationDetails");
  };

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  const handleDecrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const formFields = [
    { id: 1, label: "Your Name", name: "name", type: "text" },
    { id: 2, label: "Your Email", name: "email", type: "text" },
    { id: 3, label: "Your Phone", name: "phone", type: "number" },
  ];

  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

  return (
    <div className="flex flex-col min-h-screen bg-fixed bg-cover bg-center h-screen" style={{ backgroundImage: `url(${reserveBackground})` }}>
      <div className="flex flex-col justify-center md:mt-20 items-center ">
        <h1 className="text-white text-4xl font-bold">BOOKING</h1>
      </div>
      <section className="bg-gray-800 text-base bg-opacity-50 p-6 rounded-lg w-3/4 xm:max-w-96 mx-auto text-white font-custom mt-10 overflow-y-auto custom-scrollbar mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Choose date */}
          <div className="mb-4">
            <h4 className=" mb-2">Choose Date</h4>
            <div className="flex space-x-4">
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                placeholderText="Check-In Date"
                className="text-black px-3 py-2 rounded-md w-full"
                minDate={new Date()}
                maxDate={oneYearFromToday}
              />
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                placeholderText="Check-Out Date"
                className="text-black px-3 py-2 rounded-md w-full"
                minDate={checkInDate}
                maxDate={oneYearFromToday}
              />
            </div>
          </div>
          {/* Counters */}
          <div className="mb-4">
            <div className="flex flex-col xm:flex-row gap-x-5 justify-center">
              <div className="flex flex-col items-center">
                <h5 className=" mb-1">Adults</h5>
                <div className="flex items-center">
                  <button type="button" onClick={() => handleDecrement(setAdults, adults)} className="w-7 h-7 bg-amber-500 hover:bg-amber-800/[0.5] ease-out duration-300 text-white rounded">-</button>
                  <span className="w-7 h-7 text-center bg-white rounded text-black">{adults}</span>
                  <button type="button" onClick={() => handleIncrement(setAdults, adults)} className="w-7 h-7 bg-amber-500 text-white rounded hover:bg-amber-800/[0.5] ease-out duration-300">+</button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h5 className=" mb-1">Children</h5>
                <div className="flex items-center">
                  <button type="button" onClick={() => handleDecrement(setChildren, children)} className="w-7 h-7 bg-amber-500 text-white rounded hover:bg-amber-800/[0.5] ease-out duration-300">-</button>
                  <span className="w-7 h-7 text-center bg-white rounded text-black">{children}</span>
                  <button type="button" onClick={() => handleIncrement(setChildren, children)} className="w-7 h-7 bg-amber-500 text-white rounded hover:bg-amber-800/[0.5] ease-out duration-300">+</button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h5 className=" mb-1">Rooms</h5>
                <div className="flex items-center">
                  <button type="button" onClick={() => handleDecrement(setRooms, rooms)} className="w-7 h-7 bg-amber-500 text-white rounded hover:bg-amber-800/[0.5] ease-out duration-300">-</button>
                  <span className="w-7 h-7 text-center bg-white rounded text-black">{rooms}</span>
                  <button type="button" onClick={() => handleIncrement(setRooms, rooms)} className="w-7 h-7 bg-amber-500 text-white rounded hover:bg-amber-800/[0.5] ease-out duration-300">+</button>
                </div>
              </div>
            </div>
          </div>
          {/* Select room */}
          <div className="mb-4">
            <h4 className=" mb-2">Select Room</h4>
            <TextField style={{ width: "83%" }} select SelectProps={{ native: true }} variant="outlined" fullWidth className="text-black bg-white rounded-md">
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </TextField>
          </div>
          {/* Details */}
          <div className="mb-4">
            <h5 className=" mb-2">Enter Your Details</h5>
          </div>
          <FormControl className="mb-4 space-y-4">
            {formFields.map((field) => (
              <Input
                key={field.id}
                label={field.label}
                register={register(field.name)}
                type={field.type}
                error={errors[field.name]?.message}
              />
            ))}
            <Buttons width={"100px"} text={"Submit Form"} type={"submit"} />
          </FormControl>
        </form>
      </section>
    </div>
  );
};

export default Reserve;