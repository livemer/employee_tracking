import './index.css'
import Container from '@mui/material/Container';
import {Header} from './components/Header.jsx'

function App() {

  return (
      <Container fixed sx={{mt: "40px"}}>
        <Header employee="5" bonus="1"/>
      </Container>
  )
}

export default App
