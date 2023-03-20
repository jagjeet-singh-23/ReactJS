import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/all.js'
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    }

    return (
        <Wrapper>
            {
                data.map((user, id) => {
                    return (
                        <ListItem key={id}>
                            <User>{user}</User>
                            <button className='delete-btn' onClick={() => deleteUser(id)}>
                                <MdDeleteForever className="delete-icon" />
                            </button>
                        </ListItem>
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const User = styled.span`
  flex-grow: 1;
  text-align: left;
`;


const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;

const DeleteIcon = styled(MdDeleteForever)`
  font-size: 2.6rem;
  color: #f12711;
  filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
  cursor: pointer;
`;

export default DisplayUsers
