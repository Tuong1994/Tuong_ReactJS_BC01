import React, { Component } from "react";
import GioHang from "./GioHang";
import SPDemo from "./SPDemo";

export default class DemoQLSP extends Component {
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  state = {
    InfoSP: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    // dùng object lưu trữ thông tin điện thoại

    gioHang: [
      {
        maSP: 1,
        tenSP: "Iphone",
        hinhAnh: "./img/applephone.jpg",
        gia: 1000,
        soLuong: 1,
      },
    ],
  };

  // Hàm xử lý làm thay đổi state sẽ được đặt tại component chứa state
  themGioHang = (sanPham) => {
    // Sau khi click thì tạo ra 1 sản phẩm giống object trong giỏ hàng
    let spGH = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      gia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    };
    let gioHangUpdate = [...this.state.gioHang];
    // Xử lý kiểm trastate giỏ hàng có chứa dữ liệu sản phẩm đó khi click hay chưa => Nếu có thì tăng số lượng, không có thì thêm vào
    let indexSPGH = gioHangUpdate.findIndex((sp) => sp.maSP === sanPham.maSP);
    if (indexSPGH !== -1) {
      // Tìm vị trí index
      gioHangUpdate[indexSPGH].soLuong += 1;
    } else {
      gioHangUpdate.push(spGH);
    }

    this.state.gioHang.push(spGH);
    this.setState({
      // gioHang: //...giỏ hàng mới
      gioHang: gioHangUpdate,
    });
  };

  xoaGH = (maSP) => {
    let gioHangUpdate = [...this.state.gioHang];
    // let indexDelGH = gioHangUpdate.findIndex(sp => sp.maSP === maSP);

    // gioHangUpdate.splice(indexDelGH, 1);
    gioHangUpdate = gioHangUpdate.filter((spGH) => spGH.maSP !== maSP);
    this.setState({
      gioHang: gioHangUpdate,
    });
  };

  renderSanPham = () => {
    return this.mangSanPham.map((sp, index) => {
      return (
        <div key={index} className="col-4">
          <SPDemo
            sanPham={sp}
            xemCT={this.Info}
            themGioHang={this.themGioHang}
          />
        </div>
      );
      // <div key={index} className="col-4">
      //   <div className="card text-left">
      //     <div style={{ width: "100%", height: 300 }}>
      //       <img
      //         className="card-img-top"
      //         src={sp.hinhAnh}
      //         alt={sp.hinhAnh}
      //         style={{ height: "100%" }}
      //       />
      //     </div>
      //     <div className="card-body">
      //       <h4 className="card-title">{sp.tenSP}</h4>
      //       <p className="card-text">Mã sản phẩm : {sp.maSP}</p>
      //       <p className="card-text">Giá : {sp.giaBan}</p>
      //       <button className="btn btn-success" onClick={() => {
      //           this.Info(sp)
      //       }}>
      //         Xem chi tiết
      //       </button>
      //     </div>
      //   </div>
      // </div>
    });
  };

  Info = (sanPham) => {
    //setState
    //   console.log(sanPham);
    this.setState({
      InfoSP: sanPham,
    });
  };

  tangGiamSoLuong = (maSP, soLuong) => {
    let gioHangUpdate = [...this.state.gioHang];
    // B1: Tìm ra sản phẩm trong giỏ hàng dựa vào mã sản phẩm
    let index = gioHangUpdate.findIndex((sp) => sp.maSP === maSP);
    // B2 : Tăng , Giảm số lượng
    if (index !== -1) {
      gioHangUpdate[index].soLuong += soLuong;
    }
    // B3 : setState cho gioHang
    if (gioHangUpdate[index].soLuong >= 1) {
      this.setState({
        gioHang: gioHangUpdate,
      });
    } else if (gioHangUpdate[index].soLuong === 0) {
      this.xoaGH(maSP)
    }
  };

  render() {
    let {
      tenSP,
      hinhAnh,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.state.InfoSP;
    return (
      <div className="container">
        <h1 className="text-left">Giỏ hàng</h1>
        <GioHang
          gioHang={this.state.gioHang}
          xoa={this.xoaGH}
          tangGiam={this.tangGiamSoLuong}
        />
        <h3 className="text-center display-4">Danh sách sản phẩm</h3>
        <div className="row mb-5">{this.renderSanPham()}</div>

        <div className="row mb-5">
          <div className="col-4">
            <h3>{tenSP}</h3>
            <div style={{ width: "100%", height: 300 }}>
              <img
                className="card-img-top"
                src={hinhAnh}
                alt={hinhAnh}
                style={{ height: "100%" }}
              />
            </div>
          </div>
          <div className="col-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Màn Hình</th>
                  <th>{manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
