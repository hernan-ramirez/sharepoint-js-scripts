var query = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('Convocados')/items";
 
var queryConfig = {
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    credentials: 'same-origin'    // or credentials: 'include'  
}

fetch(query, queryConfig)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.d.results);
        
        let items = data.d.results;
        items.forEach((item) => {
            console.log(item.ID,item.Title);
        });
        
    });