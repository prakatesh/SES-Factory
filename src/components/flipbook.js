import React from 'react'
import {Row,Col} from 'react-bootstrap'
export default function Flipbook() {
  return (
    <Row>

    <Col md={2}>
    </Col>

    <Col md={8}>
    <iframe width='100%' style={{marginTop:"30px"}} height='750vh' src="https://online.fliphtml5.com/rxird/eysj/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
  </Col>
  

    <Col md={2}>
    </Col>

    </Row>
  )
}