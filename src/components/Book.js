import './Book.css'
import { initializeApp } from "firebase/app";
import firebase from '../config/firebase';
import { Button } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import room1 from '../images/room1.png'
import room2 from '../images/room2.png'
import room3 from '../images/room3.png'
import room4 from '../images/room4.png'
import room5 from '../images/room5.png'



const Book = () => {
    let Hotels = [
        {
            name: "Coference room 1",
            price: "100",
            image: room1, },
        {
            name: "Coference room 2",
            price: "200",
            image: room2,
        },
        {
            name: "Coference room 3",
            price: "300",
            image: room3,
        },
        {
            name: "Coference room 4",
            price: "400",
            image:room4,
        },
        {
            name: "Coference room 5",
            price: "500",
            image: room5,
        },
    ]
    
    // //console.log(Hotels[0].price);
    // const bookHotel1 = (event) => {
    //     console.log(event);
    //     const imageTarget = document.querySelector("#targetImage");
    //     const nameTarget = document.querySelector("#targetName");
    //     const priceTarget = document.querySelector("#targetPrice");
    //     const cards = document.querySelector(".cards_box");
    //     const request = document.querySelector(".request");

    //     imageTarget.src = Hotels[0].image;
    //     nameTarget.innerHTML = Hotels[0].name;
    //     priceTarget.innerHTML = '$' + Hotels[0].price;
    //     cards.style.display = "none";
    //     request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = firebase.firestore();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[0].image,
    //         HotelName: Hotels[0].name,
    //         HotelPrice: '$' + Hotels[0].price,
    //         });
    //     }

    // }
    // const bookHotel2 = (event) => {
    //     console.log(event);
    //     const imageTarget = document.querySelector("#targetImage");
    //     const nameTarget = document.querySelector("#targetName");
    //     const priceTarget = document.querySelector("#targetPrice");
    //     const cards = document.querySelector(".cards_box");
    //     const request = document.querySelector(".request");

    //     imageTarget.src = Hotels[1].image;
    //     nameTarget.innerHTML = Hotels[1].name;
    //     priceTarget.innerHTML = '$' + Hotels[1].price;
    //     cards.style.display = "none";
    //     request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = getDatabase();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[1].image,
    //         HotelName: Hotels[1].name,
    //         HotelPrice: '$' + Hotels[1].price,
    //         });
    //     }
    // }
    // const bookHotel3 = (event) => {
    //     console.log(event);
    //     const imageTarget = document.querySelector("#targetImage");
    //     const nameTarget = document.querySelector("#targetName");
    //     const priceTarget = document.querySelector("#targetPrice");
    //     const cards = document.querySelector(".cards_box");
    //     const request = document.querySelector(".request");

    //     imageTarget.src = Hotels[2].image;
    //     nameTarget.innerHTML = Hotels[2].name;
    //     priceTarget.innerHTML = '$' + Hotels[2].price;
    //     cards.style.display = "none";
    //     request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = getDatabase();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[2].image,
    //         HotelName: Hotels[2].name,
    //         HotelPrice: '$' + Hotels[2].price,
    //         });
    //     }
    // }
    // const bookHotel4 = (event) => {
    //     console.log(event);
    //     const imageTarget = document.querySelector("#targetImage");
    //     const nameTarget = document.querySelector("#targetName");
    //     const priceTarget = document.querySelector("#targetPrice");
    //     const cards = document.querySelector(".cards_box");
    //     const request = document.querySelector(".request");

    //     imageTarget.src = Hotels[3].image;
    //     nameTarget.innerHTML = Hotels[3].name;
    //     priceTarget.innerHTML = '$' + Hotels[3].price;
    //     cards.style.display = "none";
    //     request.style.display = "block";

    //     writeUserData();
    //     function writeUserData() {
    //         const db = getDatabase();
    //         set(ref(db, 'booking/'), {
    //         HotelImage: Hotels[3].image,
    //         HotelName: Hotels[3].name,
    //         HotelPrice: '$' + Hotels[3].price,
    //         });
    //     }
    // }
    // const request = (event) => {
    //     console.log(event);
    //     const imageTarget = document.querySelector("#targetImage");
    //     const nameTarget = document.querySelector("#targetName");
    //     const priceTarget = document.querySelector("#targetPrice");
    //     const request = document.querySelector(".request");
    //     const cards = document.querySelector(".cards_box");
    //     request.style.display = "none";
    //     cards.style.display = "block";
    //     alert("Your request has been sent");
        
    //     imageTarget.src = '';
    //     nameTarget.innerHTML = '';
    //     priceTarget.innerHTML = '';

    // }
    // return (
    //     <div className='all'>
    //     <div className="box">
    //         <div className="content">
    //             <div className="text">Find best conference room</div>
    //             <div className="target">
    //                 <div className="trgt">
    //                 <div className="card">
    //                     <img src="" id='targetImage' alt="" />
    //                      <div className="hotel_name" id='targetName'></div>
    //                     <div className="price" id='targetPrice'></div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="cards">
    //                 <div className="cards_box">
    //                     <div className="card" onClick={bookHotel1}>
    //                         <img src={Hotels[0].image} alt="hotel1" />
    //                         <div className="hotel_name">{Hotels[0].name}</div>
    //                         <div className="price">{'$' + Hotels[0].price}</div>
    //                     </div>
    //                     {/*  */}
    //                     <div className="card" onClick={bookHotel2}>
    //                         <img src={Hotels[1].image} alt="hotel2" />
    //                         <div className="hotel_name">{Hotels[1].name}</div>
    //                         <div className="price">{'$' + Hotels[1].price}</div>
    //                     </div>
    //                     {/*  */}
    //                     <div className="card" onClick={bookHotel3}>
    //                         <img src={Hotels[2].image} alt="hotel3" />
    //                         <div className="hotel_name">{Hotels[2].name}</div>
    //                         <div className="price">{'$' + Hotels[2].price}</div>
    //                     </div>
    //                     {/*  */}
    //                     <div className="card" onClick={bookHotel4}>
    //                         <img src={Hotels[3].image} alt="hotel4" />
    //                         <div className="hotel_name">{Hotels[3].name}</div>
    //                         <div className="price">{'$' + Hotels[3].price}</div>
    //                     </div>
    //                 </div>
    //                 <div className="request">
    //                     <button className="btn" onClick={request}>Request</button>
    //                 </div>
    //             </div>
    //         </div>
           
    //     </div>
    //     </div>
    // )
}
export default Book;