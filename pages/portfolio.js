import React, {Component} from 'react';
import BaseLayout from '../components/BaseLayout.js';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PortfolioItem from '../components/portfolio/PortfolioItem';
import PortfolioCard from '../components/portfolio/PortfolioCard';

import { Link } from '../routes';

import * as actions from '../actions';

// import fetch from 'isomorphic-unfetch' EXPLAIN

class Portfolio extends Component {

  static async getInitialProps({req}) {

    // const res = await fetch('http://localhost:3000/api/v1/portfolios');
    // const data = await res.json();
    try {
      console.log(req);
      const data = await actions.getPortfoliosServer(req);

      return { portfolios: data.portfolios };
    } catch(err) {

      return { err }
    }
  }

  renderPortfolios() {
    const { portfolios } = this.props;

    if (portfolios && portfolios.length > 0) {
      return portfolios.map((portfolio, index) => (
        <div className="col-md-4">
          <PortfolioCard key={index} portfolio={portfolio} />
        </div>
      ))
    }
  }

  render() {
    return (
      <BaseLayout>
        <section className="portfolio-page">
          <div className="container">
            <div className="page-header">
              <h1 className="portfolio-page-title">PORTFOLIOS</h1>
              <Link route='/portfolio/new'>
                <FontAwesomeIcon className="portfolio-page-plus"  icon="plus-circle" />
              </Link>
            </div>
            <div className="row">
              {this.renderPortfolios()}
            </div>
          </div>
        </section>
      </BaseLayout>
    );
  }
}

export default Portfolio;
