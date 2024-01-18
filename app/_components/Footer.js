import Image from 'next/image'
const Footer = () => {
  return (
    <div className='mt-12'>
      <footer class='bg-[#131167]'>
        <div class='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div class='md:flex md:justify-between'>
            <div class='mb-6 md:mb-0'>
              <Image
                src='/logo.png'
                width={100}
                height={100}
                alt='logo'
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
