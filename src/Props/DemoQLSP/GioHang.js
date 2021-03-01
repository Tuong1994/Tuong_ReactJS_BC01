import React, { Component } from "react";

export default class GioHang extends Component {
  tinhTongTien = () => {
    let { gioHang } = this.props;
    let tongTien = gioHang.reduce((tongTien, sp) => {
      return tongTien += sp.soLuong * sp.gia;
    }, 0);
    return tongTien;
  };

  render() {
    let { gioHang, xoa, tangGiam } = this.props;
    return (
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá SP</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {gioHang.map((items, index) => {
              return (
                <tr key={index}>
                  <th>{items.maSP}</th>
                  <th>{items.tenSP}</th>
                  <th>
                    <img src={items.hinhAnh} width={50} height={50} />
                  </th>
                  <th>{items.gia}</th>
                  <th>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => {
                        tangGiam(items.maSP, 1);
                      }}
                    >
                      +
                    </button>
                    {items.soLuong}
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        tangGiam(items.maSP, -1);
                      }}
                    >
                      -
                    </button>
                  </th>
                  <th>{items.gia * items.soLuong}</th>
                  <th>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        xoa(items.maSP);
                      }}
                    >
                      Xóa
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng tiền</td>
              <td>{this.tinhTongTien().toLocaleString()}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
