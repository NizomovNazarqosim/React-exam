import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {AuthContext} from '../../../context/AuthContext'
import { useContext } from "react";
import axios from "axios";
import Header from '../../Pages/Header'
import './single-book.css'

// kitoblar
import Atom from '../../../images/atom.jfif'
import Domestic from '../../../images/domestic.png'
import Dunyo from '../../../images/dunyo.png'
import Fact from '../../../images/fact.png'
import Ikki from '../../../images/ikki.png'
import Mind from '../../../images/mind.jfif'
import Number from '../../../images/number.png'
import Yulduzli from '../../../images/yulduzli.png'

function SingleBook(){
    const params = useParams();
    const [bookId, setBookId] = useState([]);
    const token = useContext(AuthContext);

console.log(params);
useEffect(() => {
    axios
   .get(`https://book-service-layer.herokuapp.com/book/bookId/${params.id}`,{
    headers:{
        Authorization: token.token,
    }
   })
   .then(res => setBookId(res.data))
   .catch((err) => console.log(err))
},[params.id])
console.log(bookId);

    return(
        <div className="single-book-wrapper">
        <Header/>
<div className="single-book">
   <div className="book-left">
       <img className="book-img" src={`https://book-service-layer.herokuapp.com/`+bookId.image} alt="book-picture" />
   </div>

   <div className="book-right">
      <h2 className="book-title">{bookId.title}</h2>
       <div className="book-details">
         <h3 className="book-page">Sahifalar soni :  
         <span>{bookId.page}</span></h3>
         <h3 className="book-page">Chop etilgan: <span>456</span></h3>
         <h3 className="book-page">Janri: <span>Tarixiy</span></h3>
         <h3 className="book-page">Nashriyot:       <span>Nihol nashriyoti</span></h3>
       </div>
       <p className="book-desc">{bookId.description}</p>
       <p className="book-desc">Navoiy musulmon Sharqining, deyarli barcha janrlarida o‘z qalamini sinab ko‘radi va o‘z ovozi, o‘z uslubi borligini ko‘rsata oladi. Sharq adabiyotida “Layli va Majnun” mavzusida 120 dan ziyod doston yaratilgan. Navoiy ham shaxsiy yondashuvi ila ushbu mavzuda doston yozadi. Dostonda Layli va Majnun o‘rtasidagi sevgi bayon qilinadi. O‘z ifodasida Navoiy odamiylik va so‘fiylik sevgisini sharhlashga harakat qilgan. O‘zining so‘fiylik qarashlarini Navoiy, shuningdek, “Farxod va Shirin”, “Hayrat ul-Abror” dostonlarida ham ifodalagan. Uning dostonlarida so‘fiylik mavzusi umumfalsafiy darajaga ko‘tarilgan.
       Dunyo bo‘yicha kitoblarning asosiy qismini 45 yoshdan oshganlar sotib olishar ekan. Afsuski, zamonaviy yoshlarimiz bu borada ancha orqadalar. Biz hamma narsani yaxshilikka yo‘yib o‘rganganmiz, bu holatni ham ular elektron kitob o‘qiydilar, shu­ning uchun kamdan-kam hollardagina kitob sotib oladilar, deb izohlamoqchimiz. Aslini olganda, kitobni qo‘lingizda ushlab, salmog‘ini, taftini his qilib o‘qiganga nima yetsin, aziz yoshlar.</p>
   </div>
</div>

<div className="book-link">
    <h3 className="like">Sizga yoqishi mumkin</h3>
    <Link  to="/kitoblar">Barchasini ko'rish</Link>
</div>

<ul className="example-list">

    <li className=" example-item">
        <img src={Domestic} alt="kitoblar" />
        <h3>To Kill a Mockingbird</h3>
    </li>
    <li className="first example-item">
        <img src={Dunyo} alt="kitoblar" />
        <h3>Ikki eshik orasi</h3>
    </li>
    <li className="first example-item">
        <img src={Fact} alt="kitoblar" />
        <h3>Candide</h3>
    </li>
    <li className="first example-item">
        <img src={Ikki} alt="kitoblar" />
        <h3>Dunyoning ishlari</h3>
    </li>
    <li className="first example-item">
        <img src={Mind} alt="kitoblar" />
        <h3>Subconscious  Mind</h3>
    </li>
    <li className="first example-item">
        <img src={Number} alt="kitoblar" />
        <h3>The Little Prince</h3>
    </li>
    <li className="first example-item">
        <img src={Yulduzli} alt="kitoblar" />
        <h3>Yulduzli tunlar</h3>
    </li>
    <li className="first example-item">
        <img src={Atom} alt="kitoblar" />
        <h3>Atomic habits</h3>
    </li>
    <li className="first example-item">
        <img src={Number} alt="kitoblar" />
        <h3>The Little Prince</h3>
    </li>
    <li className="first example-item">
        <img src={Yulduzli} alt="kitoblar" />
        <h3>Yulduzli tunlar</h3>
    </li>
    <li className="first example-item">
        <img src={Atom} alt="kitoblar" />
        <h3>Atomic habits</h3>
    </li>
</ul>
        </div>
    )
}
export default SingleBook;