import styles from './style.module.css'
import DeleteAllButton from '../deleteAllButton'
import DoneAllButton from '../doneAllButton'
import NotDoneAllButton from '../notDoneAllButton'

export default function Button() {
  return (
    <div className={styles.allbutton}>
      <DeleteAllButton/>
      <DoneAllButton/>
      <NotDoneAllButton/>
    </div>
  )
}
