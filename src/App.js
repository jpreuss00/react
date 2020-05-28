import React, { useState, setState } from 'react';
import Todos from "./data/todos.js"

const App = () => {

	const [title, setTitle] = useState(
		Todos
	);

const addTodo = (inputTitle) => {
	setTitle([...title, {title: inputTitle, isCompleted: false}]);
}

const [inputTitle, inputSetTitle] = useState('');

const handleSubmit  = (e) => {
	e.preventDefault();
	addTodo(inputTitle);
	inputSetTitle('');
}

const deleteTodo = (itemID) => {
	title.splice(itemID, 1);
	
	inputSetTitle(' ');
	setTimeout(function(){
		inputSetTitle('');
	}, 1)
};

const handleChecked = (itemID) => {
	title[itemID].isCompleted = !title[itemID].isCompleted;
	inputSetTitle(' ');
	setTimeout(function(){
		inputSetTitle('');
	}, 1)
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
							<input type="checkbox" checked={item.isCompleted} onChange={() => handleChecked(itemID)}></input>
							<button onClick={() => deleteTodo(itemID)}>x</button>
						</div>
					</li>
					)
				})}
			</ul>
			
		</div>
	);
};
export default App;