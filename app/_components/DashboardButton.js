import Link from 'next/link'
const DashboardButton = () => {
  return (
    <div className='flex-1 flex items-center justify-center bg-[#131167] h-screen'>
      <button className='rounded-full py-2 px-10 w-96 mr-10 bg-[#e5e7fd] text-[#20184e] font-bold'>
        <Link href='/pages/login'>Login</Link>
      </button>
      <button className='rounded-full py-2 px-10 w-96 ml-10 bg-[#e5e7fd] text-[#20184e] font-bold'>
        <Link href='/pages/register'>Register</Link>
      </button>
    </div>
  )
}

export default DashboardButton
