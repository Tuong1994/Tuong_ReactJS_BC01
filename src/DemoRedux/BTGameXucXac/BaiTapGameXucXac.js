import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class BaiTapGameXucXac extends Component {
  renderKetQua = () => {};
  render() {
    return (
      <div className="bgGameXucXac">
        <h1 className="text-center">Bài tập game xúc xắc</h1>
        <XucXac />
        {this.renderKetQua()}
        <div className="text-center display-4 text-warning">{this.props.tongDiem} : {this.props.ketQua}</div>
        <KetQuaTroChoi />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // Lấy mảng xúc xắc từ reducer về
  let mangXucXac = state.baiTapGameReducer.mangXucXac;
  // Tính tổng điểm từ mảng xúc xắc
  let tongDiem = mangXucXac.reduce((td, xucXac, index) => {
    return (td += xucXac.diem);
  }, 0);
  // Lấy tổng điểm tạo ra kết quả
  let ketQua = tongDiem > 11 ? "Tài" : "Xỉu";

  // props tạo ra từ hàm mapStateToProps
  return {
    tongDiem: tongDiem,
    ketQua: ketQua,
  };
};

export default connect(mapStateToProps)(BaiTapGameXucXac);
