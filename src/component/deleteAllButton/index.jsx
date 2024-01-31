import styles from './style.module.css'

export default function DeleteAllButton() {
  const onClickDeleteAll = () => {
    e.preventDefault()
    alert("onClickDeleteAll")
  }

  return (
    <div>
      <button onClick={onClickDeleteAll} className={styles.button}>Delete All</button>
    </div>
  )
}
