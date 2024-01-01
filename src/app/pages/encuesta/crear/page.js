'use client'
//TODO: Crear pagina de registro de encuesta

import { useForm } from 'react-hook-form'
import FormLayout from '../layout'

export default function FormPage() {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    try {
      console.log(data)
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormLayout title='CREAR ENCUESTA'>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label className='text-base'>UUNN</label>
            <select
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              {...register('uunn')}
            >
              <option value='0'>Seleccione una opcion</option>
              <option value='1'>Chiclayo</option>
              <option value='2'>Sucursales</option>
              <option value='3'>Cajamarca Centro</option>
            </select>

            <label className='text-base'>Fecha</label>
            <input
              className='appearance-none rounded-none relative block w-full mt-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              type='date'
              {...register('fecha')}
            />
          </div>
        </div>
        <div>
          <div className='my-8'>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-800'
            >
              Crear encuesta
            </button>
          </div>
        </div>
      </form>
    </FormLayout>
  )
}
