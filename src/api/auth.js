import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000",
});





export const registerUser = (data) => API.post("/auth/register", data);



export const loginUser = (data) => API.post("/auth/login", data);




export const getMe = (token) =>
  API.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});




export const logoutUser = () => {
  localStorage.removeItem("token");
};







export const uploadAvatar = (file, token) => {
  const formData = new FormData();
  formData.append("avatar", file);

  return API.post("/auth/avatar", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};