import axios from "axios";

class UserService {
  getUsers(pageNumber) {
    return axios.get("http://localhost:8080/api", {
      params: { pageNumber: pageNumber }
    });
  }

  addUser(user) {
    return axios.post("http://localhost:8080/api/user", user);
  }

  deleteUser(userId, pageNumber) {
    return axios.delete("http://localhost:8080/api/user", {
      params: {
        userId: userId,
        pageNumber: pageNumber
      }
    });
  }

  updateUser(user, pageNumber) {
    return axios.put("http://localhost:8080/api/user", user);
  }
}

export default new UserService();
