/*
 *
 * Consulta Distinct a Experiencias de VLE
 * 
 * https://cablevisionfibertel.sharepoint.com/sites/Vivilaexperiencia/_api/web/lists/GetByTitle('Experiencias')/GetItems(query=@v1)?@v1={"ViewXml":"<GroupBy Collapse="TRUE" GroupLimit="30"><FieldRef Name="Title" /></GroupBy><OrderBy><FieldRef Name="ID" /></OrderBy><Where><Geq><FieldRef Name="InicioEvento" /><Value Type="DateTime"><Today /></Value></Geq></Where>"}
 *
 */

var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('Experiencias')/GetItems";
var viewXml = `
    <GroupBy Collapse="TRUE" GroupLimit="50">
        <FieldRef Name="Title" />
    </GroupBy>
    <OrderBy>
        <FieldRef Name="Title" />
    </OrderBy>
    <Where>
        <Geq>
            <FieldRef Name="InicioEvento" />
            <Value Type="DateTime"><Today /></Value>
        </Geq>
    </Where>`;

var data = {  
    'query' : {
           '__metadata': { 'type': 'SP.CamlQuery' }, 
           'ViewXml' : viewXml  
    }
};

fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)

}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

/*
 *
 * Obtener CAML Query de la vista publica:
 * a https://cablevisionfibertel.sharepoint.com/sites/Vivilaexperiencia/Lists/Experiencias/Experiencias%20Agrupadas.aspx
 * 
 */

var consulta = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Experiencias')/Views/getbytitle('Experiencias Agrupadas')?$select=ViewQuery";

fetch(consulta, {
    method: 'get',
    credentials: 'same-origin'

}).then(response => {

      response.text().then(text => {
        xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
        console.log(xmlDoc);
      });

});

/*
Consulta POST en MS Graph

https://graph.microsoft.com/v1.0/sites/cablevisionfibertel.sharepoint.com:/sites/Vivilaexperiencia:/lists/Experiencias/items?expand=fields

{  
    'query' : {
           '__metadata': { 'type': 'SP.CamlQuery' }, 
           'ViewXml' : '<GroupBy Collapse="TRUE" GroupLimit="30"><FieldRef Name="Title" /></GroupBy><OrderBy><FieldRef Name="ID" /></OrderBy><Where><Geq><FieldRef Name="InicioEvento" /><Value Type="DateTime"><Today /></Value></Geq></Where>'
    }
}
*/