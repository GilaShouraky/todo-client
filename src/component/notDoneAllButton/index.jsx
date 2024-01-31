import styles from './style.module.css'

export default function NotDoneAllButton() {
  const onClickNotDoneAll = () => {
    e.preventDefault()
    alert("onClickNotDoneAll")
  }
  return (
    <div>
      <button onClick={onClickNotDoneAll} className={styles.button}>Not Done All</button>
    </div>
  )
}
