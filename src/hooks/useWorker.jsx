import { useEffect, useState } from "react"
import WorkerAPI from '../apis/worker.js'

export function useWorkers(){
    const [workers, setWorkers] = useState([])
    useEffect(()=>{
        WorkerAPI.getAll()
        .then(response=>{
            setWorkers(response)
        })
    },[])
    return {
        workers, 
        setWorkers
    }
}