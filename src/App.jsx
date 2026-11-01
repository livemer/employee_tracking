import './index.css'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Header} from './components/Header.jsx'
import { EmployeeList } from './components/EmployeeList.jsx';
import { FilterPanel } from './components/FilterPanel.jsx';
import { AddEmployeePanel } from './components/AddEmployeePanel.jsx';
import { Main } from './components/Main.jsx';
import { employeeList } from './mock.js'
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark', //это чтоб все из material ui не сливалось с фоном
    primary: {main: '#39803b'},
    secondary: {main: '#63db67'},
  },
});

function App() {
  const [employee, setEmployee] = useState(employeeList);
  
  const [nameFilter, setNameFilter] = useState('');
  const [payFilter, setPayFilter] = useState(false);
  const [upFilter, setUpFilter] = useState(false);
  const bonusEmployee = employee.filter((item) => item.bonus)
  
  const [name, setName] = useState("");
  const [pay, setPay] = useState("");

  const addEmployee = () => {
    const newEmployee = {
      id: employee.length,
      name,
      pay,
      up: false,
      bonus: false
    }
    setEmployee([...employee, newEmployee])
  }

  const setUp = (id) => {
    setEmployee(employee.map((item) => item.id === id ? {...item, up: !item.up} : item))
  }

  const setBonus = (id) => {
    setEmployee(employee.map((item) => item.id === id ? {...item, bonus: !item.bonus} : item))
  }

  const removeEmployee = (id) => {
    setEmployee(employee.filter((item) => item.id !== id))
  }

  
  const filtered = employee.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesUp = !upFilter || item.up;
    const matchesFilter = !payFilter || item.pay >= 1000;
    return matchesName && matchesUp && matchesFilter;
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Container fixed sx={{mt: "40px"}}>
        <Header employee={employee.length} bonus={bonusEmployee.length} />
        <Main>
          <FilterPanel
            setFilter={setNameFilter}
            setPayFilter={setPayFilter}
            setUpFilter={setUpFilter}
          />
          <EmployeeList
            employee={filtered}
            nameFilter={nameFilter}
            removeEmployee={removeEmployee}
            setUp={setUp}
            setBonus={setBonus}
          />
          <AddEmployeePanel setName={setName}
            setPay={setPay}
            addEmployee={addEmployee}
          />
        </Main>
      </Container>
    </ThemeProvider>
  )
}

export default App