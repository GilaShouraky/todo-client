import { useEffect } from 'react'
import styles from './style.module.css'
import axios from 'axios'

export default function ListTask() {
  useEffect(() => {
    axios.get('http://localhost:6555/listTask').then(res => console.log(res))
  }, [])

  const onClickDeleteTask = (e) => {
    e.preventDefault()
    alert("onClickDeleteTask")
  }

  return (
    <form className={styles.fromlist}>
      <label className={styles.labellist}>
        <input type="checkbox" name="chekbox" className={styles.chekboxlist} />
        <div className={styles.namelist}>{"name"}</div>
        <div className={styles.timeleftlist}>{"time left"}</div>
      </label>
      <button onClick={onClickDeleteTask} className={styles.button}>Delete</button>
    </form>
  )
}
