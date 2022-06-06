import React from "react";

const WeekTwo = () => {
  return (
    <div className="week week-2">
      <div className="day sunday">
        <span className="number">5</span>
        <span className="large-letter">G</span>
      </div>
      <div className="day monday">
        <span className="number">6</span>
        <p>
          <a href="https://www.npr.org/2020/07/08/888641022/walter-mercado-remembered-with-mucho-mucho-amor">
            Read: <b>Walter Mercado</b>
          </a>
        </p>
      </div>
      <div className="day tuesday">
        <span className="number">7</span>
        <p>
          <a href="https://www.fxnetworks.com/shows/pride">
            Watch: <b>FX Pride</b>
          </a>
        </p>
      </div>
      <div className="day wednesday">
        <span className="number">8</span>
        <p>
          <a href="https://en.wikipedia.org/wiki/Bayard_Rustin">
            Learn: <b>Bayard Rustin</b>
          </a>
        </p>
      </div>
      <div className="day thursday">
        <span className="number">9</span>
        <p>
          <a href="https://www.hulu.com/series/please-like-me-172a0482-c365-4225-935e-255d45314c52">
            Watch: <b>Please Like Me</b>
          </a>
        </p>
      </div>
      <div className="day friday">
        <span className="number">10</span>
        <p>
          <a href="https://www.youtube.com/watch?v=S-LRITaHUbI">
            Watch: <b>The Chloe videos</b>
          </a>
        </p>
      </div>
      <div className="day saturday">
        <span className="number">11</span>
        <div className="button__wrapper">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScGTiJWIXAvjk7mRt7xkBhumvmEkgKzI6SDeEZ7JDxWyw5BpA/viewform?usp=send_form">
          <button className="button button-style">02 Raffle Entry</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeekTwo;
