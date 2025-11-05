import ButtonComponent from "./ButtonComponent";
import { LuListTodo } from "react-icons/lu";
export default function AddTaskForm({
  darkMode,
  handleChange,
  todo,
  handleEnter,
  handleAdd,
}) {
  return (
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

        <ButtonComponent
          darkMode={darkMode}
          handleClick={handleAdd}
          primaryColor="bg-green-800 hover:bg-green-900"
          darkColor="bg-slate-800 hover:bg-slate-900"
        >
          <LuListTodo /> Add
        </ButtonComponent>
      </div>
    </div>
  );
}
