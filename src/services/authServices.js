import jwtDecode from "jwt-decode";
import { api } from "./api";

function saveTokens(accessToken, refreshToken) {
    localStorage.setItem("access-token", accessToken);
    localStorage.setItem("refresh-token", refreshToken);
}

function getAccessToken() {
    return localStorage.getItem("access-token");
}

function getRefreshToken() {
    return localStorage.getItem("refresh-token");
}

function getRoleFromAccessToken(accessToken) {
    try {
        const { role } = jwtDecode(accessToken);

        return role;
    } catch (err) {
        console.log(err);
        return;
    }
}

async function getUser() {
    const token = getAccessToken()
    const { sub } = jwtDecode(token)
    try {        
        const user = await api.get("/users", { params: { id: sub} , headers: { "Authorization": `Bearer ${token}`}});

        return user;
    } catch (err) {
        console.log(err);
        throw new Error(err.message)
    }
}

async function signIn(email, password) {
    try {
        const res = await api.post("/auth/login", { email, password });
        
        saveTokens(res.data.token, res.data.refreshToken);        
        
    } catch (err) {
        console.log(err);
        throw new Error("Usuário ou senha inválidos");
    }
}

async function refreshToken() {
    const refresh_token = getRefreshToken();
    try {
        const res = await api.post("/auth/refresh", { refreshToken: refresh_token });

        const newAccessToken = res.data.accessToken;
        const newRefreshToken = res.data.refreshToken;        
        saveTokens(newAccessToken, newRefreshToken);        
    } catch (err) {
        localStorage.clear();
        window.location.replace("/");
    }
}

const authServices = {
    getAccessToken,
    getRefreshToken,
    getRoleFromAccessToken,
    getUser,
    refreshToken,
    signIn
}

export default authServices;
