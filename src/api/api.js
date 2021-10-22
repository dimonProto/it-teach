import * as axios from "axios";


const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b2d602c8-632f-4ff0-b40d-8627e89a5200'
    }
})

export const usersAPI = {
    getUsers(currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => {
            return response.data
        })
    },
    getProfile(userId) {
        console.warn('new object profileAPI')
        return profileAPI.getProfile(userId)
    },
    follow(userID){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}` ).then( response => {
            return response.data
        })
    },
    unfollow(userID){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}` ).then( response => {
            return response.data
        })
    },
    getMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`,{email,password,rememberMe}).then( response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then( response => {
            return response.data
        })
    }
}
