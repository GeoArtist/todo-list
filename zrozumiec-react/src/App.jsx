import { PersonInfo } from "./components/PersonInfo"
import dogImg from "./assets/dog.jpg"

function App() {
  const jan = {
    name: 'Jan',
    lastName:'Kowalski',
    mail:'j.kow@gmail.com',
    tel: '123456789' 
  }
  const janina = {
    name: 'Janina',
    lastName:'Kowalska',
    mail:'janina.kow@gmail.com',
    tel: '987654321' 
  }
  const karol = {
    name: 'Karol',
    lastName:'Kowalska',
    mail:'karol.kow@gmail.com',
  }
  return (
        <>
          <PersonInfo person={jan}/>
          <br/>
          <PersonInfo person={janina}/>
          <br/>
          <PersonInfo person={karol}/>
          <img src={dogImg} alt="dog" />
        </>

  )
  
}

export default App
