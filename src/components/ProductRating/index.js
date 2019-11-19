import React from 'react';
import './productRating.scss';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
class ProductRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 1,
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
    const rating = {
      score: this.state.score,
      content: this.state.content,
      product: this.props.product._id,
      user: this.props.user._id
    };
    console.log(rating);
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
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control as="textarea" rows="3" name='content'
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

        <Row>
          <Col>
            <hr />
            <h4 align='left'>Những bài đánh giá</h4>
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