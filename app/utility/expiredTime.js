export const expiredTime = () => {
  const expired = new Date(new Date().getTime() + 100 * 60 * 1000)
  // const expired = new Date(new Date().getTime() + 1 * 60 * 1000)
  return expired
}
