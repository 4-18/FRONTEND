import './LoginPagestyle.scss';
import LoginBtn from '../../components/Login/loginBtn';
import SignUpBtn from '../../components/Login/signUpBtn';
import LoginMent from '../../components/Login/loginMent';
import UserID from '../../components/Login/userID';
import UserPW from '../../components/Login/userPW';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://15.165.181.78/users/login', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('로그인 성공:', response.data);
      navigate('/main');
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  return (
    <div className='MainLoginWrapper'>
      <div className='LogMainWrapper'>
        <LoginMent />
        <div className='input'>
          <UserID setUsername={setUsername} />
          <UserPW setPassword={setPassword} />
        </div>
        <div className='btn'>
          <LoginBtn onClick={handleLogin} />
          <SignUpBtn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;