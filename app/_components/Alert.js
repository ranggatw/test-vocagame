const Alert = (props) => {
  const { errors } = props
  const { password, required } = errors
  return (
    <div
      className='flex items-center bg-red-100 border border-red-400 text-red-700 text-sm font-bold px-4 py-3'
      role='alert'
    >
      <p>{errors && (password || required)}</p>
    </div>
  )
}

export default Alert
