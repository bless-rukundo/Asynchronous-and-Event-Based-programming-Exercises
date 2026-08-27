// 1. Corrected variable name (removed the extra 's')
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetch = (url, callback) => {
   
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                callback(null, data);
            } catch (e) {
                callback(new Error("Parsing error"), null);
            }
        } else {
          
            callback(new Error(`Request failed with status: ${xhr.status}`), null);
        }
    };

    xhr.onerror = () => {
        callback(new Error("Network Issue"), null);
    };

    xhr.open('GET', url);
    xhr.send();
};


fetch("https://jsonplaceholder.typicode.com/posts", (error, data) => {
    if (error) {
        console.log("Error in fetching data: ", error.message);
    } else {
        console.log("success :", data.slice(0, 2)); // Logging first 2 items
    }
});