import styles from "../../styles/Commands.module.css"

export interface CommandProps {
  data: object,
  setCategoryName?: React.Dispatch<string>,
  categoryName: string
}

export const DisplayCategory: React.FC<CommandProps> = ({ data, setCategoryName, categoryName }) => {

  const renderList = () => {
    return Object.keys(data).map((c) => (
      <div key={c} onClick={() => setCategoryName(c)} className={categoryName == c ? styles.cmdbuttonactive : styles.cmdbutton}>
        {c}
      </div>
    ))
  }


  return (
    <div className={styles.cmd}>
      {renderList()}
    </div>
  )
}