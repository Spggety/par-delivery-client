import './search.css'
import '../../../icons/style.css'
import Select from "react-select";
import { useState } from 'react';



function SearchTable() {
  const options = [
    { value: "voskr", label: "Ашкудишка" },
    { value: "atrium", label: "Какаято хуйня" },
    { value: "timme", label: "Уголь дл жепы" },
  ];

  const [selectedOption, setSelectedOption] = useState("Выбранный элемент");

  const getValue = () => {
    return selectedOption
      ? options.find((o) => o.value === selectedOption)
      : "";
  };
  return (
    <div className = 'search'>
      
      <i className='ic_Search'></i>
      <Select
      // menuIsOpen={true}
      placeholder='Поиск'
      classNamePrefix="search"
      defaultValue={getValue}
      // onChange={setSelectedOption}
      options={options}
      
      
      />
      <i className='ic_Filter'></i>
    </div>
  );
}
export default SearchTable;