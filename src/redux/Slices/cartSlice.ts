import { createSlice } from "@reduxjs/toolkit";

type CartItems = {
    id: number, 
    title: string, 
    imageUrl: string, 
    price: number, 
    count: number,
    sizes: number[], 
    types: number[] 
}

interface ICartSlice {
    total_price: number,
    items: CartItems[]
}

const initialState: ICartSlice = {
    total_price: 0,
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload.id)

            if(findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.total_price = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

        },
        itemPlus: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload)

            if(findItem) {
                findItem.count++
            }

            state.total_price = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

        },
        itemMinus: (state, action) => {
            const findItem = state.items.find((obj) => obj.id === action.payload)
            if(findItem) {
                state.total_price = (state.total_price - findItem.price) - findItem.count--
            }

        },
        removeItem: (state, action) => {
            const removeItemPrice = state.items.filter((obj) => obj.id !== action.payload)
            state.items = removeItemPrice
            
        },
        clearCart: (state) => {
            state.items = []
            state.total_price = 0
        }

    }
})


export const { addItem, removeItem, clearCart, itemPlus, itemMinus} = cartSlice.actions
export default cartSlice.reducer