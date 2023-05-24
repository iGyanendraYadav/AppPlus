import Explore from '../components/Explore'
import Header from '../components/Header'
import LastOne from '../components/LastOne'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Header/>
  <Explore/>
  <Component {...pageProps} />
  <LastOne/>
  </> 
}

export default MyApp
