var ctx = SP.ClientContext.get_current();
var userCustomActionsSite = ctx.get_site().get_userCustomActions();
userCustomActionsSite.clear();
ctx.executeQueryAsync();
//go to [your site collection]/_api/site/usercustomactions
