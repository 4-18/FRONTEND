import './Loginstyle.scss';

export const UserID = () => {
  return (
    <div className='BtnMainWrapper'>
      <div className='UserMent'>
        아이디
      </div>
      <div className='UserInputBox'>
        <input className='UserInput' placeholder='ID' />
      </div>
    </div>
  );
};

export default UserID;
