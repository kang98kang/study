import React from 'react';
import './register.css'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className = 'wrapper'>
        <form action="">
            <h1>함께하기</h1>
                <div className='input-box'>
                    <input type="Email" placeholder='이메일' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='비밀번호' required />
                    <FaLock className='icon'/>
                </div>
                <button type='submit'>가입하기</button>

                <div className="register-link">
                    <p>이미 계정이 있으신가요? <Link to="/">돌아가기</Link> </p>
                </div>
        </form>

    </div>
  );
}

export default Register;