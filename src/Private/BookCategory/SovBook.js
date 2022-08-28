import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './category.css'


function SovBook(){

    const [bookId, setBookId] = useState([]);
    useEffect(() => {
        axios
          .get('https://book-service-layer.herokuapp.com/book/genreId/3')
          .then(res => setBookId(res))
          .catch(err => console.log(err))
    },[])

    return(
        <>
                <h2 className="cat-name" style={{ textAlign:"center"}}>Sovet davriga oid kitoblar</h2>

            {
                bookId.data && (<ul className="j-list">
                { bookId.data.map((e) => (
                    <li key={e.id} className="j-item">
                     <Link to={'/singlebook/'+ e.id}>
                       <div className="detail">
                        <img src={"https://book-service-layer.herokuapp.com/"+e.image} alt={e.id} />
                        <h3>{e.title}</h3>
                        <p>{e.year}</p>
                       </div>
                     </Link>
                   </li>
                 ))}
               
            </ul>)}
        </>
    )
}
export default SovBook;