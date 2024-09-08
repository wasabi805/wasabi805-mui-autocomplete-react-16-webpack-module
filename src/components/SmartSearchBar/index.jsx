import React from "react";
import CounterComponent from "../Counter";
import { OPD_SearchBar } from "./styled";
import { TextField } from "@material-ui/core";

export const SmartSearchBar = () => {
  /*IMPORTANT run this everytime you add a new dep to not see the error : npm add -D @storybook/react-vite@latest  */

  /* https://stackoverflow.com/a/66813924/7857134 | resolves candidate.toLowerCase is not a function. (In 'candidate.toLowerCase()', 'candidate.toLowerCase' is undefined) Material UI Error */
  

  /* last stable version of Muiv4 : https://github.com/mui/material-ui/releases/tag/v4.11.3 */
  const options = [{label : 'test', id: 1}]

  return (
    <div>
      <OPD_SearchBar
         options={options}
         getOptionLabel={(option) => option.label.toString()}
         renderInput={(params) => <TextField {...params} />}
         />
      <CounterComponent />
    </div>
  );
};

 
