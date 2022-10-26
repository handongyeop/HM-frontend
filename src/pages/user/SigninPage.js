import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <form>
        <div>
          <input type="email" placeholder="이메일" />
        </div>
        <div>
          <input type="password" placeholder="비밀번호" />
        </div>
        <div>
          <span></span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
