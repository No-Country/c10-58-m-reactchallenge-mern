export function validateForm (userDataForm) {
  const { names, lastName, dni, email, password, confirmPassword, terms } = userDataForm
  if (!names || !lastName || !dni || !email || !password || !confirmPassword || !terms) {
    throw new Error('Todos los campos deben estar completos')
  }
  if (names.length < 2 || names.length > 20) {
    throw new Error('El nombre debe contener mas de un caracter y menos de 20')
  }
  if (names === '') { throw new Error('El campo nombre no puede estar vacío') }
  if (lastName.length < 2 || lastName.length > 20) {
    throw new Error('El apellido debe contener mas de un caracter y menos de 20')
  }
  if (lastName === '') { throw new Error('El campo apellido no puede estar vacío') }
  if (dni === '') throw new Error('El campo DNI no puede estar vacío')
  if (email === '') throw new Error('El campo email no puede estar vacío')
  const pattern = /^(?=.{1,256})(?=.{1,64}@)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*@[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,}$/
  if (!pattern.test(email)) throw new Error('Ingresa un email válido')
  if (password !== confirmPassword) throw new Error('Las contraseñas deben coincidir')
  if (password === '') { throw new Error('El campo contraseña no puede estar vacío') }
  if (!terms) throw new Error('Debes aceptar los términos y condiciones')
}
