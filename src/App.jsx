import '../src/Themes/globalStyle.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

    </ThemeProvider>
  )
}

export default App
