import Explore from '../components/Explore'
import Header from '../components/Header'
import LastOne from '../components/LastOne'
import ScrollToTop from '../components/ScrollToTop'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header/> 
  <Component {...pageProps} />
  <Explore/>
  <ScrollToTop/>
  <LastOne/>
  </> 
}

export default MyApp
