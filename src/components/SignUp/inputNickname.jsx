import React, { useState } from 'react'; 
import './style.scss'; 
import pro from "../../assets/images/progress.svg"
import pro1 from "../../assets/images/progress(1).svg"
import before from "../../assets/images/before.svg"
import error1 from "../../assets/images/error (1).svg"

export const InputNickname = ({ onBack, onNicknameChange }) => {
  const [nickname, setNickname] = useState(""); 

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname); 
    onNicknameChange(newNickname);
  };

  const handleDuplicateCheck = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='BeforeBtn' onClick={onBack}>
        <img src={before} alt='이전 버튼' />
      </div>
      <div className='MainWrapperName'>
        <div className='NameMent'>활동할 닉네임을<br/>입력해주세요</div>
        <div className='Password'>
          <div className='ID'>
            <input 
              className='NameInput' 
              placeholder='닉네임 입력' 
              value={nickname} 
              onChange={handleNicknameChange}
            />
            <button className='idbtn' onClick={handleDuplicateCheck}>중복 확인</button>
          </div>
          <div className='errorment1'>
            <img src={error1} alt='에러' />
            부적절한 닉네임<br/>· 비속어를 통해 상대를 비방하는 표현<br/>· 불쾌감을 줄 수 있는 표현<br/>· 사회/정치적 입장을 나타내는 표현
          </div>
        </div>
        <div className='progress'>
          <img src={pro1} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
          <img src={pro} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
        </div>
      </div>
    </>
  );
};

export default InputNickname;
