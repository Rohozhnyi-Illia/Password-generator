const checkPasswordStrength = (password: string): string => {
  let strength = 0

  if (password.length >= 6) strength++
  if (password.length >= 10) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^a-zA-Z0-9]/.test(password)) strength++

  if (strength <= 2) return 'LOW'
  if (strength <= 4) return 'MEDIUM'
  if (strength === 5) return 'STRONG'
  return 'VERY STRONG'
}

export default checkPasswordStrength
