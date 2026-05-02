import axios from "axios";

const BASE_URL = "http://20.207.122.201/evaluation-service/notifications";

export const getNotifications = async (params = {}) => {
  try {
    const res = await axios.get(BASE_URL, { params });
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};