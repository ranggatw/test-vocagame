import Image from 'next/image'
const NavBar = () => {
  return (
    <div className='h-6/12'>
      <nav class=' border-gray-200 bg-[#131167]'>
        <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Image
            src='/logo.png'
            width={50}
            height={50}
            alt='logo'
          />
          <div class='flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <Image
              src='/user.png'
              width={50}
              height={50}
              alt='logo'
            />
          </div>
        </div>
        <div className='pb-5'>
          <div className='bg-gray-500 h-0.5' />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
