const getFood = async (food: string) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${food}`;
  const headers: Record<string, string> = {
    "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
  };

  if (API_KEY) {
    headers["X-RapidAPI-Key"] = API_KEY;
  }

  const options = {
    method: "GET",
    headers: headers,
  };
  console.log(API_KEY);
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  return result;
};

export { getFood };
