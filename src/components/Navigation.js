import React from 'react';
import './Navigation.css';
import gym from '../img/gym.jpg';
import trainer from '../img/trainer.jpg';
import calculator from '../img/calculator.jpg';
import information from '../img/information.jpg';
import board from '../img/board.jpg';
import shop from '../img/shop.jpg';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const slide = (e) => {
    e.target.className = 'icon-menu-slide';
  };

  const normal = (e) => {
    e.target.className = 'icon-menu';
  };
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to={'/gym'}>
            <img
              src={gym}
              alt="운동시설"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
        <li>
          <Link to={'/trainer'}>
            <img
              src={trainer}
              alt="트레이너"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
        <li>
          <Link to={'/calculator'}>
            <img
              src={calculator}
              alt="칼로리 계산기"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
        <li>
          <Link to={'/information'}>
            <img
              src={information}
              alt="운동정보"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
        <li>
          <Link to={'/board'}>
            <img
              src={board}
              alt="커뮤니티"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
        <li>
          <Link to={'/shop'}>
            <img
              src={shop}
              alt="쇼핑"
              className="icon-menu"
              onMouseOver={slide}
              onMouseOut={normal}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
