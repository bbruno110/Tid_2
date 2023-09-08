"use client"
import background from '@/assets/bg-1.jpg';
import Image from 'next/image';
import React, { useState } from "react";

export default function Home() {

  const [cadastro, setCadatro] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  const cadBtn = () => {
    setAnimate(false);
    setAnimate(true);
    if(cadastro === 0)
    {
      setCadatro(1);
    }
    else
    {
      setCadatro(0)
    }
  }

  return (
    <>
      <div className='w-screen items-center grid h-screen place-items-center bg-gradient-to-tl from-indigo-300'>
        <Image src={background} alt='bg' layout='fill' objectFit='cover'/>
          {cadastro === 0 &&
            <div className={`
              h-[30rem] w-[25rem] border border-gray-700 rounded-lg
              backdrop-blur bg-white/30 ${animate && "animate-rotation-l"}`}>
            
              <div>
                <div className='flex justify-center items-center mt-3 pb-[120px]'>
                  <h2 className='text-3xl font-bold font-Montserrat text-gray-600'>Login</h2>
                </div>
                <form className='flex flex-col content-center items-center justify-center'>
                  
                  <input className='border-2 p-2 mb-3 border-gray-500 rounded-lg'
                    type='text' placeholder=' Usuario' 
                  />
                  <input className='border-2 p-2 mb-3 border-gray-500 rounded-lg'
                    type='password' placeholder=' Senha' 
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Entrar
                  </button>
                </form>
                <div className='flex justify-center items-center'>
                  <button onClick={cadBtn} className="absolute bottom-20 font-Montserrat text-blue-600 dark:text-blue-500 hover:underline">Cadastrar</button>
                </div>
              </div>
            
            </div>
          }
          {cadastro === 1 &&
            <div className={`
              h-[30rem] w-[25rem] border border-gray-700 rounded-lg
              backdrop-blur bg-white/30 ${animate && "animate-rotation-r"}`}>
            
              <div>
                <div className='flex justify-center items-center mt-3 pb-[120px]'>
                  <h2 className='text-3xl font-bold font-Montserrat text-gray-600'>Login</h2>
                </div>
                <form className='flex flex-col content-center items-center justify-center'>
                  bnruni
                </form>
                <div className='flex justify-center items-center'>
                  <button onClick={cadBtn} className="absolute bottom-20 font-Montserrat text-blue-600 dark:text-blue-500 hover:underline">Voltar</button>
                </div>
              </div>
            
            </div>
          }
      </div>
    </>
  )
}
