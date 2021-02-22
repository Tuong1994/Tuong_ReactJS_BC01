import React, { Component } from 'react'

export default class GioHang extends Component {

    render() {
        let {gioHang} = this.props;
        let {xoa} = this.props;
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
                           return <tr key={index}>
                               <th>{items.maSP}</th>
                               <th>{items.tenSP}</th>
                               <th><img src={items.hinhAnh} width={50} height={50}/></th>
                               <th>{items.gia}</th>
                               <th>{items.soLuong}</th>
                               <th>{items.gia * items.soLuong}</th>
                               <th><button className="btn btn-danger" onClick={() => {
                                   xoa(items.maSP)
                               }}>Xóa</button></th>
                           </tr>
                       })}
                    </tbody>
                </table>
            </div>
        )
    }
}
