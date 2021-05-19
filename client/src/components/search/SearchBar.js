import React, { useState } from 'react'
import SearchField from './SearchField'
import { Card } from 'antd';
import useStyles from './styles'; 
import { SearchOutlined } from '@ant-design/icons';
import { Button } from '@material-ui/core';

const SearchBar = () => {
    const [value,setValue] = useState({});
    const classes = useStyles();
    
    //onChange function for whenever the user is typing needs to pass state down to search field



    return (
        <>
        <Card title = 'Search' className = {classes.form}>
        <input 
            type = 'text'
            className = {classes.input}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <Button variant="outlined" color="primary" href="#outlined-buttons" className= {classes.buttonSubmit} ><SearchOutlined />
        </Button>
        <SearchField value = {value} setValue = {setValue} />
        </Card>
        </>
    )
}

export default SearchBar
