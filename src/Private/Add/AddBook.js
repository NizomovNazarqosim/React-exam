import './add.css'
import { useContext, useRef } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function AddBook(){

    const elTitle = useRef('')
    const elPage = useRef('')
    const elYear = useRef('')
    const elPrice = useRef('')
    const elGenreId = useRef('')
    const elAuthor = useRef('')
    const elBio = useRef('')
    const elImage = useRef('')

    const token = useContext(AuthContext)

    // function on submit
    
    const handleAddBook = (evt) =>{
        evt.preventDefault();
        const formDatas = new FormData();

        formDatas.append("title", elTitle.current.value);
        formDatas.append("page", elPage.current.value);
        formDatas.append("year", elYear.current.value);
        formDatas.append("price", elPrice.current.value);
        formDatas.append("genre_id", elGenreId.current.value);
        formDatas.append("author_id", elAuthor.current.value);
        formDatas.append("description", elBio.current.value);
        formDatas.append("image", elImage.current.files[0]);



           axios.post('https://book-service-layer.herokuapp.com/book', formDatas,{
               headers: {
                   Authorization: token.token
               }
           }).then(res => console.log(res))
           .catch(err => console.log(err))
   }

    return(
        <>
        <div className="add">
        <h2>Add Book</h2>
                    <form onSubmit={handleAddBook} className='add-form'>     
                        <input ref={elTitle} className='add-input' type="text" placeholder='Title'/>
                        <input ref={elPage} className='add-input' type="text" placeholder='Pages'/>
                        <input ref={elYear} className='add-input' type="text" placeholder='Year'/>
                        <input ref={elPrice} className='add-input' type="text" placeholder='Price'/>
                        <input ref={elGenreId} className='add-input' type="text" placeholder='genreId'/>
                        <input ref={elAuthor} className='add-input' type="text" placeholder='Author'/>
                        <input ref={elBio} className='add-bio' type="text" placeholder='Description' />
                        <input ref={elImage} className='input-img' type="file" />
                        <button className='add-btn' type='submit'>Create</button>
                    </form>
               
        </div>
        </>
    )
}
export default AddBook;