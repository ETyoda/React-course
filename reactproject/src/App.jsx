 
import './App.css'
import Button from "./component/Button"
function App() {

  return (
<div>
  <Button/>
  <Input />
</div>
  )
}
function Input(){
  return(
    
      <input type="text"placeholder='what is your faviorate food'></input>
     
  )
}
export default App
