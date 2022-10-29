import React from 'react';
import logo from '../img/logo.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.css';
import SigninModal from './member/SigninModal';
import SignupModal from './member/SignupModal';
import { useSelector, useDispatch } from 'react-redux';
import { signinAction, signupAction } from '../redux/SignReducer';
import { memberAction } from '../redux/MemberReducer';

const StyledLogoImage = styled.img`
  width: 10rem;
  position: relative;
  top: 2rem;
  left: 2rem;
`;

const Header = () => {
  const member = useSelector((state) => state.login.value);
  const isLogin = useSelector((state) => state.login.isLogin);
  const signinVal = useSelector((state) => state.signin.value);
  const signupVal = useSelector((state) => state.signup.value);
  const dispatch = useDispatch();

  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <StyledLogoImage src={logo} alt="헬스매니저 로고 이미지" />
      </Link>
      <div className="header-menu">
        <nav>
          <ul>
            <li className="pointer">고객센터</li>
            {isLogin === false ? (
              <li
                className="pointer"
                onClick={() => dispatch(signupAction.toggle())}
              >
                회원가입
              </li>
            ) : (
              <li className="pointer">마이페이지</li>
            )}
            {isLogin === false ? (
              <li
                className="pointer"
                onClick={() => dispatch(signinAction.toggle())}
              >
                로그인
              </li>
            ) : (
              <li
                className="pointer"
                onClick={() => dispatch(memberAction.logout())}
              >
                로그아웃
              </li>
            )}
            {isLogin && <li>{member.nick}님 환영합니다.</li>}
          </ul>
        </nav>
      </div>
      {signinVal && <SigninModal />}
      {signupVal && <SignupModal />}
    </div>
  );
};

export default Header;
