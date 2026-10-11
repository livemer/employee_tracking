import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const AddEmployeePanel = () => {
  return <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
        <h2 className="text-2xl">Добавьте нового сотрудника</h2>
        <div className="flex gap-2">
          <TextField sx={{width:"50%"}} id="filled-basic" label="Как его зовут?" variant="outlined"  color="secondary"/>
          <TextField sx={{width:"30%"}} id="filled-basic" label="ЗП в $" variant="outlined"  color="secondary"/>
          <Button sx={{width:"20%"}} variant="contained">Добавить</Button>
        </div>
    </div>
}