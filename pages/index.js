import React from 'react';

import BaseLayout from '../components/BaseLayout.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

class Index extends React.Component {

  constructor() {
    super();

    this.state = {
      activeScreen: 0
    }

    this.roles = ['Developer', 'Designer', 'Project Leader', 'Course Creator', 'Tech Lover'];

    this.screens = 2;
    this.currentScreen = 0;
  }

  componentDidMount() {
    this.animatePage();
  }

  animatePage() {
    const self = this;

    setInterval(() => {
      if (self.currentScreen === self.screens) self.currentScreen = 0;

      self.setState({activeScreen: self.currentScreen})
      self.currentScreen++;
    }, 20000);
  }

  render() {
    const { activeScreen } = this.state;

    return (
      <BaseLayout headerType={'landing'} className={`cover cover-${activeScreen}`}>
      <div>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background.png" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <div className="hero-section">
                    <div className={`flipper ${activeScreen === 0 ? 'isActive' : ''}`}>
                      <div className="front">
                        <div className="hero-section-content">
                          <h2> BEST DEVELOPER ON THE MARKET </h2>
                          <div className="hero-section-content-intro">
                            Have a look at events organised by, or for creatives of all branches
                          </div>
                        </div>
                        <img className="image" src="/static/images/section-2.png"/>
                        <div className="shadow-custom shadow-custom-2">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>

                      <div className="back">
                        <div className="hero-section-content">
                          <h2> BEST DEVELOPER MA V PICI </h2>
                          <div className="hero-section-content-intro">
                            Have a look at events organised by, or for creatives of all branches
                          </div>
                        </div>
                        <img className="image" src="/static/images/section-1.png"/>
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-md-6 hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the Luxembourgish Platform for Creatives from all Branches.
                    Get informed, collaborate, meet and discover our best developers in the World!
                    <TypistLoop interval={500}>
                      {this.roles.map(role =>
                        <Typist key={role} startDelay={200}><span className="self-typed">{role}.</span>
                          <Typist.Backspace count={role.length + 1} delay={1000} />
                        </Typist>
                      )}
                    </TypistLoop>
                  </h1>
                </div>
                <div className="hero-welcome-bio">
                  <h1>
                    Let's take a look on my work.
                    <div className="social-icons">
                      <i class="fab fa-facebook-square"></i>
                      <i class="fab fa-linkedin-in"></i>
                      <i class="fab fa-google-plus-g"></i>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
    )
  }

}

export default Index




// import React from 'react';

// import Layout from '../components/BaseLayout.js'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// import Typing from 'react-typing-animation';

// class Index extends React.Component {

//   constructor() {
//   super();

//   this.state = {
//     typerIndex: 0
//    }

//     this.roles = ['Developer', 'Designer', 'Project Leader', 'Course Creator', 'Tech Lover'];
//     this.playNext = this.playNext.bind(this);
//   }
//  componentDidMount() {
//     this._isMounted = true
//   }

//   componentWillUnmount() {
//     this._isMounted = false
//     if (this.timer) {
//       clearTimeout(this.timer)
//     }
//   }

//   onTypingDone() {
//     this.timer = setTimeout(this.playNext, 1000)
//   }

//   playNext() {
//     const { typerIndex } = this.state

//     this.setState({
//       typerIndex: (typerIndex + 1) % this.roles.length
//     });
//   }

//   renderInLoop() {
//     const {typerIndex } = this.state;

//     return this.roles.map((role, index) =>{
//       if (index === typerIndex) {
//         return (
//             <Typing key={index} onFinishedTyping={() => {this.onTypingDone()}} cursorClassName="typed-cursor">
//               <span className="self-typed">{role}.</span>
//               <Typing.Backspace cursorClassName="typed-cursor"  speed={80} count={20} delay={1000} />
//             </Typing>
//         )
//       }
//     });
//   }

// render() {
//   return this.renderInLoop();
// }
// }

// export default Index;




