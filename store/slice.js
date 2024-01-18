import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const registerSlice = createSlice({
  name: 'addUserSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
  },
})

export const { addUser } = registerSlice.actions

export default registerSlice.reducer
