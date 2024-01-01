'use client'

import Preguntas from '@/app/components/Preguntas'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormLayout from '../layout'

export default function FormPage() {
  const [showButtons, setShowButtons] = useState(false)
  const [showPreguntas, setShowPreguntas] = useState(false)
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

  const buttonShowPreguntas = () => {
    setShowPreguntas(true)
  }
  return (
    <FormLayout title='EJECUTAR ENCUESTA'>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Suministro
            </label>
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
                onClick={buttonShowPreguntas}
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
              {showPreguntas && <Preguntas />}
            </div>
          )}
        </div>
      </form>
    </FormLayout>
  )
}
