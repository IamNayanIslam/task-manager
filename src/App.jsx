import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";

function App() {
  // ✅ Load from localStorage initially
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [todo, setTodo] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // ✅ Auto-save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ✅ Auto-save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo === null || todo.trim() === "") return;
    setTodos([{ todo, isCompleted: false, id: uuidv4() }, ...todos]);
    setTodo("");
    console.log(todos);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;

    let updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((item) => item.id === id);

    const newTodoText = prompt("Edit Your Task:", todoToEdit.todo);
    if (newTodoText === null || newTodoText.trim() === "") return;

    const updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, todo: newTodoText } : item
    );

    setTodos(updatedTodos);
  };

  const handleDelete = (e) => {
    const confirmDelete = window.confirm("Want to delete this task?");
    if (confirmDelete) {
      let id = e.target.name;
      let updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
    }
  };

  const deleteAll = () => {
    const confirmDelete = window.confirm("Want to delete all tasks?");
    if (confirmDelete) setTodos([]);
  };

  return (
    <>
      <div
        className={darkMode ? "bg-[#4d4d4d] h-[100vh]" : "bg-white h-[100vh]"}
      >
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <div
          className={
            darkMode
              ? "bg-[#3C3D37] container w-[96%] lg:w-3/4 mx-auto my-5 rounded-xl p-1 md:p-5 min-h-[80vh] border border-gray-400"
              : "container w-[96%] lg:w-3/4 mx-auto my-5 rounded-xl p-1 md:p-5 bg-[#f9f9f9] min-h-[80vh] border border-gray-400"
          }
        >
          <div className="sm:w-3/4 mx-auto">
            <div className="addTodo mb-4 ">
              <h2 className="text-lg font-bold mb-4 px-2">Add a Task</h2>

              <div className="flex gap-2 sm:gap-4 px-2">
                <input
                  className={
                    darkMode
                      ? "p-2 rounded-md flex-1 border bg-[#4d4d4d] border-gray-400"
                      : "p-2 rounded-md flex-1 border border-gray-400"
                  }
                  type="text"
                  placeholder="Describe your Task"
                  onChange={handleChange}
                  value={todo}
                  onKeyDown={handleEnter}
                />
                <button
                  onClick={handleAdd}
                  className={
                    darkMode
                      ? "bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-md text-white"
                      : "bg-green-800 hover:bg-green-900 px-4 py-2 rounded-md text-white"
                  }
                >
                  Add
                </button>
              </div>
            </div>
            {todos.length === 0 ? (
              <div className="px-2">
                <p
                  className={
                    darkMode
                      ? "text-center py-2 bg-[#4d4d4d] text-lg text-[#252525] rounded-md"
                      : "text-center py-2 bg-red-300 text-lg text-red-700 rounded-md"
                  }
                >
                  No Tasks to show!
                </p>
              </div>
            ) : (
              <div>
                {todos.length >= 2 ? (
                  <div className="flex items-center pr-4 mb-4">
                    <h2 className="text-lg font-bold px-2">Your Todos</h2>{" "}
                    <button
                      onClick={deleteAll}
                      className={
                        darkMode
                          ? "bg-slate-800 hover:bg-slate-900 px-4 py-2 rounded-md text-white"
                          : "bg-red-800 hover:bg-red-900 px-4 py-2 rounded-md text-white"
                      }
                    >
                      Delete All
                    </button>
                  </div>
                ) : (
                  <h2 className="text-lg font-bold mb-4 px-2">Add a Task</h2>
                )}

                <div className="todos flex flex-col items-center">
                  {todos.map((item) => (
                    <TodoItem
                      key={item.id}
                      item={item}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      handleCheckbox={handleCheckbox}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
