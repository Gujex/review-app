import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  const showPrevious = () => {
    
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex >= 0) {
        return newIndex;
      } else {
        newIndex = people.length - 1;
        return newIndex;
      }
    });
  };

  const showNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex < people.length) {
        return newIndex;
      } else {
        newIndex = 0;
        return newIndex;
      }
    });
  };

  const checkRandom = (number) => {
    if (number === people.length -1) {
      return number - 1;
    }
      if (number === 0) {
        return number +1;
      }
      return number;
    
  }

  

  const randomPerson = () => {
    const randomNum = Math.floor(Math.random() *people.length);
    if (randomNum !== index) {
    setIndex(randomNum);
    } else {
      setIndex(checkRandom(randomNum))
    }
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={showPrevious}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={showNext}>
          <FaChevronRight />
        </button>
      </div>
      <button onClick = {randomPerson} className="random-btn">suprise me</button>
    </article>
  );
};

export default Review;
