import { useEffect, useState } from 'react'
import styles from './style.module.css'
import axios from 'axios'

export default function ListTask() {

  const [task, setTask] = useState("")

  useEffect(() => {
    axios.get('http://localhost:6555/listTask')
      .then(res => { setTask(res.data); console.log(task)})
  }, [])

  const onClickDeleteTask = (e) => {
    e.preventDefault()
    alert("onClickDeleteTask")
  }

  return (
    <div>
      {task && task.map(t => {
        return <form key={t.id} className={styles.fromlist}>
          <label className={styles.labellist}>
            <input type="checkbox" name="chekbox" className={styles.chekboxlist} />
            <div className={styles.namelist}>{t.nameTask}</div>
            <div className={styles.timeleftlist}>{"time left"}</div>
          </label>
          <button onClick={onClickDeleteTask} className={styles.button}>Delete</button>
        </form>
      }
      )}
    </div>
  )
}
