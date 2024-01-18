import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { removeCookies } from '../utility/cookies'
const LogoutButton = () => {
  const router = useRouter()
  const handleClick = () => {
    removeCookies('user')
    router.push('/login')
  }
  return (
    <div className='flex flex-row'>
      <Image
        src='/exit.svg'
        width={20}
        height={20}
        alt='exit'
      />
      <button
        onClick={() => handleClick()}
        className='text-red-500 font-normal mx-2 flex flex-col items-center justify-center'
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
