import '../styles/globals.css'
import {ThemeContextProvider} from "../components/themer";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
  )
}

export default MyApp
