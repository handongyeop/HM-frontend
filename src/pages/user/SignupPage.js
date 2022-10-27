import React, { useState } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';
import logo from '../../img/logo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { signupAction } from '../../redux/SignupSlice';

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
  button: {
    width: '3rem',
  },
}));

const StyledLogoImage = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

const SignupPage = () => {
  const [member, setMember] = useState({
    email: '',
    pw: '',
    nick: '',
    phone: '',
    isad: 'N',
  });
  const changeValue = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };
  const checkedIsad = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.checked
        ? (e.target.value = 'Y')
        : (e.target.value = 'N'),
    });
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const submitMember = () => {
    fetch('http://localhost:8080/member', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(member),
    })
      .then((res) => {
        if (res.status === 201) return res.json();
        else return null;
      })
      .then((res) => {
        if (res !== null) {
          dispatch(signupAction.toggle());
        } else {
          alert('책 등록에 실패하였습니다.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <StyledLogoImage src={logo}></StyledLogoImage>
      <div>이메일로 회원가입</div>
      <form autoComplete="on">
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="이메일"
            type="email"
            name="email"
            onChange={changeValue}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="비밀번호"
            type="password"
            name="pw"
            autoComplete="off"
            onChange={changeValue}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField label="비밀번호 확인" type="password" autoComplete="off" />
          <Button variant="outlined">중복확인</Button>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="닉네임"
            type="text"
            name="nick"
            onChange={changeValue}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <TextField
            label="휴대폰번호"
            type="text"
            name="phone"
            onChange={changeValue}
          />
          <Button variant="outlined">인증번호전송</Button>
        </FormControl>
        <FormControlLabel
          value="Y"
          control={<Checkbox color="primary" />}
          label="서비스 이용 약관에 동의합니다."
          labelPlacement="end"
        />
        <FormControlLabel
          value="Y"
          control={<Checkbox color="primary" />}
          label="해당 사이트의 광고 수신에 동의합니다"
          name="isad"
          labelPlacement="end"
          onChange={checkedIsad}
        />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <Button variant="contained" onClick={submitMember}>
            가입하기
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default SignupPage;
