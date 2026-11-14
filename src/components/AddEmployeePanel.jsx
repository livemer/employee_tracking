import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required('Введите имя сотрудника'),
  pay: yup
    .number()
    .typeError('Введите корректное число')
    .required('Введите зарплату')
    .min(0, 'Зарплата не может быть меньше нуля'),
});

export const AddEmployeePanel = ({ addEmployee }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, pay }) => {
    addEmployee(name, pay);
    reset()
  };

  return (
    <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
      <h2 className="text-2xl">Добавьте нового сотрудника</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 relative">
        {(errors.name || errors.pay) && (
          <span className="absolute text-right bottom-18 w-full text-red-300">
            {errors.name?.message || errors.pay?.message}
          </span>
        )}

        <TextField
          sx={{ width: '50%' }}
          id="employee-name"
          label="Как его зовут?"
          variant="outlined"
          color="secondary"
          error={Boolean(errors.name)}
          {...register('name')}
        />

        <TextField
          sx={{ width: '30%' }}
          id="employee-pay"
          label="Зарплата"
          variant="outlined"
          color="secondary"
          error={Boolean(errors.pay)}
          {...register('pay')}
        />

        <Button type="submit" sx={{ width: '20%' }} variant="contained">
          Добавить
        </Button>
      </form>
    </div>
  );
};
