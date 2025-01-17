import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import background from "../assets/images/1.jpeg";

const ReservationList = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveUserData = async () => {
      const data = JSON.parse(localStorage.getItem("userData"));
      if (data) {
        setUserData(data);
      }
      setLoading(false);
    };

    retrieveUserData();
  }, []);

  const handleRemove = (index) => {
    const updatedUserData = { ...userData };
    updatedUserData.reservations.splice(index, 1);
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  const handleEdit = (index) => {
    navigate(`/editReservation/${index}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return (
      <div className="bg-cover bg-center w-screen pt-20 min-h-screen bg-scroll justify-center -z-10" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-white text-center text-4xl font-bold">List of reservations</h1>
        <section className="bg-white text-base p-6 rounded-lg w-3/4 mx-auto text-gray-800 font-custom mt-10 mb-10">
          <ul className="space-y-4">
            <li>No reservations found.</li>
          </ul>
        </section>
      </div>
    );
  }

  if (!userData.reservations || !userData.reservations.length) {
    return (
      <div className="bg-cover bg-center w-screen pt-20 min-h-screen bg-scroll justify-center -z-10" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="text-white text-center text-4xl font-bold">List of reservations</h1>
        <section className="bg-white text-base p-6 rounded-lg w-3/4 mx-auto text-gray-800 font-custom s">
          <ul className="space-y-4">
            <li>No reservations found.</li>
          </ul>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-cover bg-center w-screen bg-fixed min-h-screen bg-scroll justify-center -z-10" style={{ backgroundImage: `url(${background})` }}>
      <div className="pt-20">
        <h1 className="text-white text-center pb-4 text-4xl font-bold">List of reservations</h1>
        <section className="bg-white text-base p-6 rounded-lg w-3/4 md:w-2/4 mx-auto text-gray-800 font-custom ">
          <ul className="space-y-4 ">
            {userData.reservations.map((reservation, index) => (
              <li key={index} className="border-b-2 border-gray-300 pb-2">
                <p><strong>Name:</strong> {reservation.name}</p>
                <p><strong>Email:</strong> {reservation.email}</p>
                <p><strong>Phone:</strong> {reservation.phone}</p>
                <p><strong>Check-In Date:</strong> {new Date(reservation.checkInDate).toLocaleDateString()}</p>
                <p><strong>Check-Out Date:</strong> {new Date(reservation.checkOutDate).toLocaleDateString()}</p>
                <p><strong>Adults:</strong> {reservation.adults}</p>
                <p><strong>Children:</strong> {reservation.children}</p>
                <p><strong>Rooms:</strong> {reservation.rooms}</p>
                <button onClick={() => handleEdit(index)} className="mr-2 bg-amber-500 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
                <button onClick={() => handleRemove(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Remove</button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ReservationList;

