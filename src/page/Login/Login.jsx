import './LoginPagestyle.scss';
import LoginBtn from '../../components/Login/loginBtn';
import SignUpBtn from '../../components/Login/signUpBtn';
import LoginMent from '../../components/Login/loginMent';
import UserID from '../../components/Login/userID';
import UserPW from '../../components/Login/userPW';

export const LoginPage = () => {
  return (
    <div className='MainWrapper'>
    <div className='LogMainWrapper'>
      <LoginMent />
      <div className='input'>
        < UserID />
        < UserPW />
      </div>
      <div className='btn'>
        < LoginBtn />
        < SignUpBtn />
      </div>
    </div>
    </div>
  );
};

export default LoginPage;