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

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM GIO HANG":
      {
        // Xử lý setState trên redux
        // console.log('object', action);
        // B1: sao chép giỏ hàng ra array mới
        let gioHangUpdate = [...state.gioHang];
        // B2: Kiểm tra action.spGioHang gửi lên từ component có trong state.gioHang chưa?
        let index = gioHangUpdate.findIndex(
          (sp) => sp.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          gioHangUpdate.push(action.spGioHang);
        }
        // B3: Cập nhật lại state.gioHang => giống như this.setState lại component
        state.gioHang = gioHangUpdate;
        return { ...state };
      }
      break;
    case "THAY_DOI_SO_LUONG":
      {
        let gioHangUpdate = [...state.gioHang];

        // Kiểm tra sản phẩm có trong giỏ hàng chưa ?
        let index = gioHangUpdate.findIndex((sp) => sp.maSP === action.maSP);
        if (index !== -1) {
          if (gioHangUpdate[index].soLuong < 1) {
            alert("Số lượng không hợp lệ");
            gioHangUpdate[index].soLuong += action.soLuong;
          }
        }
        state.gioHang = gioHangUpdate;
      }
      break;
    case "XOA_SAN_PHAM":
      {
        let gioHangUpdate = [...state.gioHang];
        gioHangUpdate = gioHangUpdate.filter((sp) => sp.maSP !== action.maSP);
        state.gioHang = gioHangUpdate;
      }
      return { ...state };
  }
  return { ...state };
};
