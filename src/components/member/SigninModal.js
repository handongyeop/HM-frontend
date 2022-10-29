import React, { useEffect } from 'react';
import styled from 'styled-components';
import SigninPage from '../../pages/member/SigninPage';
import { useDispatch } from 'react-redux';
import { signinAction } from '../../redux/SignReducer';

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
  height: 600px;
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

const SigninModal = () => {
  const dispatch = useDispatch();
  const openSignin = () => dispatch(signinAction.toggle());

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
    <StyledModalDiv onClick={openSignin}>
      <StyledModalBodyDiv onClick={(e) => e.stopPropagation()}>
        <StyledModalCloseBtn onClick={openSignin}>✖</StyledModalCloseBtn>
        <SigninPage />
      </StyledModalBodyDiv>
    </StyledModalDiv>
  );
};

export default SigninModal;
