import axios from 'axios'

class UserService {
    getUsers(pageNumber) {
        return axios.get("http://localhost:8080/api",
            {params: { pageNumber: pageNumber}})
    }
}

export default new UserService()