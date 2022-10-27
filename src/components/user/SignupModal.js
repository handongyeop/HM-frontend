import React, { useEffect } from 'react';
import styled from 'styled-components';
import SignupPage from '../../pages/user/SignupPage';
import { useDispatch } from 'react-redux';
import { signupAction } from '../../redux/SignupSlice';

const StyledModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const StyledModalBodyDiv = styled.div`
  position: absolute;
  width: 400px;
  height: 800px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const StyledModalCloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const SignupModal = () => {
  const dispatch = useDispatch();
  const openSignup = () => dispatch(signupAction.toggle());

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <StyledModalDiv onClick={openSignup}>
      <StyledModalBodyDiv onClick={(e) => e.stopPropagation()}>
        <StyledModalCloseBtn onClick={openSignup}>✖</StyledModalCloseBtn>
        <SignupPage />
      </StyledModalBodyDiv>
    </StyledModalDiv>
  );
};

export default SignupModal;
