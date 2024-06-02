import React from 'react'

const UpdateTodoForm = () => {
  return (
    <>
        <form className="flex space-x-3">
            <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                bg-zinc-200"
                placeholder="Update todo"
            />
            <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold
                 rounded py-2 px-7 focus:outline-none focus:shadow-outline">
                    Update
                </button>
        </form>
    </>
  )
}

export default UpdateTodoForm