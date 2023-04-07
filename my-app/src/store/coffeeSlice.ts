
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CoffeeState {
  name: string;
  price: number;
  ingredients: string[];
}

const initialState: CoffeeState = {
  name: '',
  price: 0,
  ingredients: [],
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setIngredients: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
  },
});

export const { setName, setPrice, setIngredients } = coffeeSlice.actions;

export default coffeeSlice.reducer;