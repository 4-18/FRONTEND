import React, { useState } from 'react';
import './style.scss';
import InputName from "../../components/SignUp/inputName";
import InputID from "../../components/SignUp/inputID";
import InputNickname from "../../components/SignUp/inputNickname";
import InputMent from "../../components/SignUp/inputMent";
import NextBtn from "../../components/SignUp/nextBtn";

export const Signup = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [ment, setMent] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const isButtonActive = () => {
    if (step === 0) return name.length > 0;
    if (step === 1) return id.length > 0 && passwordValid;
    if (step === 2) return nickname.length > 0;
    if (step === 3) return ment.length > 0;
    return false;
  };

  return (
    <div className='MainWrapper'>
      {step === 0 && <InputName onBack={handleBack} setName={setName} />}
      {step === 1 && <InputID onBack={handleBack} setId={setId} setPasswordValid={setPasswordValid} />}
      {step === 2 && <InputNickname onBack={handleBack} onNicknameChange={setNickname} />}
      {step === 3 && <InputMent onBack={handleBack} onMentChange={setMent} />}
      <NextBtn onClick={handleNext} isActive={isButtonActive()} />
    </div>
  );
};

export default Signup;