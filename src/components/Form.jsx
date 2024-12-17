function Form() {
    return (
      <div className="container mx-auto p-4">
        <form className="bg-white dark:bg-gray-700 p-6 rounded shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Fale Conosco
          </h2>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500"
              placeholder="Seu Nome"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500"
              placeholder="Seu E-mail"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300"
              htmlFor="message"
            >
              Comentário
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded dark:bg-gray-600 dark:border-gray-500"
              placeholder="Seu comentário"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default Form;