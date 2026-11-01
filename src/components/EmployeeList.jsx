import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CookieIcon from '@mui/icons-material/Cookie';
import Divider from '@mui/material/Divider';

export const EmployeeList = ({ employee, removeEmployee, setUp, setBonus }) => {

  return (
    <div className="py-6 flex flex-col gap-3 rounded-lg">
      <ul className="flex flex-col gap-6">
        {employee.map(({ id, name, pay, up, bonus }, index) => {
          return <>
            {index != 0 && <Divider color="black" />}
            <li className="flex justify-between items-center px-6" style={{ color: bonus ? '#bda915' : 'black' }}>
              <p className="text-xl font-medium" onClick={() => setBonus(id)}>{name}</p>
              <div className="flex gap-40 items-center">
                <p className="text-xl">{pay}$</p>
                <div className="flex gap-4">
                  <IconButton onClick={() => setUp(id)} aria-label="up" size="small">
                    <CookieIcon fontSize="medium" sx={{color:"#b1a127"}} />
                  </IconButton>
                  <IconButton onClick={() => removeEmployee(id)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="medium" sx={{color:"red"}} />
                  </IconButton>
                </div>
              </div>
            </li>
          </>
        }) }
      </ul>
    </div>
  )
};