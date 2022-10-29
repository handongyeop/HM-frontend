import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import logo from '../../img/logo.jpg';
import { useDispatch } from 'react-redux';
import { signinAction, signupAction } from '../../redux/SignReducer';
import { memberAction } from '../../redux/MemberReducer';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '20rem',
  },
}));

const StyledFindDiv = styled.div`
  height: 2rem;
  text-align: right;
  margin: 1rem 3rem 0 0;
`;

const StyledJoinDiv = styled.div`
  margin-top: 2rem;
  text-decoration: underline;
`;

const StyledLogoImage = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    pw: '',
  });
  const changeValue = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const openSignup = () => {
    dispatch(signupAction.toggle());
    dispatch(signinAction.toggle());
  };

  const submitLogin = () => {
    fetch('http://localhost:8080/member/login/' + login.email, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else return null;
      })
      .then((res) => {
        if (res !== null && res.email === login.email && res.pw === login.pw) {
          dispatch(memberAction.login(res));
          dispatch(signinAction.toggle());
        } else {
          alert('로그인에 실패하셨습니다.');
          setLogin({ email: '', pw: '' });
        }
      });
  };

  return (
    <div>
      <StyledLogoImage src={logo}></StyledLogoImage>
      <form autoComplete="on">
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            value={login.email}
            label="이메일"
            type="email"
            name="email"
            onChange={changeValue}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            비밀번호
          </InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            value={login.pw}
            autoComplete="off"
            onChange={changeValue}
            label="비밀번호"
            name="pw"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <Button variant="contained" color="primary" onClick={submitLogin}>
            로그인
          </Button>
        </FormControl>
      </form>
      <StyledFindDiv>
        <span>아이디 찾기</span> | <span>비밀번호 찾기</span>
      </StyledFindDiv>
      <StyledJoinDiv>
        <span className="pointer" onClick={openSignup}>
          회원가입하기
        </span>
      </StyledJoinDiv>
    </div>
  );
};

export default LoginPage;
