import React from "react";
import ReactDom from "react-dom";
import { useState } from "react";

const bookingPagePortal = ({
  Title,
  starTime,
  endTime,
  id,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const [date, time] = starTime.split("T");
  const timeDataStart = `${time.slice(0, 5)}`;
  const timeDataEnd = `${endTime.slice(11, 16)}`;
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendBookning = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/bookingPage/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    alert("Tiden är bokad");
    window.location.reload(false);
  };

  return ReactDom.createPortal(
    <div className="BookingPage">
      <button className="BookingPage__btn--close" onClick={onClose}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <form onSubmit={sendBookning} action="bookingPage" method="put">
        <h4>{Title}</h4>
        <p>{date}</p>
        <p>
          Tid:{timeDataStart} - {timeDataEnd}
        </p>
        <p>Fyll i dina uppgifter:</p>
        <div className="BookingPage__item">
          <label htmlFor="name">Namn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="BookingPage__item">
          <label htmlFor="telenum">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="BookingPage__item BookingPage__item--alt">
          <p>
            Om du vill ha en bokningsbekräftelse, vänligen fyll i din
            mailadress:
          </p>
          <label htmlFor="mail">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="BookingPage__btn">
          Boka
        </button>
      </form>
    </div>,
    document.body
  );
};
export default bookingPagePortal;
