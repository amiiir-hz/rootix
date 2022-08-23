const fetchData = (url, options) => {
    const data = fetch(`https://api.rootix.ae/api/v1/${url}`, options)
        // .then((response) => response.json())
        // .then((data) => data)
        // .catch((err) => err);
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      return data;
      // .then((response) => {
      //   if (response.status === 200) {
      //     return response.json();
      //   } else {
      //     return response.json().then((data) => {
      //       alert(data.message);
      //     });
      //   }
      // })
      // .catch((err) => err);
  
      //section7 minute 3
  };
  export default fetchData;
  