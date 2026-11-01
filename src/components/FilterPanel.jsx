import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export const FilterPanel = ({ setNameFilter, setPayFilter, setUpFilter }) => {
  const [selectedElem, setSelected] = useState(1);

  function getProps(i) {
    return selectedElem === i
      ? { variant: "contained", color: "primary" }
      : { variant: "outlined", color: "secondary" }
  }

  switch (selectedElem) {
    case 1:
      setPayFilter(false)
      setUpFilter(false)
      break;
    case 2:
      setPayFilter(false)
      setUpFilter(true)
      break;
    case 3:
      setPayFilter(true)
      setUpFilter(false)
      break;
  }

  return (
    <div className="bg-green-900 p-8 flex flex-col gap-3 rounded-lg">
      <TextField onChange={(e) => setNameFilter(e.target.value)} id="filled-basic" label="Найти сотрудника" variant="filled" color="secondary" />
      <div className="flex gap-2">
        <Button onClick={() => setSelected(1)} {...getProps(1)}>Все сотрудники</Button>
        <Button onClick={() => setSelected(2)} {...getProps(2)}>На повышение</Button>
        <Button onClick={() => setSelected(3)} {...getProps(3)}>З/П больше 1000$</Button>
      </div>
    </div>
  );
};