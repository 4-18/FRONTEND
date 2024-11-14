import './Loginstyle.scss';

export const UserPW = ({ setPassword }) => {
  const handleInputChange = (e) => {
    setPassword(e.target.value);  
  };

  return (
    <div className='BtnMainWrapper'>
      <div className='UserMent'>
        비밀번호
      </div>
      <div className='UserInputBox'>
        <input 
          className='UserInput' 
          placeholder='Password' 
          type='password' 
          onChange={handleInputChange} 
        />
      </div>
    </div>
  );
};

export default UserPW;