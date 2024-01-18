'use client'
import Footer from '@/app/_components/Footer'
import InputText from '@/app/_components/InputText'
import LogoutButton from '@/app/_components/LogoutButton'
import NavBar from '@/app/_components/NavBar'
import EditButton from '@/app/_components/EditButton'
import { getCookies } from '@/app/utility/cookies'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Profile = () => {
  const router = useRouter()
  const userData = getCookies('user')
  if (!userData) router.push('/pages/login')

  return (
    <>
      <NavBar />
      <div className='h-full flex flex-col items-center'>
        <div className='w-5/6'>
          <div className='bg-[#131167] flex flex-col items-center justify-center mt-5 p-5 rounded-md'>
            <h1 className='text-6xl font-extrabold text-white'>LOREM</h1>
            <p className='font-normal text-white text-center w-96'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              culpa provident consequatur et sint! Expedita, dolorem iusto
              inventore error nostrum porro aut temporibus consequatur harum.
              Ipsum deleniti ut qui sunt.
            </p>
          </div>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex flex-row'>
              <Image
                src='/user.png'
                width={50}
                height={50}
                alt='user'
              />
              <span className='font-bold mx-2 flex flex-col items-center justify-center'>
                {userData && userData.username}
              </span>
            </div>
            <div class='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
              <EditButton />
            </div>
          </div>
          <div className='flex flex-row mt-10 ml-5 '>
            <div className='border-r-2 border-gray-200 w-2/12 mr-5 '>
              <div className='flex flex-col justify-between space-y-[30rem] mb-10'>
                <div className='flex flex-row'>
                  <Image
                    src='/user.png'
                    width={30}
                    height={30}
                    alt='logo'
                  />
                  <span className='font-normal mx-2 flex flex-col items-center justify-center'>
                    Profile
                  </span>
                </div>
                <div className='border-t-2 border-gray-300 pt-5 w-5/6'>
                  <LogoutButton />
                </div>
              </div>
            </div>
            <div className='flex-1 ml-5 px-5 py-5 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] rounded-md h-full'>
              <div className='flex flex-row border-b-2 border-gray-200 py-3 mb-3'>
                <Image
                  src='/edit.svg'
                  width={20}
                  height={20}
                  alt='edit'
                />
                <span className='text-xl font-bold ml-3'>Edit Profile</span>
              </div>
              <InputText
                label='Nama'
                type='text'
                placeholder='Ketik nama Anda'
                name='username'
                id='username'
                value={userData && userData.username}
              />
              <InputText
                label='No Handphone'
                type='number'
                placeholder='Ketik nomor handphone Anda'
                name='phone'
                id='phone'
                value={userData && userData.phone}
              />
              <InputText
                label='Old Password'
                type='password'
                placeholder='Ketik password lama Anda'
                name='password'
                id='password'
              />
              <InputText
                label='New Password'
                type='password'
                placeholder='Ketik password baru Anda'
                name='newPassword'
                id='newPassword'
              />
              <EditButton />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
