'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function FormPage() {
  const [showButtons, setShowButtons] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = useCallback(
    (data) => {
      try {
        console.log(data)
        reset()
      } catch (err) {
        console.log(err)
      }
    },
    [reset]
  )

  const handleClick = useCallback(() => {
    setShowButtons(true)
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen  py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <h2 className='mt-6 text-center text-3xl  text-gray-900'>
          Formulario de encuesta
        </h2>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label className='text-base'>Suministro</label>
              <input
                type='text'
                {...register('suministro')}
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Codigo de Suministro'
              />
            </div>
          </div>
          <div>
            <div className='my-8'>
              <button
                type='submit'
                onClick={handleClick}
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-800'
              >
                Registrar
              </button>
            </div>
            {showButtons && (
              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-500 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-800'
                >
                  Contesta
                </button>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center my-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  No contesta
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
