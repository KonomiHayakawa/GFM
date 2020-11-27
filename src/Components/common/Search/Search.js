import React from 'react'
import { Input } from 'antd'
import {SearchOutlined} from '@ant-design/icons'
import './../../../App.css'
import classes from './Search.module.css'
import {ReactComponent as NoResultsImg} from './../../../img/common/NoSearchResultsImg.svg'

export const SearchInput = (props) => {

  return (
    <>
      <Input
        suffix={
          <SearchOutlined 
            className={classes.searchIcon}
          />
        }
        placeholder={props.placeholder}
        onChange={props.onChange} 
        className={`globalAntStyle ${classes.searchInput}`}
        type='text'
      />
    </>
  )
}

export const NoSearchResults = (props) => {

  return (
    <div className={classes.noResultsWrapper}>
      <div className={classes.noResultsImg}>
        <NoResultsImg/>
      </div>
      <div className={classes.sorryMessage}>
        Прости, я ничего не нашел :(
      </div>
    </div>
  )
}




