const API_URL = 'http://localhost:3000/worked'

const getAll = ()=>{
return fetch(API_URL)
    .then(res => res.json())
    .then(data => { return data })
}
export default {getAll}