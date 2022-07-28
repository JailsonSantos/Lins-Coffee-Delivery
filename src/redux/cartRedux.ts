import { createSlice } from '@reduxjs/toolkit';

interface CoffeeProps {
  id: string;
  type: string[];
  name: string;
  description: string;
  img: string;
  price: number;
  quantityOfCoffee: number;
}

export interface SliceState {
  coffees: CoffeeProps[];
  quantity: number;
  total: number;
}

const initialState: SliceState = {
  coffees: [{
    id: '',
    type: [''],
    name: '',
    description: '',
    img: '',
    price: 0,
    quantityOfCoffee: 0,
  }],
  quantity: 0,
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.total += action.payload.total;

      if (state?.coffees?.[0]?.id === '') {
        state.quantity += 1;
        state.coffees[0] = action.payload;
      } else {

        const coffeFound = state.coffees.find(element => element.id === action.payload.id);

        if (!coffeFound) {
          state.quantity += 1;
          state.coffees.push(action.payload);
        } else {
          state.coffees = state.coffees.map((coffee) => {
            if (coffee.id === action.payload.id) {
              coffee.quantityOfCoffee += action.payload.quantityOfCoffee;
            }
            return coffee;
          })
        }
      }
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;

      const newTotalOfCoffees = state.coffees.filter(coffee => coffee.id !== action.payload.id)

      state.total = newTotalOfCoffees.reduce((resultado, quantidade) => {
        const newTotal = quantidade.quantityOfCoffee * quantidade.price
        return (resultado + newTotal)
      }, 0);

      state.coffees = state.coffees.filter(coffee => coffee.id !== action.payload.id)
    },
    addTotal: (state, action) => {
      state.total += action.payload.total;
      state.coffees = state.coffees.map(coffee => {
        if (coffee.id === action.payload.id) {
          coffee = action.payload;
        }
        return coffee;
      })
    },
    minusTotal: (state, action) => {
      state.total -= action.payload.total;
      state.coffees = state.coffees.map(coffee => {
        if (coffee.id === action.payload.id) {
          coffee = action.payload;
        }
        return coffee;
      })
    },
    removeSuccess: (state, action) => {
      state.coffees = [action.payload];
      state.quantity = 0;
      state.total = 0;
    },
  }
});

export const {
  addProduct,
  deleteProduct,
  addTotal,
  minusTotal,
  removeSuccess
} = cartSlice.actions;
export default cartSlice.reducer;