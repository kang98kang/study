import React from 'react';
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className = 'wrapper'>
        <form action="">
            <h1>로그인</h1>
                <div className='input-box'>
                    <input type="text" placeholder='아이디' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='비밀번호' required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />계정 기억하기</label>
                    <a href="#">비밀번호를 잊으셨나요?</a>
                </div>
                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>아직 계정이 없으신가요? <a href="#">가입하기</a> </p>
                </div>
        </form>

    </div>
  );
}

export default LoginForm;