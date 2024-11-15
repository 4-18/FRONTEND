import React, { useState } from 'react';
import './SignUpPagestyle.scss';
import InputName from "../../components/SignUp/inputName";
import InputID from "../../components/SignUp/inputID";
import InputNickname from "../../components/SignUp/inputNickname";
import NextBtn from "../../components/SignUp/nextBtn";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState(""); // Add password state
  const [passwordValid, setPasswordValid] = useState(false);

  const handleNext = async () => {
    if (step === 2) {
      const userData = {
        username: id,
        name: name,
        password: password,
        nickname: nickname,
      };

      try {
        const response = await axios.post('http://15.165.181.78/users', userData);
        console.log(response.data);
        navigate('/finish', { state: { name } }); // Pass name to the finish page
      } catch (error) {
        console.error("회원가입 오류:", error);
      }
    } else {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep(prevStep => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const isButtonActive = () => {
    if (step === 0) return name.length > 0;
    if (step === 1) return id.length > 0 && passwordValid;
    if (step === 2) return nickname.length > 0;
    return false;
  };

  return (
    <div className='MainsWrapper'>
      {step === 0 && <InputName onBack={handleBack} setName={setName} />}
      {step === 1 && <InputID onBack={handleBack} setId={setId} setPasswordValid={setPasswordValid} setPassword={setPassword} />}
      {step === 2 && <InputNickname onBack={handleBack} onNicknameChange={setNickname} />}
      <NextBtn onClick={handleNext} isActive={isButtonActive()} />
    </div>
  );
};

export default Signup;
