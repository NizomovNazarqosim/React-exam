import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {AuthContext} from '../../../context/AuthContext'
// rasmlar
import Atom from '../../../images/atom.jfif'
import Mind from '../../../images/mind.jfif'
import Ikki from '../../../images/ikki.png'
import Dunyo from '../../../images/dunyo.png'
import Header from '../../Pages/Header'
import Card from "./Card";
import './single-page.css'

function SinglePage(){

const params = useParams();

const [datas, setDatas] = useState({});
const token = useContext(AuthContext);

useEffect(() => {
    axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${params.id}`,{
    headers:{
        Authorization: token.token,
    }
   })
   .then(data => setDatas(data.data))
   .catch((err) => console.log(err))
},[params.id])
console.log(datas);
    return(
        <div>
            <Header/>
           <div className="author">
             <div className="author-left">
                <img className="author-image" src={'https://book-service-layer.herokuapp.com/'+datas.image} alt="" />
                <div className="author-detail">
                    <div className="detail-left">
                      <p>Tavallud sanasi</p>
                      <h3>{datas.date_of_birth}</h3>
                      <span>Toshkent</span>
                    </div>
                    <div className="detail-right">
                      <p>Vafot etgan sanasi</p>
                      <h3>{datas.date_of_death}</h3>
                      <span>Toshkent</span>
                    </div>
                </div>

             </div>
             <div className="author-right">
                 <h2 className="author-name">{datas.first_name +" " + datas.last_name}</h2>
                 <p className="author-bio">{datas.bio}</p>
                 {/* <p className="author-bios">Alisher tong otib, quyosh qiziganda uygʻonadi. Qarasa, poyonsiz sahro, atrofida hech kim yoʻq. Yolgʻiz otigina yovshan ildizlarini chimtib turibdi. Oʻn yoshli bola oʻzini qoʻlga oladi. Otini minib, zehn bilan yoʻlni topib ilgari yuradi. Kun qizib, chanqoqlik boshlanadi. Shu payt uzoqdan bir narsa qorayib koʻrinadi. U suv toʻla mesh ekan, Ollohga shukuronalar aytib, Alisher yoʻlini davom ettiradi. Uning ota-onasi manzilga yetgach, oʻgʻilllarini yoʻqligini biladilar va mulozimni shoshilinch orqaga qaytaradilar. Mulozim koʻp yurmay, Alisherga duch keladi. Alisherni, goʻyo u qayta tugʻilganday, quvonch bilan kutib oladilar.</p> */}
                 <div className="titles">
                 <p className="author-book">Asarlari</p>
                 <Link to="/kitoblar">Barchasini ko'rish </Link>
                 </div>
                 <div className="book-wrapper">
                    <Card img={Atom} title="Atmic Habits"/>
                    <Card img={Mind} title="Subconcious mind"/>
                    <Card img={Ikki} title="Dunyoni ishlari"/>
                    <Card img={Dunyo} title="Ikki eshik orasida"/>
                 </div>
             </div>
           </div>
        </div>
    )
}
export default SinglePage;