export interface optionValue {
  id: string
  option: string
}

const options: optionValue[] = [
  { id: 'uppercase', option: 'Include Uppercase Letters' },
  { id: 'lowercase', option: 'Include Lowercase Letters' },
  { id: 'numbers', option: 'Include Numbers' },
  { id: 'symbols', option: 'Include Symbols' },
]

export default options
