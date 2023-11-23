import React, {ReactNode} from 'react'
import {cva, VariantProps} from "class-variance-authority";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@material-ui/icons/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {Button} from "@material-ui/core";

const searchVariant = cva([],{
    variants:{
        variant:{
            standard:[
                'bg-white-300 rounded-full w-full border-none',
            ]
        }
    },
    defaultVariants:{
        variant:'standard'
    }
})

export interface SearchProps extends VariantProps<typeof searchVariant>{
    children?: ReactNode;
    showFilter?: boolean;
}

const Search = ({ variant, showFilter = false, ...rest }: SearchProps) => {
    return <TextField
        className={searchVariant({variant})} {...rest}
        style={{border: 'none'}}
        placeholder="Search..."
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
            endAdornment: showFilter ? (
                <InputAdornment position="end">
                    <Button variant="outlined" className="border-4 border-primary-900">
                        <FilterAltOutlinedIcon />
                    </Button>
                </InputAdornment>
            ) : null,
        }}
    />
}

export default Search