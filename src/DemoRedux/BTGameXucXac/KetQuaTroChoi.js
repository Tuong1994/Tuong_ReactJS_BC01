import React, { Component } from 'react'
// Thư viện kết nối với store của redux
import {connect} from 'react-redux';
class KetQuaTroChoi extends Component {
    render() {
        let {stateGame} = this.props // khi connect mapStateToProps redux sẽ tự động sinh ra mapDispatchToProps
        return (
            <div className="container text-center">
                <div className="display-4">
                    Bạn chọn : <span className="text-success">{stateGame.banChon}</span>
                </div>
                <div className="display-4">
                    Số bàn thắng : <span className="text-warning">{stateGame.soBanThang}</span>
                </div>
                <div className="display-4 mb-5">
                    Tổng số bàn chơi : <span className="text-pimary">{stateGame.tongSoBanChoi}</span>
                </div>
                <div className="display-4">
                    <buttton onClick={() => {
                        // Tạo ra 1 action
                        const action = {
                            type: 'PLAY_GAME'
                        }
                        // Đưa action lên reducer
                        this.props.dispatch(action)
                    }} className="btn btn-success p-3"><span className="w-20 display-4">Play game</span></buttton>
                </div>
            </div>
        )
    }
}

// Viết hàm lấy giá trị từ store redux về biến thành props của component
const mapStateToProps = (state) => // state đại diện cho rootReducer 
{
    return {
        stateGame: state.baiTapGameReducer
    }
}
export default connect (mapStateToProps) (KetQuaTroChoi);