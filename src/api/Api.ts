import axios from 'axios';
import {UserType} from '../Redux/users-reducer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ea004040-459d-4448-bc5d-992a7230f4e8'
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
export const AuthMeApi = {
    me() {
        return instance.get('auth/me')
            .then(res => res);
    },
    login(properties: formDateType) {
        return instance.post('auth/login', properties)
            .then(res => res);
    },
    logOut() {
        return instance.delete('auth/login')
            .then(res => res);
    },
};
export type formDateType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => res);
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(res => res);
    },
    savePhoto(image: File) {
        let FD = new FormData();
        FD.append('image', image);
        return instance.put(`profile/photo`, FD, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};
