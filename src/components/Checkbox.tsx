import React, { FC } from 'react'
import styles from './Checkbox.module.scss'
import { optionValue } from '../data/options'

interface CheckboxProps extends optionValue {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: FC<CheckboxProps> = ({ id, option, onChange, checked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox__input}
        defaultChecked={checked}
        onChange={onChange}
        name={id}
      />
      <label htmlFor={id} className={styles.checkbox__label}>
        {option}
      </label>
    </div>
  )
}

export default Checkbox
