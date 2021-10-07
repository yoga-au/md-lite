import axiosInstance from '../axiosConfig';

const pingServer = async () => {
  try {
    const response = await axiosInstance.get('/ping');
    return response.data;
  } catch (error) {
    return "Can't ping server";
  }
};

export default pingServer;
