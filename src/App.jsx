import '../src/Themes/globalStyle.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Themes/default'
import { CornerPage } from './Components/CornerPage'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CornerPage />
    </ThemeProvider>
  )
}

export default App
