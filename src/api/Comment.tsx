// authService.ts
import AxiosInstance from './AxiosInstance.tsx';
import { errorMessage } from '../utils/SweetAlertEvent.tsx';

// Access Token 재발급 함수
export const refreshAccessToken = async () => {
    const token = localStorage.getItem('refreshToken');

    try {
        const response = await AxiosInstance.post('/auth/token',
            null,
            {
                headers: {
                    'Authorization': token  // Authorization 헤더 설정
                }
            }
        );

        localStorage.setItem('accessToken', response.data.accessToken);
    } catch (error) {
        const { message } = error.response.data;
        errorMessage(message);
    }
}