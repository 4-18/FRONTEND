import React from 'react'
import great from '../assets/img/great.svg'

const Product = () => {
  return (
    <div className='product_wrap'>
        <div className="img">

        </div>
        <p className="title">진라면</p>
        <div className="bottom">
            <div className="type">#면류</div>
            <div className="great">
                <img src={great} alt="" />
                <p className="num">58</p>
            </div>
        </div>
    </div>
  )
}

export default Product