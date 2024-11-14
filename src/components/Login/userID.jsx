import './Loginstyle.scss';

export const UserID = ({ setUsername }) => {
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className='BtnMainWrapper'>
      <div className='UserMent'>
        아이디
      </div>
      <div className='UserInputBox'>
        <input 
          className='UserInput' 
          placeholder='ID' 
          onChange={handleInputChange} 
        />
      </div>
    </div>
  );
};

export default UserID;
