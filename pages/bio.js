import BaseLayout from '../components/BaseLayout.js';
import { withRouter } from 'next/router';
import withAuth from '../components/hoc/withAuth';

const Bio = (props) => (
  <BaseLayout>
    <section className="bio-page">
      <div className="container">
        <div className="left-side">

          <div className="brand">
            <h1 className="title fadein">Hello, how are you?</h1>
            <h4 className="subTitle fadein">Let's get know better</h4>
            <p className="subsubTitle fadein">If you have a minute or two get know me better</p>
          </div>
        </div>

        <div className="right-side fadein">
          <div className="wall" data-simplebar>

            <div className="section intro" id="intro">
              <h2>My Story</h2>
              <p>My name is Filip Jerga and I am an experienced software engineer and freelance developer. I have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular.

      Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience. I invite you to take my course, where I have put a lot of effort to explain web and software engineering concepts in a detailed, hands-on and understandable way.</p>
              <p>recommendation: tell user that this part is scrollable</p>
              <i className="fa fa-angle-double-down"></i>
            </div>

            <div className="section" id="#">
              <h2>More Information</h2>
              <p>Scroll down</p>
              <p>you may use different bg-color or <a href="https://tympanus.net/codrops/2013/10/03/a-collection-of-separator-styles/">Separators</a> to divide sections</p>
            </div>


            <div className="section" id="#">
              <h2>Last Section</h2>
              <p>no more scrolling.</p>
              <a href="#">
                <p>Demo(working on one!)</p>
              </a>
              <a href="https://github.com/alphadsy/alpha-ui">
                <p>Report Issue & Join Us on Github.</p>
              </a>
              <a href="https://github.com/alphadsy">
                <p>More Free Layouts & UI.</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </BaseLayout>
)

// export default Bio;
export default withRouter(Bio);
