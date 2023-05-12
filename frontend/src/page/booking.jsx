import React from "react";
import { useState, useEffect } from "react";
import BookingPagePortal from "../components/portal/bookingPagePortal";
import Data from "../data/calender.json";

function Booking(props) {
  const todayMonth = new Date().toISOString().slice(5, 7);
  const Month = Data;
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [monthData, setMonthData] = useState(parseInt(todayMonth));


  const nextMonth = () => {
    if(monthData === 12){
      return setMonthData(1)
    }else{
    setMonthData(monthData + 1);
    }
  };
  const previousMonth = () => {
    if(monthData === 1){
      return
    }else{
      setMonthData(monthData - 1);
    }
  };
  const currentMonth = Month.find((x) => parseInt(x.id) === monthData);

  useEffect(() => {
    fetch("http://localhost:8000/booking")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main id="main-content">
      <h1 className="booking__title">Boka lektion</h1>
      <div className="booking">
        <h2>Se Lediga tider</h2>
        <div className="booking__container">
          <div className="booking__weeknav">
            <button className="booking__weeknav__btn" onClick={previousMonth}>
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <p>{currentMonth.month}</p>
            <button className="booking__weeknav__btn" onClick={nextMonth}>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="booking__inner">
            <ul className="booking__inner__lista">
              {data.map((event, index) => {
                const portalId = `portal-${index}`;
                const googledate = event.startTime.slice(5,7)
                const [date, time] = event.startTime.split("T");
                const timeDataStart = `${date} ${time.slice(0, 5)}`;
                const timeDataEnd = `${event.endTime.slice(11, 16)}`;
                if(currentMonth.id === googledate)
                {
                return (
                  <li id={event.id} className="booking__inner__item">
                    <span className="booking__inner__text">
                      {event.title} {timeDataStart} - {timeDataEnd}
                    </span>
                    <button
                      onClick={() => setIsOpen(portalId)}
                      className="booking__inner__btn"
                    >
                      Välj
                    </button>
                    <BookingPagePortal
                      Title={event.title}
                      starTime={event.startTime}
                      endTime={event.endTime}
                      id={event.id}
                      isOpen={isOpen === portalId}
                      onClose={() => setIsOpen(false)}
                    />
                  </li>
                );}
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Booking;
