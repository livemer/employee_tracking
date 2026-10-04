import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Editor = () => {
  return <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg mt-10">
      <TextField id="filled-basic" label="Найти сотрудника" variant="filled" />
      <div className="flex gap-2">
        <Button variant="contained">Все сотрудники</Button>
        <Button variant="outlined">На повышение</Button>
        <Button variant="outlined">З/П больше 1000$</Button>
      </div>
  </div>
};