export const validation = (data) => {
    let errors = {}

    if (Object.values(data).some((x) => x === null || x === '')) {
      errors.required = 'Fill all field'
    } else if (data.password !== data.confirmPassword) {
      errors.password = 'Different password and confirm password'
    }
    return errors
}
