import axios from "axios";
import { useEffect, useState } from "react";
import InputForm from "./components/inputform";

function App() {

  /* define the states to set tha data comes from api call */
  const [todos, setTodos] = useState([]);
  /* use this satate for the dependancy array to rerender the UI */
  const [todoadded, setTodoAdded] = useState(false);

  /* function to add todo in the database */
  const addtodo = async ({ newtitle, newtodo }) => {
    try {
      const data = { title: newtitle, content: newtodo };
      const resp = await axios.post('http://localhost:5000/todo', data);
      setTodoAdded(!todoadded);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* function to delete a todo from database using specific id */

  const deletetodo = async (id) => {
    try {
      const resp = await axios.delete(`http://localhost:5000/${id}`)
      console.log(resp);
      setTodoAdded(!todoadded);
    } catch (error) {
      console.log(error);
    }
  }

  /* hook to fetch data from the server using api and automatically rerender the UI when dependency changes */

  useEffect(() => {
    async function fetchdata() {
      try {
        const resp = await axios.get('http://localhost:5000/todo');
        console.log(resp.data);
        setTodos(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, [todoadded])

  return (
    /* UI for the data comes from the server to show on screen  */
    <div className="bg-black text-white h-[100vh] p-3 md:p-0">
    
      {/* input component comes from the components folder */}
      <InputForm addnewtodo={addtodo} />
      <div className='flex justify-center'>
        <div className="border w-[100%] md:w-[50%] p-5">
          {todos.map(item =>
            <div key={item.id} className="flex justify-between items-center border my-2 p-2" >
              <div className="flex flex-col">
                <div className="">Title : {item.title}</div>
                <div>{item.content}</div>
              </div>
              <div>
                <button onClick={() => deletetodo(item.id)} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
