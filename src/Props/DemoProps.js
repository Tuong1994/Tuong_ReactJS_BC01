import React, { Component } from 'react';
import ThongTinSinhVien from './ThongTinSinhVien';

export default class DemoProps extends Component {
    mangSinhVien = [
        {ma: '01', ten: 'Jack', tuoi: 20},
        {ma: '02', ten: 'John', tuoi: 21},
        {ma: '03', ten: 'Michael', tuoi: 23},
    ];
    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv, index) => {
            return <div className='col-4' key={index}>
                <ThongTinSinhVien sinhVien = {sv} />
            </div>
        })
        return result;
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4">Thông tin sinh viên</h3>
                <div className="row">
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
                    </div>
                    <div className="col-4">
                        <ThongTinSinhVien sinhVien={this.mangSinhVien[2]} />
                    </div>
                </div>
            </div>
        )
    }
}
