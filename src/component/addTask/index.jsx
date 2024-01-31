import axios from 'axios'
import styles from './style.module.css'
import { useState } from 'react'

export default function AddTask({add, setAdd}) {


  const onClickAddTask = (e) => {
    e.preventDefault()
    axios.post('http://localhost:6555/listTask', {
      "userId": "65b11113d31d6deba9e09ee3",
      "nameTask": e.target.elements.AddTask.value,
      "dateFinish": e.target.elements.date.value
    })
      .then(res => setAdd(res.data))
    // alert("onClickAddTask")
  }

  return (
    <form onSubmit={onClickAddTask}>
      <input type="text" placeholder='AddTask' name='AddTask' className={styles.inputtext} />
      <input type="date" name='date' className={styles.inputdate} />
      <button className={styles.button}>Add</button>
    </form>
  )
}
