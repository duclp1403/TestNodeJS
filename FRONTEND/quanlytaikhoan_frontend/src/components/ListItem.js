import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card text-left">
                <img className="card-img-top" src={this.props.image} />
                <div className="card-body">
                    <h4 className="card-title">Tên Thợ: {this.props.tentho}</h4>
                    <p className="card-text">Địa chỉ: {this.props.diachi}</p>
                    <p className="card-text">Số điện thoại: {this.props.sodt}</p>
                    <p className="card-text">Số sao: {this.props.sosao}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default ListItem;