import axios from 'axios';
import useAuthStore from '../store/store';

const axiosInstance = axios.create({
  baseURL: 'http://15.165.181.78',
  // 추가 설정 (예: timeout 등) 필요 시 추가
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // zustand 스토어에서 토큰 가져오기
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // 헤더에 토큰 추가 (필요한 형식에 따라 변경)
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
