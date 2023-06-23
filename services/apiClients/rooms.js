import axios from 'axios';
import { authConfig } from "@/services/auth"
const BASE_URL = process.env.API_BASE;


export const getRecentRooms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/room/recent`, authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getFullFurnishedRooms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/room/full-furnished`, authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getSemiFurnishedRooms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/room/semi-furnished`, authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getNoneFurnishedRooms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/room/none-furnished`, authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getWishlist = async ()=>{
    try {
        const response = await axios.post(`${BASE_URL}/wishlist`,{}, authConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const likeRoom = async (id)=>{
    try {
        const response = await axios.post(`${BASE_URL}/wishlist/add/${id}`,{}, authConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const dislikeRoom = async (id)=>{
    try {
        const response = await axios.delete(`${BASE_URL}/wishlist/remove/${id}`, authConfig)
        return response.data;
    } catch (error) {
        throw error;
    }
}