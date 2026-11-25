import { A } from './components/ChildA'
import { B } from './components/ChildB'
import { C } from './components/ChildC'
import './App.css'

function App() {

  // array of objects

  const employees = [
    { name: 'Tharun', age: 23, gender: 'male', role: 'Web Developer' },
    { name: 'Tejanath', age: 23, gender: 'male', role: 'Technical analyst' },
    { name: 'Rasool', age: 23, gender: 'male', role: 'Data Analyst' }
  ]

  return (
    <>
      <A employeeData = {employees} />
      <B employeeData = {employees} />
      <C employeeData = {employees} />
    </>
  )
}

export default App
