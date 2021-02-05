import React, { Component } from "react";


export default class ThongTinSinhVien extends Component {
  render() {
    // this.props là thuộc tính có sẵn của react Component
    // So sánh this.state và this.props
    // Giống nhau : dùng để binding dữ liệu lên giao diện và đều là thuộc tính có sẵn của react class component
    // Khác nhau :
    // this.state quản lý các trạng thái của biến làm thay đổi giao diện
    // this.props nhận giá trị từ component cha truyền vào
    // this.state (=> gọi phương thức setState) có gán lại giá trị được nhưng this.props thì không cho phép gán lại giá trị

    let {sinhVien} = this.props
    return (
      <div classname="card text-white bg-dark">
        <div className="card text-left">
          <img
            width="100" height="300"
            className="card-img-top"
            src="https://picsum.photos/100/180"
            alt="abc"
          />
          <div className="card-body">
            <h4 className="card-title">{sinhVien?.ma}</h4>
            <p className="card-text">{sinhVien?.ten}</p>
            <p className="card-text">{sinhVien?.tuoi}</p>
          </div>
        </div>
      </div>
    );
  }
}
