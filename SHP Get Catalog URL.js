/*
 *
 * You need to make GET request to an undocumented endpoint:
 * /_api/SP_TenantSettings_Current 
 * which will give you the App Catalog Url.
 * 
 */

var appCatalogUrl = "https://srtisofrecom.sharepoint.com/_api/SP_TenantSettings_Current";
this.context.spHttpClient.get(appCatalogUrl,
  SPHttpClient.configurations.v1,
  {
    headers: {
      'Accept': 'application/json;odata=nometadata',
      'odata-version': ''
    }
  })
  .then((response) => {
    response.json().then((value) => {
      console.log(value);

      var appCatalogUrlValue = value.CorporateCatalogUrl;

      if (appCatalogUrlValue && appCatalogUrlValue.length > 0) {
        // do some stuff using it
      }
    })
  })