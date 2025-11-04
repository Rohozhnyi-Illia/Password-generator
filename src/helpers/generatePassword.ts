interface GeneratePasswordOptions {
  lowercase: boolean
  uppercase: boolean
  numbers: boolean
  symbols: boolean
  length: number
}

const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseCharacters = lowercaseCharacters.toUpperCase()
const numberCharacters = '0123456789'
const symbolCharacters = '!@#$%^&*'

const generatePassword = ({
  lowercase,
  uppercase,
  numbers,
  symbols,
  length,
}: GeneratePasswordOptions) => {
  let aviableCharacters = ''
  let password: string = ''

  if (lowercase) aviableCharacters += lowercaseCharacters
  if (uppercase) aviableCharacters += uppercaseCharacters
  if (numbers) aviableCharacters += numberCharacters
  if (symbols) aviableCharacters += symbolCharacters

  if (!aviableCharacters) return ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * aviableCharacters.length)
    password += aviableCharacters[randomIndex]
  }

  return password
}

export default generatePassword
