import React from "react";

export const TodoItem = ({
  item,
  handleCheckbox,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div
      key={item.id}
      className="todo flex flex-col sm:flex-row justify-between sm:items-center w-[98%] mx-auto p-4 border border-gray-400 rounded-xl hover:bg-slate-200 my-1"
    >
      {/* Left side: checkbox + task text */}
      <div className="flex gap-2 items-center">
        <input
          onChange={handleCheckbox}
          type="checkbox"
          checked={item.isCompleted}
          name={item.id}
        />
        <div
          className={
            item.isCompleted
              ? "text-base py-2 line-through text-green-600"
              : "text-base py-2 text-red-600"
          }
        >
          {item.todo}
        </div>
      </div>

      {/* Right side: buttons */}
      <div className="buttons w-full sm:w-auto flex sm:flex-row gap-2 sm:gap-4">
        <button
          onClick={() => handleEdit(item.id)}
          className="w-full bg-cyan-800 hover:bg-cyan-900 px-4 py-2 rounded-md text-white"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="w-full bg-red-800 hover:bg-red-900 px-4 py-2 rounded-md text-white"
          name={item.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
