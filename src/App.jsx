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
		}else{
			alert("Missing input")
		}
	}


useEffect(()=> {
	console.log(toDos)
},[toDos]);

return (
	<>
		<div className="flex items-center justify-center w-screen h-screen">
			<div className="bg-gray-100 w-[80%] h-[80%] text-gray-800">        
				<h1 className=''>Hello World!!</h1>
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
					Hello
				</button>
				<ul>
					{
						toDos.map((todo, index) => 
							<li key={index}>{todo}</li>
						)
					}
				</ul>


			</div>
		</div>
	</>
	)
}

export default App
