import React, { Component } from 'react'
import BTPhone from './BTPhone'
import BTLaptop from './BTLaptop'

export default class BTProductList extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1 className='text-center'>Best Smartphone</h1>
                <div className='row'>
                    <div className='col-3'>
                        <BTPhone />
                    </div>
                    <div className='col-3'>
                        <BTPhone />
                    </div>
                    <div className='col-3'>
                        <BTPhone />
                    </div>
                    <div className='col-3'>
                        <BTPhone />
                    </div>
                </div>
                <h1 className='text-center'>Best Laptop</h1>
                <div className='row'>
                    <div className='col-3'>
                        <BTLaptop />
                    </div>
                    <div className='col-3'>
                        <BTLaptop />
                    </div>
                    <div className='col-3'>
                        <BTLaptop />
                    </div>
                    <div className='col-3'>
                        <BTLaptop />
                    </div>
                </div>
            </div>
        )
    }
}
