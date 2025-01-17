import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reservationBackground from "../assets/images/reservationBackground.jpg";

const ReservationDetails = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("userData"));

      if (data && data.reservations && data.reservations.length > 0) {
        const latestReservation =
          data.reservations[data.reservations.length - 1];
        latestReservation.checkInDate = new Date(latestReservation.checkInDate);
        latestReservation.checkOutDate = new Date(
          latestReservation.checkOutDate
        );
        setUserData(latestReservation);
      }

      setLoading(false);
    }, 2000);
  }, []);

  const handleEdit = () => {
    navigate("/reserveForm");
  };

  const handleRemove = () => {
    localStorage.removeItem("userData");
    setUserData(null);
  };

  if (loading) {
    return (
      <div
        className="flex justify-center items-center min-h-screen bg-fixed bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${reservationBackground})` }}
      >
        <div className="spinner border-t-4 border-b-4 border-amber-500 w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-fixed bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${reservationBackground})` }}
    >
      <section className="mx-auto my-auto p-10 rounded font-custom bg-zinc-400/[0.7]">
        <h1 className="text-xl font-bold">Reservation Details</h1>
        {userData ? (
          <div className="mt-4">
            <p>
              <strong>Check-In Date:</strong>{" "}
              {userData.checkInDate.toLocaleDateString()}
            </p>
            <p>
              <strong>Check-Out Date:</strong>{" "}
              {userData.checkOutDate.toLocaleDateString()}
            </p>
            <p>
              <strong>Adults:</strong> {userData.adults}
            </p>
            <p>
              <strong>Children:</strong> {userData.children}
            </p>
            <p>
              <strong>Rooms:</strong> {userData.rooms}
            </p>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleEdit}
                className="bg-amber-500 text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Ok
              </button>
            </div>
          </div>
        ) : (
          <p>No reservation details found.</p>
        )}
      </section>
    </div>
  );
};

export default ReservationDetails;
