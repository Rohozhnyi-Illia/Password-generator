import React, { FC } from 'react'
import styles from './Checkbox.module.scss'
import { optionValue } from '../data/options'

const Checkbox: FC<optionValue & { checked?: boolean; onChange?: () => void }> = ({
  id,
  option,
  onChange,
  checked,
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        className={styles.checkbox__input}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.checkbox__label}>
        {option}
      </label>
    </div>
  )
}

export default Checkbox
