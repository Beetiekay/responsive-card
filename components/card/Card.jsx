import "../card/Card.css";
import image1 from "../card/assets/v1.png";
import image2 from "../card/assets/v9.png";
import image3 from "../card/assets/v10.png";


const Card = () =>{
    return(
     <>
     <div className="card-main-container">
     <div className="container">
        <div className="card">
            <div className="imgBx">
                <a href="#">
                <img src={image1}/>
                </a>
                <h2>Baked Feta with shrimp</h2>
                <p><br/>Cream.tangy.cheesy and packed with extra herbs and perpectly cooked shrimp this version of baked feta pastais truly nextlevel and totally worth the hype.</p>
               </div>
        </div>

         <div className="card">
                <div className="imgBx">
                <a href="#">
                <img src={image2}/>
                </a>
                <h2>Baked Feta with shrimp</h2>
                <p><br/>Cream.tangy.cheesy and packed with extra herbs and perpectly cooked shrimp this version of baked  feta pastais truly nextlevel and totally worth the hype.</p>
                </div>
        </div>

        <div className="card">
                <div className="imgBx">
                <a href="#">
                <img src={image3}/>
                </a>
                <h2>Baked Feta with shrimp</h2>
                <p><br/>Cream.tangy.cheesy and packed with extra herbs and perpectly cooked shrimp this version of baked feta pastais truly nextlevel and totally worth the hype.</p>
            </div>
        </div>
     </div>
     </div>
     </>
    )
};

export default Card;