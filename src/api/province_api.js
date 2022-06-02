import axios from "axios";

const provinceApi = {
  getProvinces: () => {
    const url = "https://provinces.open-api.vn/api/p/";
    return axios.get(url);
  },
  getDistricts: (code) => {
    const url = `https://provinces.open-api.vn/api/p/${code}?depth=2`;
    return axios.get(url);
  },
  getWards: (code) => {
    const url = `https://provinces.open-api.vn/api/d/${code}?depth=2`;
    return axios.get(url);
  },
};
export default provinceApi;
