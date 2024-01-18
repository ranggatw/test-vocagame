'use client'

import Alert from '@/app/_components/Alert'
import InputText from '@/app/_components/InputText'
import { validation } from '@/app/utility/validation'
import { addUser } from '@/store/slice'
import { isEmpty } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [touch, setTouch] = useState(false)
  const [data, setData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const emptyErrors = isEmpty(errors)

  useEffect(() => {
    if (errors) {
      setErrors(validation(data))
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handliClick = () => {
    const { username, phone, password } = data
    if (emptyErrors) {
      setTouch(false)
      const userData = {
        username: username,
        phone: phone,
        password: password,
      }
      dispatch(addUser(userData))
      router.push('/login')
    } else setTouch(true)
  }

  return (
    <div className='m-0 p-0 h-screen flex flex-row'>
      <div className='flex-1 flex flex-col items-center justify-center bg-[#131167] text-white'>
        <div>{touch && !emptyErrors && <Alert errors={errors} />}</div>
        <div className='w-4/12'>
          <h1 className='text-6xl font-extrabold pb-4'>Daftarkan Akun</h1>
          <p className='font-normal mt-2 mb-5'>
            Daftar akun Anda dangan mengisi form dibawah
          </p>
          <div className='pt-4'>
            <InputText
              label='Nama Anda'
              type='text'
              placeholder='Ketik nama Anda disini'
              name='username'
              id='username'
              register={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Nomor Handphone'
              type='number'
              placeholder='Nomor handphone Anda'
              name='phone'
              id='phone'
              register={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Password'
              type='password'
              placeholder='Masukkan password Anda'
              name='password'
              id='password'
              register={true}
              onChange={(e) => handleChange(e)}
            />
            <InputText
              label='Konfirmasi Password'
              type='password'
              placeholder='Masukkan kembali password Anda'
              name='confirmPassword'
              id='confirmPassword'
              register={true}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='my-8'>
            <button
              className='rounded-full w-full py-4 px-4 bg-[#e5eafd] text-black font-extrabold '
              onClick={handliClick}
            >
              Daftar Sekarang
            </button>
          </div>
          <p className='text-center'>
            Sudah punya akun?{' '}
            <Link
              href='/login'
              className='font-extrabold'
            >
              Login Sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
