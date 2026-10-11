import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FilterPanel = () => {
  return <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
        <TextField id="filled-basic" label="Найти сотрудника" variant="filled"  color="secondary"/>
        <div className="flex gap-2">
          <Button variant="contained">Все сотрудники</Button>
          <Button variant="outlined" color="secondary">На повышение</Button>
          <Button variant="outlined" color="secondary">З/П больше 1000$</Button>
        </div>
    </div>
}