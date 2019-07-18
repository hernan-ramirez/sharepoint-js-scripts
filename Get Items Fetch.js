var query = "https://srtisofrecom.sharepoint.com/sites/IntranetTelecom/_api/web/lists/GetByTitle('Site Pages')/Items";
 
var queryConfig = {
    method: 'GET',
    headers: { 
        "Accept": "application/json; odata=verbose",
        "Access-Control-Allow-Origin": "True"
    },
    //credentials: 'same-origin'    
    credentials: 'include'  
}

fetch(query, queryConfig)
    //.then((response) => console.log(response));    
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        /*
        let items = data.d.results;
        items.forEach((item) => {
            console.log(item.Title);
        }); 
        */
    });

