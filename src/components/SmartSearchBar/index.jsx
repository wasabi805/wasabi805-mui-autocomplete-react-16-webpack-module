import React from "react";
import CounterComponent from "../Counter";
import { OPD_SearchBar } from "./styled";
import { TextField , OutlinedInput, InputAdornment, IconButton} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

export const SmartSearchBar = () => {
  /*IMPORTANT run this everytime you add a new dep to not see the error : npm add -D @storybook/react-vite@latest  */

  /* https://stackoverflow.com/a/66813924/7857134 | resolves candidate.toLowerCase is not a function. (In 'candidate.toLowerCase()', 'candidate.toLowerCase' is undefined) Material UI Error */
  /* input adoremnets : https://mui.com/material-ui/react-autocomplete/ */

  /**input adoremnets : stackoverflowdotcom/questions/63528616/how-to-have-two-input-adornments-in-material-ui-next-to-each-other-in-a-text-fie*/
  /* last stable version of Muiv4 : https://github.com/mui/material-ui/releases/tag/v4.11.3 */
  const options = [{label : 'one', id: 1}, {label : 'two', id:2}, {label : 'three', id: 3}]

  return (
    <div>
      <Autocomplete
         options={options}
         getOptionLabel={(option) => option.label.toString()}
        //  renderInput={(params) =>  <TextField {...params}   />}
         renderInput={params => {
          return (
            <TextField
              {...params}
              variant="standard"
              label="What are you looking for?"
              placeholder="Favorites"
              fullWidth
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      {/* <SearchIcon /> */}
                      mag
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                ),

                endAdornment: (
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <small style={{display: 'block'}}>Popular Search Terms</small>
                    <div>
                      <button onClick={()=>alert('see Action list')}>Action</button>
                      <button onClick={()=>alert('see Comedy list')}>Comedy</button>
                      <button onClick={()=>alert('see Adventure List')}>Adventure</button>
                      <button onClick={()=>alert('see Clear Search')}>X</button>
                    </div>
                  </div>
                )
              }}
            />
          );
        }}
         />       
      <CounterComponent />
    </div>
  );
};

 
