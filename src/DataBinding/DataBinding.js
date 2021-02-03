import React, { Component } from 'react'
import style from './DataBinding.module.css'

export default class DataBinding extends Component {
    sinhVien = {
        id: 1,
        ten: 'Nguyễn Văn A'
    }
    renderSinhVien = () => {
        //Binding phương thức thì phương thúc đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
        return <div>
            id: {this.sinhVien.id} - ten: {this.sinhVien.ten}
        </div>
    }

    render() {
        let title = 'Hello World!!!';
        let SanPham = {
            ten: 'Iphone',
            gia: 100000,
            hinhAnh: 'https://picsum.photos/200/200'
        }
        return (
            <div>
                <p className={`${style.text} ${style['txt-light']}`}>Hello</p>
                <p style={{backgrounColor: 'red', color: 'blue'}}>AAAAA</p>

                {this.renderSinhVien()}
                <h1>{this.sinhVien.ten}</h1>
                <p>{title}</p>

                <div className="card text-white bg-dark w-25">
                    <img className="card-img-top" src={SanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{SanPham.ten}</h4>
                        <p className="card-text">{SanPham.gia}</p>
                    </div>
                </div>
            </div>

        )
    }
}

