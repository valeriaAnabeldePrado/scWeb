import React from "react";

const FormOk = () => {
  return (
    <>
      <form action="#" method="POST" className=" mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="block text-lg font-extralight  leading-6 text-white"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="Nombre"
                className="block w-full rounded-xl border-3 border-white px-3.5 py-2 text-white bg-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="apellido"
              className="block text-lg font-extralight  leading-6 text-white"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="apellido"
                id="apellido"
                autoComplete="Apellido"
                className="block w-full rounded-xl border-3 border-white px-3.5 py-2 text-white bg-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-lg font-extralight  leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-xl border-3 border-white px-3.5 py-2 text-white bg-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-lg font-extralight  leading-6 text-white"
            >
              Número telefónico
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="numerocelu"
                id="numerocelu"
                autoComplete="Telefono"
                className="block w-full rounded-xl border-3 border-white px-3.5 py-2 text-white bg-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-lg font-extralight  leading-6 text-white"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                name="mensaje"
                id="mmensaje"
                rows={4}
                className="block w-full rounded-md border-3 border-white px-3.5 py-2 text-white bg-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </>
  );
};

export default FormOk;
