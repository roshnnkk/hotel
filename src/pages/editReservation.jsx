import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { saveUserData } from "../store/actions/dataAction";
import background from "../assets/images/Hotel.jpg";
const EditReservation = () => {
  const { index } = useParams();
  const [reservation, setReservation] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.reservations && userData.reservations[index]) {
      setReservation(userData.reservations[index]);
    } else {
      navigate("/");
    }
  }, [index, navigate]);

  const handleSave = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    userData.reservations[index] = reservation;
    localStorage.setItem("userData", JSON.stringify(userData));
    dispatch(saveUserData(userData));
    navigate("/reservationDetails");
  };

  if (!reservation) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-cover bg-center pt-20 w-screen min-h-screen bg-scroll justify-center -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="bg-white text-base p-6 rounded-lg w-3/4 md:w-2/4 mx-auto text-gray-800 font-custom mt-10 mb-10">
        <h2 className="text-lg font-bold mb-2">Edit Reservation</h2>
        <div className="mb-4 w-fit">
          <label>Name:</label>
          <input
            type="text"
            value={reservation.name}
            onChange={(e) =>
              setReservation({ ...reservation, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            value={reservation.email}
            onChange={(e) =>
              setReservation({ ...reservation, email: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Phone:</label>
          <input
            type="text"
            value={reservation.phone}
            onChange={(e) =>
              setReservation({ ...reservation, phone: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Check-In Date:</label>
          <DatePicker
            selected={new Date(reservation.checkInDate)}
            onChange={(date) =>
              setReservation({ ...reservation, checkInDate: date })
            }
          />
        </div>
        <div className="mb-4">
          <label>Check-Out Date:</label>
          <DatePicker
            selected={new Date(reservation.checkOutDate)}
            onChange={(date) =>
              setReservation({ ...reservation, checkOutDate: date })
            }
          />
        </div>
        <div className="mb-4">
          <label>Adults:</label>
          <input
            type="number"
            value={reservation.adults}
            onChange={(e) =>
              setReservation({ ...reservation, adults: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Children:</label>
          <input
            type="number"
            value={reservation.children}
            onChange={(e) =>
              setReservation({ ...reservation, children: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label>Rooms:</label>
          <input
            type="number"
            value={reservation.rooms}
            onChange={(e) =>
              setReservation({ ...reservation, rooms: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default EditReservation;
