var consulta = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Dictado de Cursos')/items(9)/FieldValuesAsText";

fetch(consulta, {
    method: 'get',
    credentials: 'same-origin'

}).then(response => {

      response.text().then(text => {
        xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
        console.log(xmlDoc);
      });

});