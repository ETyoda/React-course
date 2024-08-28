import styles from './Heading.module.css'
 
function Heading({label}){
    return <div>
            <h1 className={$`{styles["title"]}' bg-green'`}>Hello Everyone{label}</h1>
            </div>
    
    
}
export default Heading