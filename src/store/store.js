import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || null, // 초기화 시 localStorage에서 가져오기
  setToken: (token) => {
    localStorage.setItem('token', token); // localStorage에 저장
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem('token'); // localStorage에서 제거
    set({ token: null });
  },
}));

export default useAuthStore;

