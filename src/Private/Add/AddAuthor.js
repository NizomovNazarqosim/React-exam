import './add.css'
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function AddAuthor(){
    // give a name for each ref
    const elFirstName = useRef("")
    const  elLastName = useRef("")
    const  elBirth = useRef("")
    const elDeath = useRef("")
    const elCountry = useRef("")
    const elGenreId = useRef("")
    const elBio = useRef("")
    const elImage= useRef("")



    const token = useContext(AuthContext);
    


    const handleFormSubmit = (evt) =>{
         evt.preventDefault();
         const formData = new FormData();

         formData.append('first_name', elFirstName.current.value);
         formData.append('last_name', elLastName.current.value);
         formData.append('date_of_birth', elBirth.current.value);
         formData.append('date_of_death', elDeath.current.value);
         formData.append('country', elCountry.current.value);
         formData.append('genre_id', elGenreId.current.value);
         formData.append('bio', elBio.current.value);
         formData.append('image', elImage.current.files[0]);

     axios.post('https://book-service-layer.herokuapp.com/author', formData,{
                headers: {
                    Authorization: token.token
                }
            }).then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return(
        <>
          <div className='add'>
              
          <form onSubmit={handleFormSubmit} className='add-form'>
                       
                       
                       <h2>Add Author</h2>
                   <input ref={elFirstName} className='add-input' type="text" placeholder='first_name'/>
                   <input ref={elLastName} className='add-input' type="text" placeholder='last_name'/>
                   <input ref={elBirth} className='add-input' type="text" placeholder='date_of_birth'/>
                   <input ref={elDeath} className='add-input' type="text" placeholder='date_of_death'/>
                   <input ref={elCountry} className='add-input' type="text" placeholder='country'/>
                   <input ref={elGenreId} className='add-input' type="text" placeholder='genre id'/>
                   <input ref={elBio} className='add-bio' type="text" placeholder='bio' />
                   <input ref={elImage} className='input-img' type="file" />
                  <button className='add-btn' type='submit'>Create</button>
               </form>
          </div>
        </>
    )
}
export default AddAuthor;