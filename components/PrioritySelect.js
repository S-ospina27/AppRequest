import { useState } from "react";
import { Text } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'

const PrioritySelect = ({setValue}) => {
  const [priority,setPriority]=useState([
    {key:"1",value:"Novedad"},
    {key:"2",value:"Nuevo"},
  ]);
  return (
   
        <SelectList
        data={priority}
        setSelected={ (val)=>{setValue(val)}}
        label={"Tipo"}
        save="value"
         />

  );
};

export default PrioritySelect;
