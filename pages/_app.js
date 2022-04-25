// import '../styles/globals.css'
import 'antd/dist/antd.css';
import Navbar from '../components/global_components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    // <Component {}
    <>
      <Navbar />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
