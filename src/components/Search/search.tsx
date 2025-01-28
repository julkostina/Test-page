import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
interface SearchProps {
    search: string;
    setSearch: (search: string) => void;
    }

const Search: React.FC<SearchProps> = ({search, setSearch}) => {
    return <TextField
    variant="outlined"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{
      borderRadius: 27.5,
      backgroundColor: 'rgba(52, 52, 52, 0.1)',
      width: '300px',
      height: '45px',
      padding: '0',
      alignContent: 'center',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiOutlinedInput-input':{
        padding: '11px 20px',
      }
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          {search ? (
            <IconButton
              onClick={() => setSearch('')}
            >
              <ClearIcon />
            </IconButton>
          ) : (
            <SearchIcon />
          )}
        </InputAdornment>
      ),
    }}
  />
}
export default Search;