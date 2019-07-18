/*
Entras a un sitio de la granja, una pagina que tenga jquery (por ejemplo la home de la intranet que seguro tenes permisos), 
pones f12 y ejecutas el siguiente codigo (cambia el usuario). 
Si esa url no funciona proba con https://intranet.telecom.com.ar/_layouts/15/Intranet.Web/Admin/AdminSharepoint.aspx/agregarSiteAdminUser
*/

$.ajax({
    url: '/_layouts/15/Intranet.Web/Admin/AdminSharepoint.aspx/agregarSiteAdminUser',
    type: "POST",
    dataType: "json",
    data: JSON.stringify({
        urlSitio: "https://intranet.telecom.com.ar",
        dominio: "ccpi",
        userLoginName: "u586885"
    }),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        alert("Ya tienen los permisos de un site admin. Recorda de quitarlos una vez que finalices. Y trata de no romper nada!!!!!");
    },
    error: function (er) {
        alert("No se ha podido dar permisos");
    }
})