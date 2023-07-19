import { useState } from "react"

export default function List() {
    const [todo, setTodo] = useState([])
    const [name, setName] = useState("")

    function done(){
        setName([])
    }
    function removeTodo(){
        setTodo([
            ...todo, name = ""
        ])
    }

    return (
        <>
            <div className="h-100 w-full flex items-center justify-center bg-white font-sans">
                <div className="bg-gray-50 rounded shadow-lg p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-grey-darkest">Todo List</h1>
                        <div className="flex mt-4">
                            <input onChange={e => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Ajouter une tâche" />
                            <button onClick={() => setTodo([...todo, name])} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal">Ajouter</button>
                        </div>
                    </div>
                    <div>
                        {
                            todo.map(t => (
                                <div className="flex mb-4 items-center">
                                    <p className="w-full text-grey-darkest">{t}</p>
                                    <button onClique={done} className="flex-no-shrink p-2 ml-4 mr-2 rounded-lg text-white bg-blue-500">Done</button>
                                    <button className="flex-no-shrink p-2 ml-2 rounded-lg bg-red-600 text-white">Remove</button>
                                </div>
                            ))
                        }
                        {/* <div className="flex mb-4 items-center justify-between">
                            <p className="w-1/2 md:w-2/4 line-through text-green">Submit Todo App Component to Tailwind Components</p>
                            <div classNameName="flex">
                                <button className="flex-no-shrink p-2 mr-2 rounded-lg bg-gray-500 text-white">Not Done</button>
                                <button className="flex-no-shrink p-2 ml-2 rounded-lg bg-red-600 text-white">Remove</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}