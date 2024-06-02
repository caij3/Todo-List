import React from 'react'

const AddTodoForm = () => {
  return (
    <>
        <form className="flex space-x-3">
            <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                bg-zinc-200"
                placeholder="Add todo"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                rounded py-2 px-10 focus:outline-none focus:shadow-outline">
                    Add
                </button>
        </form>
    </>
  )
}

export default AddTodoForm