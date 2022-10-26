import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.css';
import SigninModal from './user/SigninModal';

const StyledLogoImage = styled.img`
  width: 10rem;
  position: relative;
  top: 2rem;
  left: 2rem;
`;

const StyledPointerLi = styled.li`
  cursor: pointer;
`;

const Header = () => {
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(false);

  const isLogin = login;

  const openSignin = () => {
    setSignin(!signin);
  };

  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <StyledLogoImage src={logo} alt="헬스매니저 로고 이미지" />
      </Link>
      <div className="header-menu">
        <nav>
          <ul>
            <li>고객센터</li>
            {isLogin === login ? (
              <StyledPointerLi onClick={openSignin}>회원가입</StyledPointerLi>
            ) : (
              <li>마이페이지</li>
            )}
            {isLogin === login ? (
              <StyledPointerLi onClick={openSignin}>로그인</StyledPointerLi>
            ) : (
              <li>로그아웃</li>
            )}
          </ul>
        </nav>
      </div>
      {signin && (
        <SigninModal closeModal={() => setSignin(!signin)}></SigninModal>
      )}
    </div>
  );
};

export default Header;
