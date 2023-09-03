import axios from 'axios';
import {UserType} from '../Redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cea6f080-ff85-4d71-9249-bb41cad72b89'
    }
});
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
            .then(res => res.data);
    },
    followUsersApi(user: UserType) {
        return instance.post(`follow/${user.id}`, {})
            .then(res => res);
    },
    unfollowUsersApi(user: UserType) {
        return instance.delete(`follow/${user.id}`,)
            .then(res => res);
    }
};
export const AuthMeApi = () => {
    return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')

        .then(res => res);
};
export const profileApi = (userId: string) => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(res => res);
};
