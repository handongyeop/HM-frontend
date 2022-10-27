import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.css';
import SigninModal from './user/SigninModal';
import SignupModal from './user/SignupModal';
import { useSelector, useDispatch } from 'react-redux';
import { signupAction } from '../redux/SignupSlice';
import { signinAction } from '../redux/SigninSlice';

const StyledLogoImage = styled.img`
  width: 10rem;
  position: relative;
  top: 2rem;
  left: 2rem;
`;

const Header = () => {
  const [login, setLogin] = useState(false);
  const isLogin = login;

  const dispatch = useDispatch();
  const signinVal = useSelector((state) => state.signin.value);
  const signupVal = useSelector((state) => state.signup.value);

  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <StyledLogoImage src={logo} alt="헬스매니저 로고 이미지" />
      </Link>
      <div className="header-menu">
        <nav>
          <ul>
            <li className="pointer">고객센터</li>
            {isLogin === login ? (
              <li
                className="pointer"
                onClick={() => dispatch(signupAction.toggle())}
              >
                회원가입
              </li>
            ) : (
              <li className="pointer">마이페이지</li>
            )}
            {isLogin === login ? (
              <li
                className="pointer"
                onClick={() => dispatch(signinAction.toggle())}
              >
                로그인
              </li>
            ) : (
              <li className="pointer">로그아웃</li>
            )}
          </ul>
        </nav>
      </div>
      {signinVal && <SigninModal />}
      {signupVal && <SignupModal />}
    </div>
  );
};

export default Header;
