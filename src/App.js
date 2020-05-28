import React, { useState, setState } from 'react';
import Todos from "./data/todos.js"

import "./app.css"

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

			<h1>To-Do</h1>
			
			<form className="submit" onSubmit={handleSubmit}>
				<input className="submit__field" type="text" value={inputTitle} required onChange={(e) => inputSetTitle(e.target.value)}></input>
				<input className="submit__button" type="submit" value="Add a new To-Do"></input>
			</form>

			<ul className="list">
				{title.map(function(item, itemID){
					return (
					<li className="list__items" key={itemID}>
						<div>
							{item.title}
							<input className="list__items__checkbox" type="checkbox" checked={item.isCompleted} onChange={() => handleChecked(itemID)}></input>
							<button className="list__items__button" onClick={() => deleteTodo(itemID)}></button>
						</div>
					</li>
					)
				})}
			</ul>
			
		</div>
	);
};
export default App;