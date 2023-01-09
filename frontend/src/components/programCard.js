import React, { useState } from 'react';
import cardImg from '../img/wallpaper.jpg';
import './programCard.css'
import { Button } from "@material-ui/core";

function ProgramCard() {
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    <div className="wrapper" >
      <div className="card">
        <img src={cardImg} alt="" />
        <p>3 interested</p>
        <h2> Card Name</h2>
        <div className="tags">
          <span>Marketing</span>
          <span>Finance</span>
          <p>+2 more</p>
        </div>
        <Button variant="light">View Details</Button>
      </div>

      <div className="card">
        <img src={cardImg} alt="" />
        <p>3 interested</p>
        <h2> Card Name</h2>
        <div className="tags">
          <span>Marketing</span>
          <span>Finance</span>
          <p>+2 more</p>
        </div>
        <Button variant="light">Contained</Button>
      </div>

      <div className="card">
        <img src={cardImg} alt="" />
        <p>3 interested</p>
        <h2> Card Name</h2>
        <div className="tags">
          <span>Marketing</span>
          <span>Finance</span>
          <p>+2 more</p>
        </div>
        <Button variant=" " sx={{ color: 'black',}}>Apply</Button>
      </div>
    </div>

  );
}

// render(<ProgramCard />);
export default ProgramCard;