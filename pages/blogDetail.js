import React from 'react';
import BaseLayout from '../components/BaseLayout.js';

import { connect } from 'react-redux';

import * as actions from '../actions';

class BlogDetail extends React.Component {

  // static async getInitialProps() {

  //   try {
  //     const data = await actions.getBlogByIdServer();

  //     return { blog: data };
  //   } catch(err) {

  //     return { err }
  //   }
  // }

  constructor(props) {
    super(props);

    this.state = {
      content: []
    }
  }

  static async getInitialProps({reduxStore, query, req}) {


    try {
      const blog = await actions.getBlogBySlug(req, query.slug);

      return { blog };
    } catch(err) {

      return { err }
    }
  }

  // componentDidMount() {
  //   const { slug } = this.props;

  //   actions.getBlogBySlug(slug).then(
  //     (blog) => {
  //       this.setState({content: blog.story});
  //     })
  //   .catch(err => console.error(err));
  // }

  render() {
    const { blog } = this.props;

    return (
      <BaseLayout>
        <section className='blogDetail-page'>
          <div className="container">

            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div dangerouslySetInnerHTML={{ __html: blog.story }}>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BaseLayout>
    )
  }
}

export default BlogDetail;
