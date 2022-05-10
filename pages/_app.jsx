import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const Globalstyle = createGlobalStyle `
* {
  padding: 0;
  margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.black};
    backgroound-color: ${props => props.theme.background}
  }

  a {
    color: ${props => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
    transition: 0.5s;
  }

  a:hover {
    color: ${props => props.theme.primaryHover};
  }
`

function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App