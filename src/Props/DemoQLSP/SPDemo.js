import React, { Component } from "react";

export default class SPDemo extends Component {
  render() {
    // let {sanPham} = this.props
    let {hinhAnh, tenSP, maSP, giaBan} = this.props.sanPham;
    let {xemCT} = this.props;
    return (
      <div>
        <div className="card text-left">
        <div style={{ width: "100%", height: 300 }}>
             <img
                className="card-img-top"
               src={hinhAnh}
                alt={hinhAnh}
                style={{ height: "100%" }}
              />
            </div>
          <div className="card-body">
            <h4 className="card-title">{tenSP}</h4>
            <p className="card-text">Mã sản phẩm : {maSP}</p>
            <p className="card-text">Giá : {giaBan}</p>
            <button className="btn btn-success" onClick={() => {
                xemCT(this.props.sanPham)
            }}>Xem chi tiết</button>
          </div>
        </div>
      </div>
    );
  }
}
