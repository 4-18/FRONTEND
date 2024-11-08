import './Loginstyle.scss';

export const LoginBtn = ({ onClick }) => {
  return (
    <div className='BtnMainWrapper'>
      <button className='loginBtn' onClick={onClick}>
        로그인
      </button>
    </div>
  );
};

export default LoginBtn;
