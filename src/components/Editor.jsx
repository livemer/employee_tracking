import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CookieIcon from '@mui/icons-material/Cookie';
import Divider from '@mui/material/Divider';

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
      <ul className="flex flex-col gap-6">
        <li className="flex justify-between items-center px-6">
          <p className="text-xl font-medium">Mike</p>
          <div className="flex gap-40 items-center">
            <p className="text-xl">1000$</p>
            <div className="flex gap-4">
              <IconButton aria-label="delete" size="small">
                <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="medium" sx={{color:"red"}} />
              </IconButton>
            </div>
          </div>
        </li>
        <Divider color="black" />
        <li className="flex justify-between items-center px-6">
          <p className="text-xl font-medium">Jack</p>
          <div className="flex gap-40 items-center">
            <p className="text-xl">1200$</p>
            <div className="flex gap-4">
              <IconButton aria-label="delete" size="small">
                <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="medium" sx={{color:"red"}} />
              </IconButton>
            </div>
          </div>
        </li>
        <Divider color="black" />
        <li className="flex justify-between items-center px-6">
          <p className="text-xl font-medium">John</p>
          <div className="flex gap-40 items-center">
            <p className="text-xl">800$</p>
            <div className="flex gap-4">
              <IconButton aria-label="delete" size="small">
                <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="medium" sx={{color:"red"}} />
              </IconButton>
            </div>
          </div>
        </li>
        <Divider color="black" />
        <li className="flex justify-between items-center px-6">
          <p className="text-xl font-medium">Antony</p>
          <div className="flex gap-40 items-center">
            <p className="text-xl">2000$</p>
            <div className="flex gap-4">
              <IconButton aria-label="delete" size="small">
                <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="medium" sx={{color:"red"}} />
              </IconButton>
            </div>
          </div>
        </li>
        <Divider color="black" />
        <li className="flex justify-between items-center px-6">
          <p className="text-xl font-medium">Marina</p>
          <div className="flex gap-40 items-center">
            <p className="text-xl">3000$</p>
            <div className="flex gap-4">
              <IconButton aria-label="delete" size="small">
                <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="medium" sx={{color:"red"}} />
              </IconButton>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
};