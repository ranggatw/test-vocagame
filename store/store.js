import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './slice'

export const store = configureStore({
  reducer: { register: registerReducer },
})
