$.ajax({
    url: '/_layouts/15/Intranet.Web/Admin/AdminSharepoint.aspx/agregarSiteAdminUser',
    type: "POST",
    dataType: "json",
    data: JSON.stringify({ urlSitio: "", dominio: "", userLoginName: "" }),
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        alert("Ya tienen los permisos de un site admin. Recorda de quitarlos una vez que finalices. Y trata de no romper nada!!!!!");
    },
    error: function (er) { alert("No se ha podido dar permisos"); }
})
