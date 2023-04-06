export async function FetchApiCoffees(coffeeType: string) {
    let endpoint;
    if (coffeeType === "Iced") {
      endpoint = "https://api.sampleapis.com/coffee/iced";
    } else {
      endpoint = "https://api.sampleapis.com/coffee/hot";
    }
  
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  }