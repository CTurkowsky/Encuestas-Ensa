//TODO: Crear pagina para listar encuestas

export default function ListarEncuestaPage() {
  return (
    <div className='flex items-center justify-center min-h-screen  py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <h2 className='mt-6 text-center text-3xl  text-gray-900'>
          Listar encuesta
        </h2>
        <div className='flex justify-center'>
          <table className='min-w-full table-auto'>
            <thead className='justify-between'>
              <tr>
                <th className='px-16 py-2'>UUNN</th>
                <th className='px-16 py-2'>Fecha</th>
                <th className='px-16 py-2'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-16 py-2'>Chiclayo</td>
                <td className='px-16 py-2'>01/12/2023</td>
                <td>
                  
                  <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mr-2'>
                    Editar
                  </button>
                  <button className='bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded ml-2'>
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
