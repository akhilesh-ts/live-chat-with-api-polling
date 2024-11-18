import { configureStore } from "@reduxjs/toolkit";
import chatSlice from '../slice/chatSlice'

const appStore=configureStore({
reducer:{
    chat:chatSlice
}
})

export default appStore