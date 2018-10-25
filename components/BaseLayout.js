import Head from 'next/head'
import Header from './common/Header';
import MyApp from '../pages/_app';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss'


const BaseLayout = (props) => {

  const { className, children } = props;
  const headerType = props.headerType || 'normal';

  return (
    <div>
      <Head>
        <title>Jerga Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/>
      </Head>

        <div className="layout-container" >
          {headerType === 'normal' && <Header className="navbar mainNav navbar-expand-lg bg-secondary fixed-top text-uppercase"/>}
          {headerType === 'landing' && <Header className="port-navbar absolute" color="transparent"/>}
          {headerType === 'none' &&  null}
          <main className={`cover ${className}`}>
            <div className="wrapper">
              {children}
            </div>
          </main>
        </div>

    </div>
  )
}

export default BaseLayout
