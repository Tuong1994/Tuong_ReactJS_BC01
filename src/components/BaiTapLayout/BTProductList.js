import React, { Component } from "react";
import BTPhone from "./BTPhone";
import BTLaptop from "./BTLaptop";

export default class BTProductList extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "Black Berry",
      hinhAnh: "./img/sp_blackberry.png",
      gia: 1000,
    },
    { maSP: 2, tenSP: "Iphone X", hinhAnh: "./img/sp_iphoneX.png", gia: 2000 },
    { maSP: 3, tenSP: "Note 7", hinhAnh: "./img/sp_note7.png", gia: 3000 },
    { maSP: 3, tenSP: "Vivo 850", hinhAnh: "./img/sp_vivo850.png", gia: 3000 },
  ];

  renderPhone = () => {
    //   Hiển thị giao diện div các sản phẩm dựa vào this.mangSanPham
    const phone = this.mangSanPham.map((phone, index) => {
      return (
        <div className="col-3" key={index}>
          <BTPhone phone = {phone}/>
        </div>
      );
    });
    return phone;
  };

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Best Smartphone</h1>
        <div className="row">
          {this.renderPhone()}
          {/* <div className="col-3">
            <BTPhone />
          </div>
          <div className="col-3">
            <BTPhone />
          </div>
          <div className="col-3">
            <BTPhone />
          </div>
          <div className="col-3">
            <BTPhone />
          </div> */}
        </div>
        <h1 className="text-center">Best Laptop</h1>
        <div className="row">
          <div className="col-3">
            <BTLaptop />
          </div>
          <div className="col-3">
            <BTLaptop />
          </div>
          <div className="col-3">
            <BTLaptop />
          </div>
          <div className="col-3">
            <BTLaptop />
          </div>
        </div>
      </div>
    );
  }
}
