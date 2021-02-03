const p = fetch('./data.json')
  .then((res) => {
    console.log(res)
    return res.json(); // <- promise
  })
  .then((result) => {
    console.log(result);
  });
