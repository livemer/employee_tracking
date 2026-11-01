import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormStatus } from "react-dom"
import { useState } from "react";

function SubmitBtn(){
    const { pending } = useFormStatus()
    return (
      <Button type="submit" disabled={ pending } sx={{width:"20%"}} variant="contained">{pending ? "Добавление..." : "Добавить"}</Button>
    )
  }

export const AddEmployeePanel = ( {setName, setPay, addEmployee} ) => {
  const [error, setError] = useState('');

  function add(formData){
    let pay = formData.get("pay")
    const name = formData.get("name")
    
    if (!pay || !name) {
      setError('Заполните все поля.');
      return;
    }
    
    if(name.length < 1){
      setError("Введите имя.")
      return
    }
    
    if(isNaN(pay)){
      setError("Зарплата должна быть числом.")
      return
    }

    if(pay < 0){
      setError("Зарплата не может быть ниже нуля.")
      return
    }

    addEmployee()
    setError("")
  }

  return <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
        <h2 className="text-2xl">Добавьте нового сотрудника</h2>
        <form className="flex gap-2 relative" action={add}>
          { error && <p className="absolute text-center bottom-18 w-full text-red-300">{error}</p>}
          <TextField name="name" onChange={(e) => {setName(e.target.value); setError("")}} sx={{width:"50%"}} id="filled-basic" label="Как его зовут?" variant="outlined"  color="secondary"/>
          <TextField name="pay" onChange={(e) => {setPay(e.target.value); setError("")}} sx={{width:"30%"}} id="filled-basic" label="Зарплата" variant="outlined"  color="secondary"/>
          <SubmitBtn/>
        </form>
    </div>
}