import { useState } from "react";

function InputForm({ addnewtodo }) {

    /* create states to store input fields values */
    const [newtodo, setNewTodo] = useState('');
    const [newtitle, setNewTitle] = useState('');

    /* function to handle button onclick */
    const handleAddTodo = () => {
        /* first check that the input fields are not empty */
        if (newtitle.trim() !== '' && newtodo.trim() !== '') {
            /* pass the values to the parent component function */
            addnewtodo({ newtitle, newtodo });
            /* clear the input fields when button is clicked */
            setNewTodo('');
            setNewTitle('');
        }else{
            /* alert when user try to add empty data */
            alert("Please Enter valid Text In Input Fields");
        }
    };



    return (
        <div>
            {/* UI for the input fields and submit button */}
            <div className="sm:text-[50px] text-[30px] text-center mb-5">Todo Application</div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col border-b m-5 gap-y-3 w-[100%] md:w-[50%]">
                    <label className="text-[20px]">Todo Title</label>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        value={newtitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Enter Your Todo Title" />
                </div>
                <div className="flex flex-col border-b mt-5 gap-y-3 w-[100%] md:w-[50%]">
                    <label className="text-[20px]">Todo Text</label>
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        value={newtodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter Your Todo Text" />
                </div>
            </div>
            <div className="flex justify-center p-10">
                <button onClick={handleAddTodo} className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-white rounded">Add Todo</button>
            </div>
        </div>
    );
}

export default InputForm;