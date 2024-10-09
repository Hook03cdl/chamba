'use client';

import { Check } from 'lucide-react';

interface PlanProps {
	name: String;
	price: String;
	benefits: Array<string>;
}

export default function Plan({ name, price, benefits }: PlanProps) {
<<<<<<< HEAD
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-2/4 mx-auto mt-10">
			<div className="p-1 bg-niagara-500"></div>
			<div className="p-8">
				<h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
				<p className="text-gray-600 mb-6">
					Suscribete para conseguir los siguiente beneficios
				</p>
				<p className="text-4xl font-bold text-gray-800 mb-6">{price}</p>
				<ul className="text-sm text-gray-600 mb-6">
					{benefits.map((benefit, i) => {
						return (
							<li className="mb-2 flex items-center" key={i}>
								<span className="text-niagara-500">
									<Check size={15} />
								</span>
								{benefit}
							</li>
						);
					})}
				</ul>
			</div>
			<div className="p-4">
				<button className="w-full bg-niagara-500 text-white rounded-full px-4 py-2 hover:bg-niagara-400 focus:outline-none focus:shadow-outline-green active:bg-green-800">
					Seleccionar plan
				</button>
			</div>
		</div>
	);
}
=======
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-2/4 mx-auto mt-10"
    >
      <div className="p-1 bg-niagara-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
        <p className="text-gray-600 mb-6">Suscribete para conseguir los siguiente beneficios</p>
        <p className="text-4xl font-bold text-gray-800 mb-6">{price}</p>
        <ul className="text-sm text-gray-600 mb-6">
          {
            benefits.map(benefit => {
              return (
                <li key={benefit} className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    className="w-4 h-4 mr-2 text-green-500"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  {benefit}
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
>>>>>>> d56bdf5c8beae189eaf85d0576cbd8b76ca589a3
