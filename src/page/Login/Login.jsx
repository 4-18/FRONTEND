import './LoginPagestyle.scss';
import LoginBtn from '../../components/Login/loginBtn';
import SignUpBtn from '../../components/Login/signUpBtn';
import LoginMent from '../../components/Login/loginMent';
import UserID from '../../components/Login/userID';
import UserPW from '../../components/Login/userPW';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/store'; // zustand 스토어 import

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const GoToMain = () => {
    navigate('/main');
  }

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {

      const response = await axios.post(
        'http://15.165.181.78/users/login',
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('로그인 성공:', response.data);

      if (response.status === 200) {
        setMessage(response.data.message);
        const token = response.headers['accesstoken'];
        const pureToken = token.replace('Bearer ', '');// 예시로 응답 헤더에서 토큰 가져오기 (헤더 이름에 따라 다를 수 있음)
        if (token) {
          setToken(pureToken);
        }
        // 페이지 이동 예시
        GoToMain(); // 원하는 경로로 이동
      }
    } catch (error) {
      if (error.response) {
        console.error('로그인 오류:', error.response.data);
      } else {
        console.error('네트워크 오류 또는 서버 접근 불가:', error.message);
      }
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
