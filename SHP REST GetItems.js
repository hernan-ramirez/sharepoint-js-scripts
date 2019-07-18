var query = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/Lists/GetByTitle('Convocados')/items" 
//+ "?$Select=Title,InfoCandidato/CandidatoNombre,InfoCandidato/CandidatoApellido,InfoCandidato/CandidatoEmail,Curso/Title,calendarioDictado/EventDate,calendarioDictado/CodigoEventoSAP" + "&$filter=DictadoID eq " + GetUrlKeyValue('ID') + "&$expand=InfoCandidato,Curso,calendarioDictado";

var call = $.ajax({
    url: query,
    type: "GET",
    dataType: "json",
    headers: {
        Accept: "application/json;odata=verbose"
    }
});

call.done(function(data, textStatus, jqXHR) {
    console.log("Obteniendo registros:");
    //console.dir(data.d.results);
    
    $.each(data.d.results, function (index, item) {
        console.log(index, item.Title);
    });    
});

call.fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Problemas al obtener los registros: " + jqXHR.responseText);
});
