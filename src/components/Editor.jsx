import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { EmployeeList } from './EmployeeList.jsx';

export const Editor = () => {
  return <div className="bg-white mt-10 flex flex-col gap-6">
    <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
        <TextField id="filled-basic" label="Найти сотрудника" variant="filled"  color="secondary"/>
        <div className="flex gap-2">
          <Button variant="contained">Все сотрудники</Button>
          <Button variant="outlined" color="secondary">На повышение</Button>
          <Button variant="outlined" color="secondary">З/П больше 1000$</Button>
        </div>
    </div>
    <div className="py-6 flex flex-col gap-3 rounded-lg">
      <EmployeeList />
    </div>
    <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
        <h2 className="text-2xl">Добавьте нового сотрудника</h2>
        <div className="flex gap-2">
          <TextField sx={{width:"40%"}} id="filled-basic" label="Как его зовут?" variant="outlined"  color="secondary"/>
          <TextField sx={{width:"40%"}} id="filled-basic" label="ЗП в $" variant="outlined"  color="secondary"/>
          <Button sx={{width:"20%"}} variant="contained">Добавить</Button>
        </div>
    </div>
  </div>
};