import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  	const [toDos, setToDos] = useState([])
	const [input, setInput] = useState("");

	function addToDo(){
		if(input.trim() != ""){
			setToDos([...toDos, input]);		
			setInput("");	
		}else{
			alert("Missing input")
		}
	}


return (
	<>
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="bg-gray-100 w-[40%] h-[80%] text-gray-800">        
				<h1 className='text-center'>Todo App</h1>
				<div className="flex justify-center gap-1.5">
					<input
						type="text" 
						className="bg-blue-500" 
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button 
						className="bg-amber-900 cursor-pointer"
						onClick={() => {addToDo()}}
					>
						Add Task
					</button>
				</div>
				<div className="flex justify-center gap-4">
					<ul>
						{
							toDos.map((todo, index) => 
									<li key={index}>{todo} <input type="checkbox" /></li> 
							)
						}
					</ul>
				</div>
			</div>
		</div>
	</>
	)
}

export default App
