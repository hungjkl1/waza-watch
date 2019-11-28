import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import API from "../../core";
import { connect } from 'react-redux';
import './style.scss';
import BillHistoryCell from './bill';

class BillsHistory extends Component {
  constructor(props) {
    super(props);
    this.service = new API();
    this.state = {
      bills: []
    }
  }
  componentDidMount() {
    console.log(this.props.user._id)
    this.service.post("bill/getBillsByUser", { userId: this.props.user._id })
      .then(result => {
        this.setState({
          bills: result
        })
        console.log(result)
      })
      .catch(err => { alert(err); });
  }

  refreshBill = () => {
    this.service.post("bill/getBillsByUser", { userId: this.props.user._id })
    .then(result => {
      this.setState({
        bills: result
      })
      console.log(result)
    })
    .catch(err => { alert(err); });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h3>Lịch sử đơn hàng</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.bills.length <= 0 &&
                <p>Bạn chưa có hóa đơn nào</p>
              }
              {this.state.bills.length > 0 &&
                <div>
                  {this.state.bills.map((item) =>
                    <BillHistoryCell key={item._id} item={item} refreshBill={this.refreshBill}/>
                  )}
                </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(BillsHistory);
