import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ThemeContext } from "../../contexts/themeContext.tsx";
interface SearchProps {
    search: string;
    setSearch: (search: string) => void;
    }

const Search: React.FC<SearchProps> = ({search, setSearch}) => {
  const { isDark } = React.useContext(ThemeContext);
    return <TextField
    variant="outlined"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{

      borderRadius: 27.5,
      backgroundColor: isDark?"rgba(255, 255, 255, 0.1)": 'rgba(52, 52, 52, 0.1)',
      width: '300px',
      height: '45px',
      padding: '0',
      alignContent: 'center',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiOutlinedInput-input':{
        padding: '11px 20px',
        color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)",
        "&::placeholder": {
            color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)", 
          },
      }
    }}  
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          {search ? (
            <IconButton
              onClick={() => setSearch('')}
              sx={{
                color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)",
                "&:hover": {
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(52, 52, 52, 0.1)",
                },
              }}
            >
              <ClearIcon/>
            </IconButton>
          ) : (
            <SearchIcon  sx={{ color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)",
              "&:hover": {
                cursor: "pointer"
              },
            }}
            />
          )}
        </InputAdornment>
      ),
    }}
  />
}
export default Search;