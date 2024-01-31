import styles from './style.module.css'

export default function DoneAllButton() {
  const onClickDoneAl = () => {
    e.preventDefault()
    alert("onClickDoneAl")
  }

  return (
    <div>
      <button onClick={onClickDoneAl} className={styles.button}>Done All</button>
    </div>
  )
}
