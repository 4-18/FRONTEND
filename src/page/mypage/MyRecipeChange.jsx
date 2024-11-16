import React, { useState, useEffect } from 'react';
import before from "../../assets/images/before.svg"
import my from "../../assets/images/user(2).svg"
import { useNavigate, useParams } from 'react-router-dom'; // useParams 추가
import axiosInstance from '../../api/api'; // axiosInstance 사용
import useAuthStore from '../../store/store';

const MyRecipeChange = () => {
    const { id } = useParams(); // URL에서 id 가져오기
    const token = useAuthStore.getState().token;
    const [recipeSteps, setRecipeSteps] = useState([""]);
    const [imagePreview, setImagePreview] = useState(null);
    const [storeSelections, setStoreSelections] = useState([{
        store: "",
        category: "",
        product: "",
        productId: "",
        categoryProducts: []
    }]);
    const [recipeName, setRecipeName] = useState("");
    const maxLength = 20;
    const stepMaxLength = 50;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 레시피 정보 가져오기
    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axiosInstance.get(`/api/recommendations/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.status === 200) {
                    const data = response.data.data;
                    setRecipeName(data.title || "");
                    setRecipeSteps(data.content.split(" ") || [""]);
                    setImagePreview(data.imageUrls ? data.imageUrls[0] : null); // 첫 번째 이미지 사용
                    setStoreSelections(data.productList.map(product => ({
                        store: "", // 서버에서 store 정보를 제공하지 않는 경우 빈 문자열로 초기화
                        category: product.foodType || "",
                        product: product.name || "",
                        productId: product.id || "",
                        categoryProducts: [] // 선택 시 동적으로 불러올 수 있습니다
                    })));
                }
            } catch (error) {
                setError("레시피 데이터를 가져오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipeData();
    }, [id, token]);

    const handleRecipeNameChange = (e) => {
        const value = e.target.value;
        if (value.length <= maxLength) {
            setRecipeName(value);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleStoreClick = async (store, index) => {
        const newSelections = [...storeSelections];
        newSelections[index].store = store;
        setStoreSelections(newSelections);

        try {
            const response = await fetch(`http://15.165.181.78/products/convenience/${store}`);
            const data = await response.json();
            if (data.status === 200) {
                newSelections[index].categoryProducts = data.data;
                setStoreSelections(newSelections);
            }
        } catch (error) {
            console.error("Failed to fetch store products:", error);
        }
    };

    const handleCategorySelect = async (category, index) => {
        const newSelections = [...storeSelections];
        newSelections[index].category = category;
        setStoreSelections(newSelections);

        try {
            const response = await fetch(`http://15.165.181.78/products/category/${category}`);
            const data = await response.json();
            if (data.status === 200) {
                newSelections[index].categoryProducts = data.data;
                setStoreSelections(newSelections);
            }
        } catch (error) {
            console.error("Failed to fetch category products:", error);
        }
    };

    const handleProductSelect = (product, productId, index) => {
        const newSelections = [...storeSelections];
        newSelections[index].product = product;
        newSelections[index].productId = productId;
        setStoreSelections(newSelections);
    };

    const addRecipeStep = () => {
        setRecipeSteps([...recipeSteps, ""]);
    };

    const deleteRecipeStep = (index) => {
        const newSteps = recipeSteps.filter((_, i) => i !== index);
        setRecipeSteps(newSteps);
    };

    const addStoreSelection = () => {
        setStoreSelections([...storeSelections, { store: "", category: "", product: "", productId: "", categoryProducts: [] }]);
    };

    const deleteStoreSelection = (index) => {
        const newSelections = storeSelections.filter((_, i) => i !== index);
        setStoreSelections(newSelections);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        const imageInput = document.getElementById("image-upload-input");
        const imageFile = imageInput.files[0];

        if (imageFile) {
            formData.append("files", imageFile);
        }

        const recommendationDto = {
            title: recipeName,
            content: recipeSteps.join(" "),
            productList: storeSelections.map(selection => selection.productId)
        };

        formData.append("updateRecommendationDto", new Blob([JSON.stringify(recommendationDto)], { type: "application/json" }));

        try {
            const response = await fetch(`http://15.165.181.78/recommendations/${id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData,
            });

            const data = await response.json();
            if (response.status === 200) {
                console.log("레시피가 성공적으로 수정되었습니다.");
                alert("레시피가 성공적으로 수정되었습니다.");
                navigate('/main');
            } else {
                console.error("레시피 수정에 실패했습니다.");
            }
        } catch (error) {
            console.error("서버 요청 실패:", error);
        }
    };

    return (
        <div>
            <div className='RecipeHeaderWrapper'>
                <img src={before} alt='이전' />
                <div className='recipePlusHeader'>나만의 편슐랭</div>
                <img src={my} alt='마이페이지' />
            </div>
            <div className="recipe-item-wrapper">
                <div className="image-upload">
                    <label htmlFor="image-upload-input">
                        <div className="image-placeholder">
                            {imagePreview ? <img src={imagePreview} alt="미리보기" /> : "이미지 "}
                            <span>+</span>
                        </div>
                    </label>
                    <input
                        id="image-upload-input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </div>

                <div className="input-section">
                    <label htmlFor="recipe-name">편슐랭 이름</label>
                    <input
                        type="text"
                        id="recipe-name"
                        maxLength={maxLength}
                        value={recipeName}
                        onChange={handleRecipeNameChange}
                    />
                    <div className='count'>
                        <div className="character-count">
                            {recipeName.length} / {maxLength}
                        </div>
                    </div>
                </div>

                <div className="store-selections">
                    <label>장보러가기</label>
                    {storeSelections.map((selection, index) => (
                        <div key={index} className="store-selection">
                            <div className="store-buttons">
                                {["GS", "CU", "Seven"].map((store) => (
                                    <button
                                        key={store}
                                        className={`store-button ${selection.store === store ? 'active' : ''}`}
                                        onClick={() => handleStoreClick(store, index)}
                                    >
                                        {store}
                                    </button>
                                ))}
                            </div>

                            <div className='cate'>
                                <div className="category-select">
                                    <select
                                        value={selection.category || ""}
                                        onChange={(e) => handleCategorySelect(e.target.value, index)}
                                    >
                                        <option value="">카테고리</option>
                                        <option value="면류">면류</option>
                                        <option value="밥류">밥류</option>
                                        <option value="야식류">야식류</option>
                                        <option value="간식류">간식류</option>
                                        <option value="다이어트류">다이어트류</option>
                                        <option value="빵류">빵류</option>
                                        <option value="음료류">음료류</option>
                                    </select>
                                </div>

                                <div className="product-select">
                                    <select
                                        value={selection.product || ""}
                                        onChange={(e) => {
                                            const selectedProduct = selection.categoryProducts.find(prod => prod.name === e.target.value);
                                            handleProductSelect(e.target.value, selectedProduct?.id || "", index);
                                        }}
                                    >
                                        <option value="">상품 이름</option>
                                        {selection.categoryProducts.map((product) => (
                                            <option key={product.id} value={product.name}>
                                                {product.name} {product.price}원
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className='deBtn'>
                                <button
                                    className="delete-store-selection"
                                    onClick={() => deleteStoreSelection(index)}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className='addBtn'>
                        <button className="add-store-selection" onClick={addStoreSelection}>+</button>
                    </div>
                </div>

                <div className="recipe-steps">
                    <label>레시피</label>
                    {recipeSteps.map((step, index) => (
                        <div key={index} className="recipe-step">
                            <textarea
                                placeholder={`${index + 1}. `}
                                maxLength={stepMaxLength}
                                value={step}
                                onChange={(e) => {
                                    const newSteps = [...recipeSteps];
                                    newSteps[index] = e.target.value;
                                    setRecipeSteps(newSteps);
                                }}
                            />
                            <div className='count'>
                                <div className="character-count">
                                    {step.length} / {stepMaxLength}
                                </div>
                            </div>
                            <div className='deBtn'>
                                <button className="delete-step" onClick={() => deleteRecipeStep(index)}>삭제</button>
                            </div>
                        </div>
                    ))}
                    <div className='addBtn'>
                        <button className="add-step" onClick={addRecipeStep}>+</button>
                    </div>
                </div>

                <div className="submit-button">
                    <button className='postBtn' onClick={handleSubmit}>편슐랭 수정하기</button>
                </div>
            </div>
        </div>
    )
}

export default MyRecipeChange