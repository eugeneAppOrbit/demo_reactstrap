/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import {
  Container, Row, Col,
  Card, CardTitle, CardSubtitle, CardBody, CardText, CardImg,
  Button
} from 'reactstrap';
import ModalExample from './ModalExample.jsx';
import CollapseExample from './CollapseExample.jsx';
import PopExample from './PopExample.jsx';
import CarExample from './CarExample.jsx';

export default class Cards extends React.Component {
  renderCard () {
    return (
      <Col>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }

  render() {
    return (
      <Container>
        <Row>
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
        </Row>
        <Row>
          <Col>
            <PopExample />
          </Col>
          <Col>
            <ModalExample buttonLabel="Try Modal" />
          </Col>
          <Col>
            <CollapseExample />
          </Col>
        </Row>
        <Row>
          {this.renderCard()}
          <Col>
            <CarExample />
          </Col>
          {this.renderCard()}
        </Row>
      </Container>
    );
  }
}
