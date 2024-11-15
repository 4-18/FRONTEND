import React from 'react'
import great from '../assets/img/great.svg'

const Product = ({products}) => {
  return (
    <div className='product_list_wrap'>
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className='product_wrap'>
            <img src={product.imageUrl} alt={product.name} className="img" />
            <p className="title">{product.name}</p>
            <div className="bottom">
              <div className="type">#{product.foodType}</div> {/* foodType을 태그로 렌더링 */}
              <div className="great">
                <img src={great} alt="좋아요" />
                <p className="num">{product.countLikes}</p> {/* 좋아요 수 렌더링 */}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>상품이 없습니다.</p> // 데이터가 없을 때 표시할 내용
      )}
    </div>
  );
}

export default Product