import '../src/Themes/globalStyle.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Themes/default'

import { RouteApp } from './Routes'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <RouteApp />
    </ThemeProvider>
  )
}

export default App
