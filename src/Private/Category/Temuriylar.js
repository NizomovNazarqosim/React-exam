import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import './jadid.css'
import SinglePage from './SinglePage/SinglePage'

function Temuriylar(){
    const [author, setAuthor] = useState([])
   useEffect(() => {
    axios.get('https://book-service-layer.herokuapp.com/author/genreId/1')
        .then(res => setAuthor(res))
        .catch((err) => console.log(err))
   },[])
    return(
        <div>
            <h3 className='category-name'>Temuriylar</h3>
            {
                author.data && (<ul className="j-list">
                { author.data.map((e) => (
                    <li key={e.id} className="j-item">
                     <Link to={`/singlepage/:${e.id}`}>
                       <div className="detail">
                        <img src={"https://book-service-layer.herokuapp.com/"+e.image} alt={e.id} />
                        <h3>{e.first_name+"  "+e.last_name}</h3>
                        <p>{e.date_of_birth +"-"+ e.date_of_death}</p>
                       </div>
                     </Link>
                   </li>
                 ))}
               
            </ul>)}

            <Routes>
            <Route path="/singlepage/:id" element={<SinglePage/>}/>
            </Routes>
        </div>
    )
}
export default Temuriylar;