import styles from "../../styles/commands.module.css"

import { CommandProps } from "./DisplayCategory";

export const DisplayCategoryInfo: React.FC<CommandProps> = ({data, categoryName}) => {  

    const renderList = () => {
      return Object.keys(data[categoryName]).map((c) => (
        <div className={styles.cmdinfo} key={c}>
          <div className={styles.title}>
            <p>ak.{c}</p>
            <div className={styles.alias}>
              [No aliases]
            </div>
          </div>
          <div className={styles.description}>
            {Object.values(data[categoryName][c])}
          </div>
        </div>
        ))}
  
  
    return(
      <div className={styles.cmdinfobox}>
        {renderList()}
      </div>
    )
  }