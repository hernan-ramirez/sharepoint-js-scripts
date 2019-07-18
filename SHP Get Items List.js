var context = SP.ClientContext.get_current();
var lista = context.get_web().get_lists().getByTitle('Dictado de Cursos');


var query = `<View>
	<Query>
		<Where>
			<And>
				<And>
					<And>
						<Eq>
							<FieldRef Name="Curso" LookupId="True" />
							<Value Type="Integer">1</Value>
						</Eq>
						<Eq>
							<FieldRef Name="EventDate" />
							<Value Type="DateTime">2018-02-20T12:00:00Z</Value>
						</Eq>
					</And>
					<Neq>
						<FieldRef Name="EventType" />
						<Value Type="Integer">3</Value>
					</Neq>
				</And>
				<Neq>
					<FieldRef Name="EventType" />
					<Value Type="Integer">4</Value>
				</Neq>
			</And>
		</Where>
	</Query>
</View>`;
camlQuery = new SP.CamlQuery();
camlQuery.set_viewXml(query);
this.registros = lista.getItems(camlQuery);

context.load(registros);


context.executeQueryAsync( function(){
        var listItemEnumerator = registros.getEnumerator();

        while (listItemEnumerator.moveNext()) {
            var item = listItemEnumerator.get_current();
            console.log(item.get_item('Title'));
        }

    }, function(){
        console.log('Ha ocurrido un error: ' + args.get_message() + '\n' + args.get_stackTrace());
    }     
);
