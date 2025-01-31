import React, { useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { ThemeContext } from "../../contexts/themeContext.tsx";
import { ReactElement, SVGProps, JSXElementConstructor, ReactNode } from "react";
interface SearchProps {
    search:{ name: string; description: string; img: ReactNode; hrStyle: string; }[]
    setSearch: React.Dispatch<React.SetStateAction<{
      name: string;
      description: string;
      img: React.ReactNode;
      hrStyle: string;
  }[]>>
    }

const Search: React.FC<SearchProps> = ({search, setSearch}) => {
  const [valueToSearch, setValueToSearch] = React.useState<string>("");
  const { isDark } = React.useContext(ThemeContext);
  
  useEffect(() => {
    if(valueToSearch===""){
      setSearch(search);
    }

  },[valueToSearch]);
    return <TextField
    variant="outlined"
    placeholder="Search"
    value={valueToSearch}
    onChange={(e) => {
      setValueToSearch(e.target.value);
      setSearch(() => {
        return search.filter((item) => {
          const arrayOfItems = item.name.toLowerCase().split(" ");
          const arrayOfSearch = e.target.value.toLowerCase().split(" ");
          return arrayOfSearch.some((s) => {
            return arrayOfItems.some((i) => {
              console.log("s: " + s, "i: " + i, "result: ", i.includes(s));
              return i.includes(s);
            });
          });
        });
      });
    }}
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
          {valueToSearch ? (
            <IconButton
              onClick={() => {setValueToSearch(""); setSearch(search)}}
              sx={{
                color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)",
                "&:hover": {
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(52, 52, 52, 0.1)",
                },
              }}
            >
              <ClearIcon/>
            </IconButton >
          ) : (
            <SearchIcon onClick={() => setSearch(search)} sx={{ color: isDark ? "rgba(255, 255, 255, 1)" : "rgba(52, 52, 52, 1)",
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