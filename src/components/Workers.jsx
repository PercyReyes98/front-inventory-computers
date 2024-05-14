import { useWorkers } from "../hooks/useWorker.jsx"
function Workers(){
    const {workers} = useWorkers()
    console.log(workers)
  
return (
    <>
        <table className='table'>
        <thead>
        <tr>
          <th><abbr>DNI</abbr></th>
          <th>Nombre</th>
          <th><abbr>Apellido</abbr></th>
          <th><abbr>Cargo</abbr></th>
          <th><abbr>Agencia</abbr></th>
        </tr>
        </thead>
        <tbody>
        { workers.length >0 && workers ? workers.map((item)=>(
        <>
        <tr>
          <th key={item._id}>{item.dni}</th>
          <td >{item.name}</td>
          <td >{item.lastName}</td>
          <td >{item.role}</td>
          <td >{item.agency}</td>
        </tr>
        </>
      )): <p>No hay trabajadores</p>}
      </tbody>
      </table>
    </>
)
} 
export default Workers