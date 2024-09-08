import React from "react";
import CounterComponent from "../Counter";
import { OPD_SearchBar } from "./styled";
import { TextField , OutlinedInput, InputAdornment, Chip} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';


export const SmartSearchBar = () => {
  /*IMPORTANT run this everytime you add a new dep to not see the error : npm add -D @storybook/react-vite@latest  */

  /* https://stackoverflow.com/a/66813924/7857134 | resolves candidate.toLowerCase is not a function. (In 'candidate.toLowerCase()', 'candidate.toLowerCase' is undefined) Material UI Error */
  /* input adoremnets : https://mui.com/material-ui/react-autocomplete/ */

  /**input adoremnets : stackoverflowdotcom/questions/63528616/how-to-have-two-input-adornments-in-material-ui-next-to-each-other-in-a-text-fie*/
  /* last stable version of Muiv4 : https://github.com/mui/material-ui/releases/tag/v4.11.3 */
  const options = [{label : 'one', id: 1}, {label : 'two', id:2}, {label : 'three', id: 3}]

  const smallStyle = {
    display: 'block',
    padding: '0',
    fontSize: '0.7rem',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: '400',
    lineHeight: '1',
    letterSpacing: '0.00938em',
  }

  return (
    <div style={{maxWidth : '36rem'}}>
      <OPD_SearchBar
         options={options}
         getOptionLabel={(option) => option.label.toString()}
        //  renderInput={(params) =>  <TextField {...params}   />}
         renderInput={params => {
          return (
            <TextField
              {...params}
              variant="standard"
              label="What are you looking for?"
              placeholder="find a movie"
              fullWidth
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                  </>
                ),

                endAdornment: (
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    <small style={smallStyle}>Popular Search Terms</small>
                    <div style={{margin: '0.5rem 0'}}>
                      <Chip label={'Action'} onClick={()=>alert('see Action list')} size={'small'}/>
                      <Chip label={'Comedy'} onClick={()=>alert('see Comedy list')} size={'small'}/>
                      <Chip label={'Adventure'} onClick={()=>alert('see Adventure List')} size={'small'}/>
                      <Chip label={'X'} onClick={()=>alert('see Clear Search')} size={'small'}/>
                    </div>
                  </div>
                )
              }}
            />
          );
        }}
         />       
      {/* <CounterComponent /> */}
    </div>
  );
};

 
