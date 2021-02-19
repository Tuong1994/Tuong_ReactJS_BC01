import React, { Component } from 'react'

export default class BTPhone extends Component {
  render() {
    let {maSP, tenSP, hinhAnh, gia} = this.props.phone

    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div>
            <div className="card bg-light" style={{ width: 300 }}>
              <img className="card-img-top" src={hinhAnh} alt={hinhAnh} style={{ maxWidth: '100%', height: 250 }} />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{tenSP}</h4>
                <p className="card-text">Giá : {gia}</p>
                <p className="card-text">Mã sản phẩm : {maSP}</p>
                <a href="#" className="btn btn-primary">Detail</a>
                <a href="#" className="btn btn-danger">Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
