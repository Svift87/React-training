const { default: Axios } = require("axios")

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9fd56641-0136-4192-9dff-106ac6213c71'
    }
})

export const usersAPI = {
    getUsers(currentPage, sizePage) {
        return instance
            .get(`users?page=${currentPage}&count=${sizePage}`)
            .then(response => {
                return response.data
            })
    }
}

export const followAPI = {
    getFolow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUnFolow(id) {
        return instance
            .post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}
