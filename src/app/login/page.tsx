import background from '@/assets/bg-1.jpg';
import Image from 'next/image';

const login = () =>  {
    return(
      <div className='w-screen items-center grid h-screen place-items-center bg-gradient-to-tl from-indigo-300'>
        <Image src={background} alt='bg' layout='fill' objectFit='cover'/>
      </div>
    );
  }
  
  export default login;