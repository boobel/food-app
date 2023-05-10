const getFood = async (food: string) => {
  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${food}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "106698b678msh975a603c9c65e01p1e30f2jsn6179ca662ea4",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  return result;
};

export { getFood };
