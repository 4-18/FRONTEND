import './Signupstyle.scss';

export const NextBtn = ({ onClick, isActive }) => {
  return (
    <div className='MainssWrapper'>
      <button 
        className={`Btn ${isActive ? 'active' : ''}`} 
        onClick={onClick} 
        disabled={!isActive}
      >
        <div className='Btn_Ment'>다음</div>
      </button>
    </div>
  );
};

export default NextBtn;
