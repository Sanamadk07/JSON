const data = {
    "query": `
    query MyQuery {
        allGalleries {
          imageTitle
          category
          imageForGallery {
            url
          }
        }
      }
`
};

fetch("https://graphql.datocms.com/", {
        method: "POST", //or’PUT’
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 03e139af91488ac316ed2b9df8a122",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        //dootheractiviteswithdata
        //datahastherequiredresults
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });