import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/GioHangReducer";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      giaBan: 1000,
      soLuong: 1,
      hinhAnh: "./img/applePhone.jpg",
    },
  ],
};

const rootReducer = combineReducers({
  gioHangReducer: gioHangReducer,
  // state theo từng nghiệp vụ
});

export const store = createStore(rootReducer);
