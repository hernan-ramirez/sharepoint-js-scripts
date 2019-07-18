var query = _spPageContextInfo.webAbsoluteUrl + "/_vti_bin/ExcelRest.aspx/Lists/Importador/Asistencia.xlsx/model/Ranges('A1%7CE4')?$format=json";

var queryConfig = {
    method: 'GET',
    headers: { "Accept": "application/json; odata=verbose" },
    credentials: 'same-origin'    // or credentials: 'include'  
}

fetch(query, queryConfig)
    //.then((response) => console.log(response));
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let rows = data.rows;
        rows.forEach((row) => {
            console.log(row[1].v);
        });

    });