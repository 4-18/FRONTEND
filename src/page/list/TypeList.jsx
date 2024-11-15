import React, { useState } from 'react';
import back from '../../assets/img/back_black.svg'
import mypage_icon from '../../assets/img/mypage_icon.svg'
import search_icon from '../../assets/img/search_icon.svg'
import Recipe from '../../components/Recipe'
import { useNavigate } from 'react-router-dom';


const TypeList = () => {
    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };
    const GoToMypage = () => {
        navigate("/Mypage");
    }

    return (
        <div className='type_list_wrap'>
            <div className="top">
                <img src={back} alt="" className='back' onClick={handleBackClick}/>
                <p className="title">면류</p>
                <img src={mypage_icon} alt="" className='mypage_icon' onClick={GoToMypage}/>
            </div>
            <div className="search_div">
                <input type="text" className='input' placeholder='조합이름을 검색하세요.' />
                <img src={search_icon} alt="" />
            </div>
            <div className="title_div">
                <p className="title">오늘의 가격</p>
                <p className="price">34,000</p>
            </div>
            <div className='range'>
                <input type="range" min={0}
                    max={34000}
                    value={rangeValue}
                    onChange={handleRangeChange}
                    style={{
                        background: `linear-gradient(to right, #F55B03 0%, #F55B03 ${(rangeValue / 34000) * 100}%, #D9D9D9 ${(rangeValue / 34000) * 100}%, #D9D9D9 100%)`}} />

            </div>
            <div className='select'>
                <select >
                    <option>추천순</option>
                    <option>최신순</option>
                    <option>후기순</option>
                </select>
            </div>
            <div className="list_div">
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    )
}

export default TypeList