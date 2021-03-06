import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apartmentApi from "../../api/aparment_api";
import { APP_ROUTE } from "../../routes/app.routes";

import {
  getAllApartment,
  getApartmentBySearch,
  hideLoading,
  showLoading,
} from "../Actions";

const getAllApartmentApi = async (dispatch, params, action) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.getAllApartment(params);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getAllApartment(res.data));
      dispatch(hideLoading());
      if (action) {
        action();
      }
    } else {
      dispatch(getAllApartment(null));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getAllApartment({ apartment: null, maxPage: null }));
    dispatch(hideLoading());
    // window.alert(error);
  }
};

const getApartmentBySearchApi = async (dispatch, body, action) => {
  try {
    dispatch(showLoading());
    const res = await apartmentApi.searchRoom(body);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      dispatch(hideLoading());
      if (action) {
        action();
      }
    } else {
      dispatch(getApartmentBySearch([]));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getApartmentBySearch(null));

    // window.alert(error);
  }
};

const postAddApartment = async (body) => {
  try {
    const res = await apartmentApi.postAddApartment(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const postUpdateApartment = async (body) => {
  try {
    const res = await apartmentApi.postUpdateApartment(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const disableRoom = async (body) => {
  try {
    const res = await apartmentApi.disableRoom(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const activedRoom = async (body) => {
  try {
    const res = await apartmentApi.activeRoom(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
const disableApartment = async (body) => {
  try {
    const res = await apartmentApi.disableApartment(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const activedApartment = async (body) => {
  try {
    const res = await apartmentApi.activeApartment(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const postUpdateRoom = async (body) => {
  try {
    const res = await apartmentApi.postUpdateRoom(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

const postAddRoomForApartment = async (body) => {
  try {
    const res = await apartmentApi.postAddRoomForApartment(body);
    return res;
  } catch (error) {
    toast.error("Đã có lỗi xảy ra!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};

export {
  getAllApartmentApi,
  getApartmentBySearchApi,
  postAddApartment,
  postUpdateApartment,
  disableApartment,
  activedApartment,
  disableRoom,
  activedRoom,
  postUpdateRoom,
  postAddRoomForApartment,
};
