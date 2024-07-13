import Accordion from "./components/Accordion"

function App(){

     const items = [
        {
            id: '1',
            label: 'React oyrenme Kursu nece gedir ?',
            content: 'Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.'
        },
        {
            id: '2',
            label: 'React oyrenme Kursu nece gedir ?',
            content: 'Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.'
        },
        {
            id: '3',
            label: 'React oyrenme Kursu nece gedir ?',
            content: 'Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.Kurs diqqet verilmelidir.'
        }
     ]       

return  <Accordion items={items}></Accordion>
    
    
}

export default App