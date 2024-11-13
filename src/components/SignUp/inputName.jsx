import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Signupstyle.scss'; 
import pro from "../../assets/images/progress.svg";
import pro1 from "../../assets/images/progress(1).svg";
import before from "../../assets/images/before.svg";

export const InputName = ({ setName }) => {
  const [name, setLocalName] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setLocalName(e.target.value);       
    setName(e.target.value);            
  };

  const handleBack = () => {
    navigate('/login'); 
  };

  return (
    <>
      <div className='BeforeBtn' onClick={handleBack}>
        <img src={before} alt='이전 버튼' />
      </div>
      <div className='MainWrapperName'>
        <div className='NameMent'>이름을<br/>입력해주세요</div>
        <div className='Name'>
          <input 
            className='NameInput' 
            placeholder='이름 입력' 
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className='progress'>
          <img src={pro} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
          <img src={pro1} alt='진행률'/>
        </div>
      </div>
    </>
  );
};

export default InputName;
