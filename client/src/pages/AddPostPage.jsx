import React from "react";

const AddPostPage = () => {
  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-3000 py-2 bg-gray-600 text-xs mt-2 flex item-center justify-center border-2 border-dotted cursor-pointer">
        Додати картинку:
        <input type="file" className="hidden" />
      </label>
      <div className="flex object-cover py-2">IMAGE</div>
      <label className="text-xs  text-white opacity-70">
        Заголовок поста
        <input
          type="text"
          placeholder="Введіть заголовок"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>

      <label className="text-xs  text-white opacity-70">
        Текст поста
        <textarea
          placeholder="Введіть текст "
          className="mt-1 text-black w-full resize-none h-40 rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center items-center mt-4">
        <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
          Додати
        </button>
        <button className="flex justify-center items-center bg-red-600 text-xs text-white rounded-sm py-2 px-4">
          Відмінити
        </button>
      </div>
    </form>
  );
};

export default AddPostPage;
