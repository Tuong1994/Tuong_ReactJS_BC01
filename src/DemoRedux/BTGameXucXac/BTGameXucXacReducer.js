import { forwardRef } from "react";

const stateDefault = {
  banChon: "Tài",
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 1, hinhAnh: "./img/video_19_game_xuc_xac/1.png" },
    { diem: 1, hinhAnh: "./img/video_19_game_xuc_xac/2.png" },
    { diem: 1, hinhAnh: "./img/video_19_game_xuc_xac/3.png" },
  ],
};

export const baiTapGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_TAI_XIU": {
      state.banChon = action.giaTri;

      return { ...state };
    }
    case 'PLAY_GAME' : {
        // Xử lý random
        // B1 : Tạo ra mảng xúc xắc ngẫu nhiên
        let mangXXNN = [];
        for(let i = 0; i < 3; i++){
            // Tạo ra số ngẫu nhiên
            let soNgauNhien = (Math.floor(Math.random() * 6) + 1);
            // Tạo ra 3 object ngẫu nhiên
            let xxNN = {diem: soNgauNhien, hinhAnh:`./img/video_19_game_xuc_xac/${soNgauNhien}.png`}
            mangXXNN.push(xxNN);
        }
        state.mangXucXac = mangXXNN;
        // Xử lý kết quả
        let tongDiem = mangXXNN.reduce((td, xucXac, index) => {
            return td += xucXac.diem;
        },0)
        if ((tongDiem >= 11 && state.banChon === 'Tài') || (tongDiem < 11 && state.banChon === 'Xỉu')) {
            state.soBanThang += 1
        }
        state.tongSoBanChoi +=1
        return {...state};
    }
// default nếu không có xảy ra action nào sẽ trả về state mặc định
    default:
      return { ...state };
  }
};
