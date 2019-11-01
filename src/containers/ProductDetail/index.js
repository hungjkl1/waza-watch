import React from "react";
import Swal from "sweetalert2";
import products from "./products.json";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./productdetail.scss";
import API from "../../core";
import _ from "lodash";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.service = new API();
    this.state = {
      product: {},
      quantity: 1
    };
  }
  
  formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  // NOTE: Gọi API lấy sản phẩm theo ID
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.service
      .post("product/getProduct", { id: this.props.match.params.id })
      .then(result => {
        this.setState({
          product: result.data.result
        });
      })
      .catch(err => {
        alert(err);
      });
    // FIXME:  Xóa khúc này
  }

  handleChange = e => {
    this.setState({ quantity: e.target.value });
  };

  // --- Thêm sản phẩm vào giỏ hàng --- //
  handleAddItemToCart = e => {
    e.preventDefault();
    console.log(this.state.quantity);
    // ACTION thêm sản phẩm
    this.props.dispatch({
      type: "ADD_ITEM",
      item: this.state.product,
      quantity: this.state.quantity
    });

    // --- Sweet alert --- //
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 1500
    });

    Toast.fire({
      type: "success",
      title: "Đã thêm vào giỏ hàng"
    });
  };

  render() {
    console.log(this.state.product);
    return (
      <div>
        {!_.isEmpty(this.state.product) && (
          <Container>
            <Row>
              <Col md={8}>
                <img
                  className="product-image"
                  src={this.state.product.productImage}
                  alt="product_img"
                />
              </Col>

              <Col md={4}>
                <div className="product-info-container">
                  <h1>{this.state.product.name}</h1>
                  <h3>Giá: {this.formatNumber(this.state.product.price)} VND</h3>
                  <hr />
                  <h4>Thông tin sản phẩm:</h4>
                  <ul>
                    <li>Hãng Đồng Hồ: {this.state.product.brand.name}</li>
                    <li>Phân khúc: {this.state.product.category.name}</li>
                    <li>Mô tả: {this.state.product.description}</li>
                  </ul>
                  <hr></hr>
                  <h4></h4>
                  <div>
                    <Form onSubmit={this.handleAddItemToCart}>
                      <Form.Group>
                        <div className="row product-info-container-quantity">
                          <Col>
                            <Form.Label column>Số lượng </Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              name="quantity"
                              type="number"
                              defaultValue="1"
                              value={this.state.value}
                              onChange={this.handleChange}
                            />
                          </Col>
                        </div>
                      </Form.Group>

                      <Button variant="secondary" type="submit">
                        Thêm vào giỏ hàng
                      </Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  null
)(ProductDetail);
