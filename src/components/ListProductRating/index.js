import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './style.scss';

const ListProductRating = (props) => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <hr />
          <h4 align='left'>Những bài đánh giá</h4>
          {props.ratings.length === 0 &&
            <div>
              <p align='center'>Sản phẩm chưa có bình luận đánh giá nào</p>
            </div>
          }

          {/* Danh sách bài đấnh giá */}
          {props.ratings.length !== 0 &&
            <div>
              {
                props.ratings.map((item, index) => {
                  const user = item.user ? item.user.userName : "Ẩn danh"
                  return (
                    <div key={index} className='rating-comment-container'>
                      <div className='user-score-container'>
                        <p className='user-comment'><b>{user}</b></p>
                        <p className='rating-score'>Đánh giá {item.score}/5</p>
                      </div>
                      <p className='comment-content'>{item.content}</p>
                    </div>
                  )
                })
              }
            </div>
          }
        </Col>
      </Row>
    </React.Fragment>
  )
}
export default ListProductRating;
