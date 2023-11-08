import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    user: null,
    token: null,
    localId: null,
    name: null,
    dni: null,
    phone: null,
    imageCamera: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                user: action.payload.email,
                token: action.payload.idToken,
                name: action.payload.name,
                dni: action.payload.dni,
                phone: action.payload.phone,
                localId: action.payload.localId,
            }
        },
        clearUser: () => {
            return { user: null, token: null, name: null, dni: null, phone: null, localId: null }
        },
        setCameraImage: (state, action) => {
            return {
                ...state,
                imageCamera: action.payload
            }
        }
    },
})

export const { setUser, clearUser, setCameraImage} = authSlice.actions

export default authSlice.reducer



