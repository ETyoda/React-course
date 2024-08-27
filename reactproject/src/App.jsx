 
import './App.css'
import Button from './component/Button/Button'
import Heading from './component/Heading/Heading'
function App() {

  return (
<div>
  <Heading
  label=" know"/>
  <Button/>
   
  
</div>
  )
}
function Input(){
  return(
    
      <input type="text"placeholder='what is your faviorate food'></input>
     
  )
}
export default App
