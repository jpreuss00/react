import React from 'react';
import Todos from "./data/todos.js";

const App = () => {

	return (
		<div>

			<h1>Todoooooooo app</h1>

			<h3>Was ich machen werde wenn die Kontaktsperre aufgehoben wird:</h3>
			<ul>

				{Todos.map(function(item, itemID){
					return (
					<li key={itemID}>
						{item.title}
					</li>
					)
				})}

			</ul>
			
		</div>
	);
};
export default App;