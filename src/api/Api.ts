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
        return instance.post(`follow/${user.id}`, {});
    },
    unfollowUsersApi(user: UserType) {
        return instance.delete(`follow/${user.id}`,);
    }
};
export const AuthMeApi = {
    me() {
        return instance.get('auth/me');
    },
    login(properties: formDateType) {
        return instance.post('auth/login', properties);
    },
    logOut() {
        return instance.delete('auth/login');
    },
};

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    updateProfileInfo(profileInfo: formDateDomainType) {
        return instance.put(`profile`, profileInfo);
    },
    savePhoto(image: File) {
        let formData = new FormData();
        formData.append('image', image);
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
    }
};
export type formDateType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type formDateDomainType = {
    userId: string
    lookingForAJob: boolean
    aboutMe:  string,
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}