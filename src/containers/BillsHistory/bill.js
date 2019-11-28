import React, { Component } from 'react'
import API from  '../../core'
import _ from 'lodash'
export default class BillHistoryCell extends Component {
    constructor(props) {
        super(props);
        this.service = new API();
        this.state = {
            billDetail:[]
        }
    }
    
    showBillDetail = async () => {
        this.service.post('bill/getBillDetailByArray',{ids:this.props.item.billDetail}).then(result=>{
            this.setState({
              billDetail: result.data
            })
          })
    }

    closeBillDetail = () => {
         this.setState({
              billDetail: []
            })
    }

    cancelBill = () => {
        this.service.post('bill/cancelBill',{bill:this.props.item._id}).then(result=>{
            this.setState({
              billDetail: result.data
            })
            this.props.refreshBill()
          })
    }

    render() {
        return (
            <div className='bill-container'>
            <div>
              <div>Thời gian đặt hàng: {this.props.item.createAt}</div>
              <div>Trạng thái đơn hàng: {this.props.item.deliveryState}</div>
              <div>Địa chỉ giao hàng: {this.props.item.address}</div>
              <button className='btn btn-primary btn-sm btn-block' onClick={this.showBillDetail}>Xem chi tiết</button>
              {
                  !_.isEmpty(this.state.billDetail) && this.state.billDetail.map(billDetail=>{
                      return <div key={billDetail._id}>
                            {billDetail.product.name}
                      </div>
                  }) 
              }
              {
                !_.isEmpty(this.state.billDetail) > 0 &&  (<button className='btn btn-danger btn-sm btn-block' onClick={this.closeBillDetail}>
                    Đóng chi tiết
                </button>) 
            }
            </div>
            {
                this.props.item.deliveryState==='ORDER' && <React.Fragment>
                <hr/>
                <button onClick={this.cancelBill} button className='btn btn-danger btn-sm btn-block' >
                    Hủy đơn hàng
                </button>
                </React.Fragment>
            }
          </div>
        )
    }
}
