"use client"

export default function Plan({ nombre, precio, beneficios }) {

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-2/4 mx-auto mt-10"
    >
      <div className="p-1 bg-niagara-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{nombre}</h2>
        <p className="text-gray-600 mb-6">Suscribete para conseguir los siguiente beneficios</p>
        <p className="text-4xl font-bold text-gray-800 mb-6">{precio}</p>
        <ul className="text-sm text-gray-600 mb-6">
          {
            beneficios.map(beneficio => {
              return (
                <li className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-4 h-4 mr-2 text-green-500"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  {beneficio}
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="p-4">
        <button
          className="w-full bg-niagara-500 text-white rounded-full px-4 py-2 hover:bg-niagara-400 focus:outline-none focus:shadow-outline-green active:bg-green-800"
        >
          Seleccionar plan
        </button>
      </div>
    </div>
  )
}