import Button from '../button'
import AddTask from '../addTask'
import ListTask from '../listTask'
import styles from './style.module.css'


export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>What do you have to do?</div>
      <ListTask />
      <Button />
      <div className={styles.addtask}>
        <AddTask />
      </div>
    </div>
  )
}
