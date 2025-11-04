import React, { FC, useState } from 'react'
import styles from './styles/App.module.scss'
import copyImg from './assets/images/fa-regular_copy.png'
import Checkbox from './components/Checkbox'
import options from './data/options'
import { optionValue } from './data/options'
import generatePassword from './helpers/generatePassword'
import checkPasswordStrength from './helpers/checkPasswordStrength'

interface checkboxStates {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

const App: FC = () => {
  const [password, setPassword] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<string>('')
  const [length, setLength] = useState<number>(8)
  const [copied, setCopied] = useState<boolean>(false)
  const [checkboxValues, setCheckboxValues] = useState<checkboxStates>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  })

  const copyPasswordHandler = () => {
    if (!password) return

    navigator.clipboard
      .writeText(password)
      .then(() => setCopied(true))
      .catch(() => setCopied(false))

    setTimeout(() => setCopied(false), 2000)
  }

  const newPassword = () => {
    let newPassword = generatePassword({
      length,
      uppercase: checkboxValues.uppercase,
      lowercase: checkboxValues.lowercase,
      numbers: checkboxValues.numbers,
      symbols: checkboxValues.symbols,
    })

    setPassword(newPassword)
    setPasswordStrength(checkPasswordStrength(newPassword))
  }

  const lengthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value))
  }

  const checkboxValuesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setCheckboxValues((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const minNumber = 6
  const maxNumber = 12
  const progress = ((length - minNumber) / (maxNumber - minNumber)) * 100

  const getStrengthLevel = (): number => {
    switch (passwordStrength) {
      case 'LOW':
        return 1
      case 'MEDIUM':
        return 2
      case 'STRONG':
        return 3
      case 'VERY STRONG':
        return 4
      default:
        return 0
    }
  }

  const getStrengthColor = (): string => {
    switch (passwordStrength) {
      case 'LOW':
        return styles['App__strengthScale--red']
      case 'MEDIUM':
        return styles['App__strengthScale--orange']
      case 'STRONG':
        return styles['App__strengthScale--yellow']
      case 'VERY STRONG':
        return styles['App__strengthScale--green']
      default:
        return ''
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.App__wrapper}>
        <h1 className={styles.App__title}>Password Generator</h1>

        <div className={styles.App__generatorContianer}>
          <div className={styles.App__passwordDisplay}>
            <p className={styles.App__password}>{password}</p>

            <div className={styles.App__copy}>
              <p className={`${styles.App__copyText} ${copied ? styles.success : ''}`}>
                COPIED
              </p>

              <button
                type="button"
                className={styles.App__copyButton}
                onClick={copyPasswordHandler}
              >
                <img src={copyImg} alt="Copy" />
              </button>
            </div>
          </div>

          <div className={styles.App__generator}>
            <div className={styles.App__length}>
              <div className={styles.App__lengthInfo}>
                <p className={styles.App__lengthTitle}>Character Length</p>

                <label className={styles.App__lengthValue} htmlFor="length">
                  {length}
                </label>
              </div>

              <input
                type="range"
                className={styles.App__lengthInput}
                id="length"
                min={minNumber}
                max={maxNumber}
                step={1}
                value={length}
                onChange={lengthHandler}
                style={{
                  background: `linear-gradient(to right, #a4ffaf ${progress}%, #18171f ${progress}%)`,
                }}
              />
            </div>

            <div className={styles.App__options}>
              {options.map((option: optionValue) => (
                <Checkbox
                  id={option.id}
                  option={option.option}
                  key={option.id}
                  onChange={checkboxValuesHandler}
                  checked={checkboxValues[option.id as keyof checkboxStates]}
                />
              ))}
            </div>

            <div className={styles.App__strength}>
              <p className={styles.App__strengthText}>STRENGTH</p>

              <div className={styles.App__strengthContainer}>
                <p className={styles.App__strengthValue}>{password ? passwordStrength : ''}</p>

                <div className={styles.App__strengthScales}>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`${styles.App__strengthScale} ${
                        password && i < getStrengthLevel() ? getStrengthColor() : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button className={styles.App__button} onClick={newPassword}>
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
