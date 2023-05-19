import React from "react";
import Horses from "../data/horses.json";

function HorsesPage() {
  return (
    <main id="main-content">
      <h1 className="horses__title">Våra hästar</h1>
      <div className="horses">
        <div className="horses__container">
          {Horses.map((item) => {
            return (
              <div className="horses__horse">
                <h2>{item.Title}</h2>
                <div className="horses__horse__inner">
                  <img />
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="horses__container">
          <h2>Rida i skogen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            explicabo cumque possimus, cupiditate nesciunt in natus totam
            veritatis illo. Omnis qui eligendi accusantium quia accusamus culpa,
            obcaecati saepe rem similique.
          </p>
          <div className="horses__img">
            <img />
            <img />
            <img />
          </div>
        </div>
        <div className="horses__container">
          <h2>Rida i hagen</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem
            exercitationem perspiciatis esse magni quisquam iure molestias
            dolorem iste pariatur doloribus, eveniet delectus, fugiat atque
            quia. Nulla modi magnam minus.
          </p>
          <div className="horses__img">
            <img />
            <img />
            <img />
          </div>
        </div>
      </div>
    </main>
  );
}
export default HorsesPage;
