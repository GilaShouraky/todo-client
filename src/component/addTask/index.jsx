import styles from './style.module.css'

export default function AddTask() {
  const onClickAddTask = () => {
    e.preventDefault()
    alert("onClickAddTask")
  }

  return (
    <div>
      <input type="text" placeholder='AddTask' name='AddTask' className={styles.inputtext}/>
      <input type="date" name='date' className={styles.inputdate}/>
      <button onClick={onClickAddTask} className={styles.button}>Add</button>
    </div>
  )
}
