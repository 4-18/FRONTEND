import './Loginstyle.scss';

export const UserPW = () => {
  return (
    <div className='BtnMainWrapper'>
      <div className='UserMent'>
        비밀번호
      </div>
      <div className='UserInputBox'>
        <input className='UserInput' placeholder='Password' />
      </div>
    </div>
  );
};

export default UserPW;
