import React, { Component } from 'react'
import API from '../../core'
import _ from 'lodash'
import { Button } from "react-bootstrap";
export default class BillHistoryCell extends Component {
	constructor(props) {
		super(props);
		this.service = new API();
		this.state = {
			billDetail: []
		}
	}
	formatNumber = (num) => {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	showBillDetail = async () => {
		this.service.post('bill/getBillDetailByArray', { ids: this.props.item.billDetail })
			.then(result => {
				console.log(result)
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
		this.service.post('bill/cancelBill', { bill: this.props.item._id })
			.then(result => {
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

					<a href='#' onClick={this.showBillDetail}>Xem chi tiết ></a>
					{
						!_.isEmpty(this.state.billDetail) &&

						this.state.billDetail.map((billDetail, index) =>
							<div key={billDetail._id} className='bill-detail-container'>
								<div>Sản phẩm #{index + 1}</div>
								<div className='bill-detail-container-two'>
									{billDetail.product.name} x {billDetail.quantity} = {this.formatNumber(billDetail.product.price * billDetail.quantity)} VNĐ
								</div>
							</div>
						)
					}
					{
						!_.isEmpty(this.state.billDetail) > 0 &&
						<Button variant="outline-danger" size="sm" onClick={this.closeBillDetail}>
							Đóng chi tiết
            </Button>
					}
				</div>
				{
					this.props.item.deliveryState === 'ORDER' && <React.Fragment>
						<hr />
						<Button variant={"danger"} onClick={this.cancelBill} >
							Hủy đơn hàng
            </Button>
					</React.Fragment>
				}
			</div>
		)
	}
}
