import React from 'react'
import { Input } from 'antd'
import {ReactComponent as NoResultsImg} from './../../../img/crying.svg';
import classes from './Search.module.css'

export const SearchInput = (props) => {

  const { Search } = Input;

  return (
    <>
      <Search 
        style={{width:'40%', margin: '15px 0px 15px 0px'}} 
        placeholder={props.placeholder}
        onChange={props.onChange} 
        enterButton
      />
    </>
  )
}



export const NoSearchResults = (props) => {

  return (
    <div className={classes.noResultsWrapper}>
      <NoResultsImg/>
      <div className={classes.sorryMessage}>Прости, я ничего не нашел :(</div>
    </div>
  )
}




