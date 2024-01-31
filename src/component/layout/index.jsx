import Button from '../button'
import AddTask from '../addTask'
import ListTask from '../listTask'
import styles from './style.module.css'
import { useState } from 'react'


export default function Layout() {
  const [add, setAdd] = useState("")

  return (
    <div className={styles.layout}>
      <div className={styles.title}>What do you have to do?</div>
      <ListTask add={add} />
      <Button />
      <div className={styles.addtask}>
        <AddTask add={add} setAdd={setAdd}/>
      </div>
    </div>
  )
}
