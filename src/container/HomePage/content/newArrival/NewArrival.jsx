import React from "react";
import "./NewArrival.css";
import ImgStation from "../../../../assets/images/ImgBig/big2..svg";
import ImgWoman from "../../../../assets/images/ImgBig/big3..svg";
import ImgSpeakers from "../../../../assets/images/ImgBig/big4..svg";
import ImgPerfume from "../../../../assets/images/ImgBig/big5..svg";

function NewArrival() {
  return (
    <>
      <div className="timer-container">
        <div className="countdown-timer">
          <h3>Featured</h3>
          <div className="countdown-body">
            <h1>New Arrival</h1>
          </div>
        </div>
      </div>
      <div className="groupBigImg">
        <div className="groupBigImg_left">
          <img src={ImgStation} alt="" />
          <div className="groupBigImg_left-desc">
            <h1>PlayStation 5</h1>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <button>Shop Now!</button>
          </div>
        </div>
        <div className="groupBigImg_right">
          <div className="groupBigImg_right--top">
            <img src={ImgWoman} alt="" />
            <div className="groupBigImg_right--top-desc">
              <h1>Women’s Collections</h1>
              <p>Featured woman collections that give you another vibe.</p>
              <button>Shop Now!</button>
            </div>
          </div>
          <div className="groupBigImg_right--bottom">
            <div className="groupBigImg_right--bottom-left">
              <img src={ImgSpeakers} alt="" />
              <div className="groupBigImg_right--bottom-left-desc">
                <h1>Speakers</h1>
                <p>Amazon wireless speakers</p>
                <button>Shop Now!</button>
              </div>
            </div>
            <div className="groupBigImg_right--bottom-right">
              <img src={ImgPerfume} alt="" />
              <div className="groupBigImg_right--bottom-right-desc">
                <h1>Perfumes</h1>
                <p>GUCCI INTENSE OUD EDP</p>
                <button>Shop Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
