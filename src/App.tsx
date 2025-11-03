import React, { FC, useState } from 'react'
import styles from './styles/App.module.scss'
import copyImg from './assets/images/fa-regular_copy.png'
import Checkbox from './components/Checkbox'
import options from './data/options'
import { optionValue } from './data/options'

const App: FC = () => {
  const [length, setLength] = useState<number>(8)

  const lengthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(Number(e.target.value))
  }

  const minNumber = 0
  const maxNumber = 10
  const progress = ((length - minNumber) / (maxNumber - minNumber)) * 100

  return (
    <div className={styles.App}>
      <div className={styles.App__wrapper}>
        <h1 className={styles.App__title}>Password Generator</h1>

        <div className={styles.App__generatorContianer}>
          <div className={styles.App__passwordDisplay}>
            <p className={styles.App__password}>P4$5W0rD!</p>

            <button type="button" className={styles.App__copy}>
              <img src={copyImg} alt="Copy" />
            </button>
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
                <Checkbox id={option.id} option={option.option} />
              ))}
            </div>

            <div className={styles.App__strength}>
              <p className={styles.App__strengthText}>STRENGTH</p>

              <div className={styles.App__strengthContainer}>
                <p className={styles.App__strengthValue}>Medium</p>

                <div className={styles.App__strengthScales}>
                  <div className={styles.App__strengthScale}></div>
                  <div className={styles.App__strengthScale}></div>
                  <div className={styles.App__strengthScale}></div>
                  <div className={styles.App__strengthScale}></div>
                </div>
              </div>
            </div>

            <button className={styles.App__button}>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
