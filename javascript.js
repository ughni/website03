
const endPoind = "https://reqres.in/api/users";


fetch(endPoind, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "Latifah@gmail.com",
    firstName: "Latifah",
  })
})
  .then(resutlt => resutlt.json())
  .then(( data ) => console.log(data))
