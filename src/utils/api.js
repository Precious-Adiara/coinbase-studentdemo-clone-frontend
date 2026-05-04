const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (endpoint, options = {}) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    credentials: "include",
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

export const registerUser = (body) =>
  request("/auth/register", { method: "POST", body: JSON.stringify(body) });

export const loginUser = (body) =>
  request("/auth/login", { method: "POST", body: JSON.stringify(body) });

export const logoutUser = () =>
  request("/auth/logout", { method: "POST" });

export const getProfile = () => request("/auth/profile");

export const fetchAllCrypto = () => request("/crypto");

export const fetchTopGainers = () => request("/crypto/gainers");

export const fetchNewListings = () => request("/crypto/new");

export const addCrypto = (body) =>
  request("/crypto", { method: "POST", body: JSON.stringify(body) });