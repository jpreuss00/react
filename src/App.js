import React, { useState } from 'react';

const App = () => {

	const [title, setTitle] = useState([
		{ title: 'item 1', isCompleted: true  },
		{ title: 'item 2', isCompleted: false },
		{ title: 'item 3', isCompleted: false }
	]);

	/*
		Todos.map(function(item){
			{title: {item.title} isCompleted: {item.isCompleted}}
		})
	*/

const addTodo = (inputTitle) => {
	setTitle([...title, {title: inputTitle, isCompleted: false}]);
}

const [inputTitle, inputSetTitle] = useState('');
const handleSubmit  = (e) => {
	e.preventDefault();
	addTodo(inputTitle);
	inputSetTitle('');
}

	return (
		<div>

			<h1>Todoooooooo app</h1>

			<h3>Was ich machen werde wenn die Kontaktsperre aufgehoben wird:</h3>
			
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputTitle} required onChange={(e) => inputSetTitle(e.target.value)}></input>
				<input type="submit" value="Add a new Tod"></input>
			</form>

			<ul>
				{title.map(function(item, itemID){
					return (
					<li key={itemID}>
						<div>
							{item.title}
							<input type="checkbox" checked={item.isCompleted}>
							</input>
						</div>
					</li>
					)
				})}
			</ul>
			
		</div>
	);
};
export default App;