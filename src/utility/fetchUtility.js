const fetchUtility = (url,method = "GET",body ={})  => {
    const options = {
        method,
    };
 
    if (method === "POST" || method === "PUT") {
        options.headers = {
          "Content-Type": "application/json",
        };
        options.body = JSON.stringify(body);
      }
    
      return fetch(url, options).then((res) => res.json());
    };
    
const get = (url) => fetchUtility(url, "GET");

const post = (url, body) => fetchUtility(url, "POST", body);

const put = (url, body) => fetchUtility(url, "PUT", body);

const remove = (url) => fetchUtility(url, "DELETE");

export { get, post, put, remove };