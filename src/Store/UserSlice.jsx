import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    firstName: "",
    lastName: "",
    password: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        createUser: (state, action) => {debugger
            {console.log("אני כאן")}
            state.firstName = action.payload.firstName;
            state.lastName= action.payload.lastName            ;
            state.password = action.payload.password;
        }
    }
})

export const {createUser} = userSlice.actions
export default userSlice.reducer