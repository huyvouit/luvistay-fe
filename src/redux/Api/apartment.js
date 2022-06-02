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
      dispatch(getAllApartment({}));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getAllApartment(null));
    // window.alert(error);
  }
};

const getApartmentBySearchApi = async (dispatch, body, action) => {
  try {
    // const navigate = useNavigate();

    dispatch(showLoading());
    const res = await apartmentApi.searchRoom(body);
    if (res.success) {
      //   console.log(res.data);
      dispatch(getApartmentBySearch(res.data));
      dispatch(hideLoading());
      if (action) {
        action();
      }
      // navigate({pathname: APP_ROUTE.SEARCH,state: res.data});
    } else {
      dispatch(getApartmentBySearch([]));
      dispatch(hideLoading());
      //   console.log(res.data);
    }
  } catch (error) {
    dispatch(getApartmentBySearch([]));
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

export {
  getAllApartmentApi,
  getApartmentBySearchApi,
  postAddApartment,
  postUpdateApartment,
  disableApartment,
  postUpdateRoom,
};
