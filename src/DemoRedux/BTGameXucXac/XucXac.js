import React, { Component } from "react";
import { connect } from "react-redux";
import { combineReducers } from "redux";

class XucXac extends Component {
  render() {
    let { mangXucXac } = this.props;
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <button
              className="button-1"
              onClick={() => {
                this.props.chonTaiXiu("Tài");
              }}
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            {mangXucXac.map((xucXac, index) => {
              return (
                <img
                  key={index}
                  className="m-2"
                  src={xucXac.hinhAnh}
                  width="100"
                />
              );
            })}
            {/* <img className="m-2" src={mangXucXac[0].hinhAnh} width="100" />
                        <img className="m-2" src={mangXucXac[1].hinhAnh} width="100" />
                        <img className="m-2" src={mangXucXac[2].hinhAnh} width="100" /> */}
          </div>
          <div className="col-4">
            <button
              className="button-2"
              onClick={() => {
                this.props.chonTaiXiu("Xỉu");
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (
  state // return {} = ({})
) => ({
  mangXucXac: state.baiTapGameReducer.mangXucXac,
});

const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (giaTri) => {
      //   console.log(giaTri);
      // Gửi giá trị được chọn lên redux
      const action = {
        type: "CHON_TAI_XIU",
        giaTri,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
