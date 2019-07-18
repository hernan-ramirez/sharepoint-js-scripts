var consulta = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/getbytitle('Dictado de Cursos')/Views/getbytitle('Calendario')";

fetch(consulta, {
    method: 'get',
    credentials: 'same-origin'

}).then(response => {

    response.text().then(text => {
        xmlDoc = new DOMParser().parseFromString(text, 'text/xml');
        console.log(xmlDoc);
    });

});