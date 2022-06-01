import React from "react";

const WeekOne = () => {
  return (
    <div className="week week-1">
      <div className="day sunday">
        <span className="large-letter">L</span>
      </div>
      <div className="day monday">
        <p>
          At the end of each week, fill out the google form for a chance to win
          a raffle!
        </p>
      </div>
      <div className="day tuesday"></div>
      <div className="day wednesday">
        <span className="number">1</span>
        <p>
          <a href="https://www.billiejeanking.com/biography/">
            Read: <b>Billie Jean King</b>
          </a>
        </p>
      </div>
      <div className="day thursday">
        <span className="number">2</span>
        <p>
          <a href="https://www.imdb.com/title/tt0118125/">
            Watch: <b>The Watermelon Woman</b>
          </a>
        </p>
      </div>
      <div className="day friday">
        <span className="number">3</span>
        <p>
          <a href="https://www.queerevents.ca/queer-corner/blog/history/history-dyke-march">
            Read: <b>A History of the Dyke March</b>
          </a>
        </p>
      </div>
      <div className="day saturday">
        <span className="number">4</span>
        <div className="button__wrapper">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_bRkmZ_rQD0FG2EiSqbyIM5rAuELIg1Dhl934H_NuWpR_VQ/viewform">
          <button className="button button-style">01 Raffle Entry</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeekOne;
