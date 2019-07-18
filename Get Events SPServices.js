// Include jQuery
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// Include SPServices
var jsp = document.createElement('script');
jsp.src = "//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js";
document.getElementsByTagName('head')[0].appendChild(jsp);

$().SPServices({
    operation: "GetListItems",
    async: false,
    listName: "Dictado de Cursos",
    CAMLViewFields: "<ViewFields> \
            <FieldRef Name='Title' /> \
            <FieldRef Name='EventDate' /> \
            <FieldRef Name='EndDate' /> \
            <FieldRef Name='Location' /> \
            <FieldRef Name='Description' /> \
            <FieldRef Name='fRecurrence' /> \
            <FieldRef Name='RecurrenceData' /> \
            <FieldRef Name='fAllDayEvent' /> \
            <FieldRef Name='Sala' /> \
        </ViewFields>",
    CAMLQuery: "<Query> \
            <Where> \
                <And> \
                    <DateRangesOverlap> \
                        <FieldRef Name='EventDate' /> \
                        <FieldRef Name='EndDate' /> \
                        <FieldRef Name='RecurrenceID' /> \
                        <Value Type='DateTime'> \
                            <Week /> \
                        </Value> \
                    </DateRangesOverlap> \
                    <Eq> \
                        <FieldRef Name='Sala' LookupId='TRUE' /> \
                        <Value Type='Lookup'>4</Value> \
                    </Eq> \
                </And> \
            </Where> \
            <OrderBy> \
                <FieldRef Name='EventDate' /> \
            </OrderBy> \
        </Query>",
    CAMLQueryOptions: "<QueryOptions> \
            <CalendarDate>2018-09-03T12:00:00Z</CalendarDate> \
            <RecurrencePatternXMLVersion>v3</RecurrencePatternXMLVersion> \
            <ExpandRecurrence>TRUE</ExpandRecurrence> \
        </QueryOptions>",
    completefunc: function (xData, Status) {
        $(xData.responseXML).find("z\\:row").each(function () {

            var $node = $(this);

            console.log($node);
            console.log("%c|ID) " + $node.attr("ows_ID"), 'color: yellow')
            console.log("%c" + $node.attr("ows_Title") + " |INI) " + $node.attr("ows_EventDate") + " |FIN) " + $node.attr("ows_EndDate"), 'color: #bada55');

        });
    }
})