import React, { Component } from "react";

// kết nối redux
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    let { maSP, tenSP, giaBan, hinhAnh } = this.props.items;
    return (
      <div>
        <div className="card text-left bg-dark border border-secondary">
          <div style={{ width: "100%", height: 300 }}>
            <img
              className="card-img-top"
              src={hinhAnh}
              alt={hinhAnh}
              style={{ height: "100%" }}
            />
          </div>
          <div className="card-body text-white">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">Mã sản phẩm : {maSP}</p>
            <p className="card-text">Giá : {giaBan}</p>
            <button className="btn btn-success" onClick={() => {
              this.props.themGioHang(this.props.items);
            }}>
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Hàm để lấy giá trị của state (object, string, number...) từ redux về tạo thành props của component
const mapStateToProps = (state) => {
  return {

  }
}
// Hàm để tạo ra props là hàm xử lý sự kiện đưa dữ liệu lên redux
const mapDispactchToProps = (dispatch) => {
  return {
    themGioHang : (sanPhamClick) => {
      
      // Tạo ra spGioHang từ sanPhamClick
      const spGioHang = {
        ...sanPhamClick,
        soLuong: 1
      }
      // Đưa dữ liệu lên redux store
      const action = {
        type: 'THEM GIO HANG', // Thuộc tính bắt buộc khi gửi dữ liệu lên redux
        spGioHang: spGioHang
      }
      // Dùng hàm dispatch đưa dữ liệu lên reducer (redux store)
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispactchToProps)(SanPham)