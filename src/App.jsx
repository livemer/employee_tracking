import './index.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Header} from './components/Header.jsx'
import { EmployeeList } from './components/EmployeeList.jsx';
import { FilterPanel } from './components/FilterPanel.jsx';
import { AddEmployeePanel } from './components/AddEmployeePanel.jsx';
import { Main } from './components/Main.jsx';
import { employee } from './mock.js'

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
  const bonusEmployee = employee.filter((item) => item.bonus)
  return (
    <ThemeProvider theme={darkTheme}>
      <Container fixed sx={{mt: "40px"}}>
        <Header employee={employee.length} bonus={bonusEmployee.length} />
        <Main>
          <FilterPanel/>
          <EmployeeList/>
          <AddEmployeePanel/>
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App
