import React from 'react';
import './productRating.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
class ProductRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3,
      conent: ''
    };
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      score: this.state.score,
      content: this.state.content,
      product: this.props.product._id,
      user: this.props.user._id
    };
    axios.post('http://localhost:7777/api/rating/createRating', data)
      .then((result) => {
        console.log(result)
      })
  };

  render() {

    return (
      <React.Fragment>
        <Row>
          <Col>
            <hr />
            <h4 align='left'>Đánh giá của bạn</h4>
            <Form className='rating-form' onSubmit={this.handleSubmit}>
              <Row>
                <Col md={8}>
                  <div>
                    <Form.Group>
                      <Form.Control as="select" name='score'
                        value={this.state.score} onChange={this.handleChange}>
                        <option value={1}>Rất tệ</option>
                        <option value={2}>Tệ</option>
                        <option value={3}>Bình thường</option>
                        <option value={4}>Tốt</option>
                        <option value={5}>Rất tốt</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control as="textarea" rows="3" name='content' placeholder='Hãy chia sẻ suy nghĩa của bạn về sản phẩm ...'
                        value={this.state.content} onChange={this.handleChange} />
                    </Form.Group>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <p>Hãy chia sẻ cảm nhận của bạn</p>
                    <Button type='submit'>Đánh giá của bạn</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </React.Fragment>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(ProductRating);