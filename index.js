const promise = fetch('./data.json');

const promise2 = promise.then(
  (response) => {
    const promiseJson = response.json();
    return promiseJson;
  },
  (err) => {
    console.log('error: ', err);
  }
);

promise2.then((data) => {
  console.log(data);
});
