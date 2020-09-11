export const getUser = (callback) => {
  //   const response = await fetch("http://localhost:8080/getusers");
  //   const data = response.json();
  //   console.log(data);
  fetch("http://localhost:8080/getusers")
    .then((res) => res.json())
    .then((json) => callback(json))
    .catch((error) => console.log(error));
};
