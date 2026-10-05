import './index.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Header} from './components/Header.jsx'
import {Editor} from './components/Editor.jsx'

const darkTheme = createTheme({
  palette: {
    mode: 'dark', //это чтоб все из material ui не сливалось с фоном
    primary: {
      main: '#39803b',
    },
    secondary: {
      main: '#63db67',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container fixed sx={{mt: "40px"}}>
        <Header employee="5" bonus="1"/>
        <Editor />
      </Container>
    </ThemeProvider>
  )
}

export default App
