import React, { Component } from "react";
// Kết nối react component với redux store
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên sản phẩm</th>
              <th>Hình Ảnh</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img
                      src={spGH.hinhAnh}
                      alt={spGH.hinhAnh}
                      width={60}
                      height={"auto"}
                    />
                  </td>
                  <td>
                    <button className="btn btn-success mr-2" onClick={() => {
                      this.props.thayDoiSoLuong(spGH.maSP, 1)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-danger ml-2" onClick={() => {
                      this.props.thayDoiSoLuong(spGH.maSP, -1);
                    }}>-</button>
                  </td>
                  <td>{spGH.giaBan}</td>
                  <td>{spGH.giaBan * spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => {
                      this.props.xoaSanPham(spGH.maSP);
                    }}>Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// Hàm chuyển state trên redux trở thành props của component
// state đại diện cho rootReducer
const mapStateToProps = (state) => {
  // Tạo props từ state redux
  return {
    gioHang: state.gioHangReducer.gioHang,
  };
};
const mapDispactchToProps = (dispatch) => {
  return {
    thayDoiSoLuong : (maSP, soLuong) => {
      console.log('object', maSP, soLuong);
      // Tạo action
      const action = {
        type: 'THAY_DOI_SO_LUONG',
        maSP: maSP,
        soLuong: soLuong
      }
      // Đưa action lên redux
      dispatch(action);
    },
    xoaSanPham : (maSP) => {
      // Tạo ra action
      const action = {
        type: 'XOA_SAN_PHAM',
        maSP: maSP
      }
      dispatch(action);
    }
  }
}
// Kết nối giữa component và redux
export default connect(mapStateToProps, mapDispactchToProps)(GioHang);
