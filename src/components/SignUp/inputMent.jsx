import React, { useState } from 'react';
import './Signupstyle.scss'; 
import pro from "../../assets/images/progress.svg";
import pro1 from "../../assets/images/progress(1).svg";
import before from "../../assets/images/before.svg";

export const InputMent = ({ onBack, onMentChange }) => {
  const [inputValue, setInputValue] = useState('');
  const maxLength = 30;

  const handleChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setInputValue(event.target.value);
      onMentChange(event.target.value);
    }
  };

  return (
    <>
      <div className='BeforeBtn' onClick={onBack}>
        <img src={before} alt='이전 버튼' />
      </div>
      <div className='MainWrapperName'>
        <div className='NameMent'>
          마지막으로,<br/>당신에게 편의점이란 ?
        </div>
        <div className='Password'>
          <div className='ID1'>
            <textarea 
              className='ContentInput' 
              placeholder='내용 입력'
              value={inputValue}
              onChange={handleChange}
              rows={2}
            />
          </div>
          <div className='charCount'>{`${inputValue.length}/${maxLength}`}</div>
          <div className='errorment'>
            당신에게 편의점이란 어떤 존재인지<br/>간단하게 남겨주세요 :)
          </div>
        </div>
        <div className='progress'>
          <img src={pro1} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
          <img src={pro} alt='진행률'/>
        </div>
      </div>
    </>
  );
};

export default InputMent;
