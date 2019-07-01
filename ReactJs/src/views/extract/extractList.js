import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card, CardBody, CardHeader, Col, Row, Table,
} from 'reactstrap';
import { getDataExtract } from '../../actions/extract';
import ExtractListRows from './extractListRows';
import Loading from '../utils/loading';

class ExtractList extends Component {
  componentDidMount() {
    this.props.getDataExtract();
  }

  render() {
    if (this.props.listExtract.state) {
      return <Loading msg="Carregando extrato..." />;
    }

    const model = this.props.listExtract.data;
    console.log(model);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                Extrato simplificado
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Data do lançamento</th>
                      <th>Descrição</th>
                      <th>Número</th>
                      <th>Situação</th>
                      <th>Data de confirmação</th>
                      <th>Dados bancários</th>
                      <th>Valor final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ExtractListRows rows={model} />
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getDataExtract,
  },
  dispatch,
);

const mapStateToProps = state => ({
  listExtract: state.extractState.listExtract,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExtractList);
