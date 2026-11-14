import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CookieIcon from '@mui/icons-material/Cookie';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PaidIcon from '@mui/icons-material/Paid';
import Divider from '@mui/material/Divider';

export const EmployeeList = ({ employee, removeEmployee, setUp, setBonus }) => {

  return (
    <div className="py-6 flex flex-col gap-3 rounded-lg">
      <ul className="flex flex-col gap-4 lg:gap-6">
        {employee.map(({ id, name, pay, up, bonus }, index) => {
          return <>
            {index != 0 && <Divider color="black" />}
            <li className="flex justify-between items-center px-6">
              <p className="text-lg lg:text-xl font-medium" onClick={() => setBonus(id)}>
                {name}
                {up && <ArrowUpwardIcon sx={{ color: '#2e7d32', fontSize: {xs: "20px", lg:"24px"}, ml: 0.5 }} />}
                {bonus && <PaidIcon sx={{ color: '#e7c143', fontSize: {xs: "20px", lg:"24px"}, ml: 0.5 }} />}
              </p>
              <div className="flex gap-2 lg:gap-40 items-center">
                <p className="text-lg lg:text-xl">{pay}$</p>
                <div className="flex gap-2 lg:gap-4">
                  <IconButton onClick={() => setUp(id)} aria-label="up" size="small">
                    <CookieIcon sx={{color:"#b1a127", fontSize: {xs: "20px", lg:"24px"}}} />
                  </IconButton>
                  <IconButton onClick={() => removeEmployee(id)} aria-label="delete" size="small">
                    <DeleteIcon sx={{color:"red", fontSize: {xs: "20px", lg:"24px"}}} />
                  </IconButton>
                </div>
              </div>
            </li>
          </>
        }) }
        {employee.length === 0 && <span className="text-black text-center">По такому запросу сотрудников не найдено</span>}
      </ul>
    </div>
  )
};