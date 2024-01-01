export default function Preguntas() {
  return (
    <>
      <h2 className='mt-6 text-center text-3xl  text-gray-900'>PREGUNTAS</h2>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        Nombre
      </label>
      <input
        className='appearance-none rounded-none relative block w-full mt-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        type='text'
        placeholder='Ingrese nombre'
      />
      <label className='block text-gray-700 text-sm font-bold mt-5 mb-2'>
        Numero de contacto
      </label>
      <input
        className='appearance-none rounded-none relative block mt-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
        type='text'
        placeholder='Ingrese numero de contacto'
      />
      <label className='block text-gray-700 text-sm font-bold mt-5 mb-2'>
        Pregunta 01: ¿La instalación eléctrica se realizó dentro del plazo de
        los 7 días calendarios después de realizado el pago?
      </label>
      <select className='appearance-none rounded-none relative block w-full mt-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
        <option value='0'>Seleccione una opcion</option>
        <option value='1'>SI</option>
        <option value='1'>No</option>
      </select>

      <label className='block text-gray-700 text-sm font-bold mt-5 mb-2'>
        Pregunta 02 : ¿Cómo calificaría el trato y el trabajo del personal
        técnico al momento de realizar la instalación eléctrica?
      </label>
      <select className='appearance-none rounded-none relative block w-full mt-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
        <option value='0'>Seleccione una opcion</option>
        <option value='1'>Pesimo</option>
        <option value='2'>Malo</option>
        <option value='3'>Bueno</option>
        <option value='4'>Regular</option>
      </select>

      <label className='block text-gray-700 text-sm font-bold mt-5 mb-2'>
        Pregunta 03: ¿El personal técnico le solicitó algún pago adicional al
        momento de realizar la instalación?
      </label>
      <select className='appearance-none rounded-none relative block w-full mt-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
        <option value='0'>Seleccione una opcion</option>
        <option value='1'>SI</option>
        <option value='1'>No</option>
      </select>
      <label className='block text-gray-700 text-sm font-bold mt-5 mb-2'>
        Pregunta 04: ¿El personal técnico trato de vender o le vendió algún tipo
        de material al momento de realizar la instalación?
      </label>
      <select className='appearance-none rounded-none relative block w-full mt-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
        <option value='0'>Seleccione una opcion</option>
        <option value='1'>SI</option>
        <option value='1'>No</option>
      </select>

      <button className='group relative w-full flex justify-center mt-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-800'>
        Registrar
      </button>
    </>
  )
}
