import React, { Component } from 'react';
import './BaiTapGameXucXac.css';
import KetQuaTroChoi from './KetQuaTroChoi';
import XucXac from './XucXac';

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bài tập game xúc xắc</h1>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
