export interface CoffeeState {
    coffees: Coffee[];
    loading: boolean;
    error: string | null;
  }
  
  export interface Coffee {
    id?: number;
    name: string;
    description: string;
    type: string
    imageURL: string
    ingredients: string[]
  }

  