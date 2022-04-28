import {configureStore} from '@reduxjs/toolkit'
//import logger from 'redux-logger'
import { contactApi } from './contactApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterSlice } from "./filterSlice"


 export const store = configureStore({ 
  reducer:{
    [contactApi.reducerPath]:contactApi.reducer,
    filter:filterSlice.reducer,
  },
middleware:getDefaultMiddleware=>[
  ...getDefaultMiddleware(),
  contactApi.middleware,
],

 })

setupListeners(store.dispatch)




