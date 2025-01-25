import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    name: "",
    phone: "",
    email: ""
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        createUser: (state, action) => {debugger
            state.name = action.payload.Name;
            state.phone = action.payload.Phone;
            state.email = action.payload.Email;
        }
    }
})

export const {createUser} = userSlice.actions
export default userSlice.reducer