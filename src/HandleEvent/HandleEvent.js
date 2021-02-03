import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleClick = () => {
        alert ('Hello World');
    };

    showMessage = (name) => {
        alert(`Hello ${name}`);
    };

    render() {
        return (
            <div>

                {/* Cách 1 : Truyền callback trực tiếp */}
                <button id='btnClickMe' className='btn btn-success' onClick={this.handleClick}>Click me</button>
                <br />
                <button id='btnClick' className='btn btn-success' onClick={this.showMessage.bind(this, 'World')}>Click me</button>
                <br />

                {/* Cách 2 : Truyền hàm nặc danh */}
                <button onClick ={()=>{
                    this.showMessage('World')
                }}>Show message</button>
            </div>
        );
    }
}
