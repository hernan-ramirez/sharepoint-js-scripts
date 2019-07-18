var ctx = SP.ClientContext.get_current();
var userCustomActionsSite = ctx.get_site().get_userCustomActions();
var uca = userCustomActionsSite.add();

uca.set_location("ScriptLink");
uca.set_sequence(3);
uca.set_title("Add jQuery from CDN");
uca.set_description("Adds jQuery from aspnetcdn to the site");
uca.set_scriptBlock("SP.SOD.registerSod('jquery', '//ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js');LoadSodByKey('jquery');");
uca.update();
ctx.executeQueryAsync();
//go to [your site collection]/_api/site/usercustomactions
