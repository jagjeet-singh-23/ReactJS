import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/actions'

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const clearUsers = () => {
    dispatch(deleteUsers());
  }
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={clearUsers}>Clear All Users</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.clear-btn{
  text-transform:capitalize,
  background-color: #db338a;
  margin-top: 2rem;
}`

export default DeleteAllUsers