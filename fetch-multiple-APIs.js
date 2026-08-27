const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];
async function fetchMultipleAPIs(arr){
    let ap1= fetch(arr[0]);
    let ap2= fetch(arr[1]);
    let ap3= fetch(arr[2]);

    let result= await Promise.all([ap1, ap2, ap3]);
    return Promise.all(result.map(async (el)=>{
        let el1= await el.json();
        return el1
    }))
}

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });