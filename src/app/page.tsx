"use client"
import background from '@/assets/bg-1.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { LoginUser } from '@/context/userContext';

export default function Home() {
  const router = useRouter();
  const [cadastro, setCadatro] = useState<number>(0);
  const [animate, setAnimate] = useState(false);

  const [emailLogin, setEmailLogin] = useState<string>("");
  const [passwordLogin, setPasswordLogin] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [passwordCad, setPasswordCad] = useState<string>("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  // Adicionando estados para controlar se os campos estão vazios
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const cadBtn = () => {
    setAnimate(false);
    setAnimate(true);
    if(cadastro === 0)
    {
      setCadatro(1);
      setEmailLogin("");
      setPasswordLogin("");
      setPasswordLogin("")
    }
    else
    {
      setCadatro(0);
      setEmail("");
      setPasswordCad("");
      setName("");
      setEmailValid(true);
    }
  };
  
  // Atualizando o estado do campo de email quando o valor muda
  const handleLoginEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmailLogin(value);
    setIsEmailEmpty(value === "");
  };
  
  // Atualizando o estado do campo de senha quando o valor muda
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPasswordLogin(value);
    setIsPasswordEmpty(value === "");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setEmail(value);
      setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  // Verificando se os campos estão vazios ao clicar no botão de login
  const handleLogin = () => {
    if (emailLogin === "") {
      setIsEmailEmpty(true);
    }
    
    if (passwordLogin === "") {
      setIsPasswordEmpty(true);
    }
    
    if (emailLogin !== "" && passwordLogin !== "") {
      router.push('/login');
    }
  }

  return (
      <LoginUser>
        <div className='w-screen items-center grid h-screen place-items-center bg-gradient-to-tl from-indigo-300'>
          <Image src={background} alt='bg' layout='fill' objectFit='cover'/>
            {cadastro === 0 &&
              <div className={`
                h-[30rem] md:h-[25rem] w-[25rem] border border-gray-700 rounded-lg
                backdrop-blur bg-white/30 ${animate && "animate-rotation-l"}`}>
              
                <div>
                  <div className='flex justify-center items-center mt-3 pb-[120px] md:pb-[80px]'>
                    <h2 className='text-3xl font-bold font-Montserrat text-gray-600'>Login</h2>
                  </div>
                  <form className='flex flex-col content-center items-center justify-center'>
                    <input className={`border-2 p-2 mb-3 rounded-lg ${isEmailEmpty ? "border-red-500" : "border-gray-500"}`}
                      type='text' placeholder=' Email' 
                      value={emailLogin}
                      onChange={handleLoginEmail}
                    />
                    <input className={`border-2 p-2 mb-3 rounded-lg ${isPasswordEmpty ? "border-red-500" : "border-gray-500"}`}
                      type='password' placeholder=' Senha'
                      value={passwordLogin}
                      onChange={handlePasswordChange}
                    />
                    <button type='button' onClick={handleLogin}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Entrar
                    </button>
                  </form>
                  <div className='flex justify-center items-center'>
                    <button onClick={cadBtn} className="absolute bottom-20 md:bottom-8 font-Montserrat text-gray-700 dark:text-blue-500 hover:underline">Cadastrar</button>
                  </div>
                </div>
              
              </div>
            }
            {cadastro === 1 &&
              <div className={`
                h-[30rem] md:h-[25rem] w-[25rem] border border-gray-700 rounded-lg
                backdrop-blur bg-white/30 ${animate && "animate-rotation-r"}`}>
              
                <div>
                  <div className='flex justify-center items-center mt-3 pb-[120px] md:pb-[80px]'>
                    <h2 className='text-3xl font-bold font-Montserrat text-gray-600'>Cadastro</h2>
                  </div>
                  <form className='flex flex-col content-center items-center justify-center'>
                    <input className={`border-2 p-2 mb-3 rounded-lg ${!emailValid ? "border-red-500" : "border-gray-500"}`}
                      type='text' placeholder=' Email' 
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <input className='border-2 p-2 mb-3 border-gray-500 rounded-lg'
                      type='password' placeholder=' Senha'
                      value={passwordCad}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPasswordCad(event.target.value)}
                    />
                    <input className='border-2 p-2 mb-3 border-gray-500 rounded-lg'
                      type='text' placeholder=' Nome'
                      value={name}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                    />

                  </form>
                  <div className='flex justify-center items-center'>
                    <button onClick={cadBtn} className="absolute bottom-20 md:bottom-8 font-Montserrat text-gray-700 dark:text-blue-500 hover:underline">Voltar</button>
                  </div>
                </div>
              
              </div>
            }
        </div>
      </LoginUser>

  );
}
