import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../themes/themes";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import "./style.css";
import {currentSlide, plusSlides, showSlides} from "./post_detail"
import { useParams } from "react-router-dom";
import { postsList } from "../../data/postsConstants";
const PostDetails = () => {
  const {idCategory,idPost} = useParams()
  const Body = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 90%;
    margin-top:80px;
    overflow-x: hidden;
    margin: auto;
  `;
  return (
    <ThemeProvider theme={lightMode}>
      <Navbar />
      <Body>
        {/*<!-- Sección superior (fotos, perfil y pago) -->*/}
        <div className="upper-container" onLoad={()=>showSlides(1)}>
          {/* <!-- Carousel de fotos -->*/}
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img1}`)}
                style={{ width: "100%" }}
                className="imagenes"
              />
            </div>

            <div className="mySlides fade">
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img2}`)}
                style={{ width: "100%" }}
                className="imagenes"
              />
            </div>

            <div className="mySlides fade">
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img3}`)}
                style={{ width: "100%" }}
                className="imagenes"
              />
            </div>

            <div className="mySlides fade">
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img4}`)}
                style={{ width: "100%" }}
                className="imagenes"
              />
            </div>

            {/* <!-- Botones anterior y siguiente -->*/}
            <a className="prev" onClick={()=>plusSlides(-1)} href="#">
              &#10094;
            </a>
            <a className="next" onClick={()=>plusSlides(1)} href="#">
              &#10095;
            </a>
            <br />

            {/*<!-- Puntitos de selección de imagen -->*/}
            <div style={{ textAlign: "center" }} className="thumbs">
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img1}`)}
                style={{ width: "17%" }}
                onClick={()=>currentSlide(1)}
                className="thumbnail"
              />
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img2}`)}
                style={{ width: "17%" }}
                onClick={()=>currentSlide(2)}
                className="thumbnail"
              />
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img3}`)}
                style={{ width: "17%" }}
                onClick={()=>currentSlide(3)}
                className="thumbnail"
              />
              <img
                alt=""
                src={require(`../../images/post/${postsList[0].contents[idCategory].posts[idPost].img4}`)}
                style={{ width: "17%" }}
                onClick={()=>currentSlide(4)}
                className="thumbnail"
              />
            </div>
          </div>
          {/*<!-- Perfil del dueño -->*/}
          <div className="profile">
            <img alt="" src={require("./images/profile.png")} className="pfp" />
            <p id="nombre">
              Maria Alish <br />{" "}
              <label for="badge" id="badge">
                🥇 Best Seller
              </label>
            </p>
            <p id="calif">⭐4.5</p>
          </div>
          {/*<!-- Form de pago -->*/}
          <div id="Checkout" className="inline">
            <h1>{postsList[0].contents[idCategory].posts[idPost].post_title}</h1>
            <form>
              <p>
                {postsList[0].contents[idCategory].posts[idPost].post_para}
              </p>
              <div className="form-group price">
                <div className="available">
                  <span>Hotel Avaliable</span>
                </div>
                <div className="amount-placeholder">
                  <span>U$D {postsList[0].contents[idCategory].posts[idPost].post_price}.00</span>
                </div>
              </div>
              <div className="card-row">
                <span className="visa"></span>
                <span className="mastercard"></span>
                <span className="amex"></span>
              </div>
              <div className="form-group">
                <label or="NameOnCard">Name on card</label> <br />
                <input
                  id="NameOnCard"
                  className="form-control"
                  type="text"
                  maxlength="255"
                ></input>
              </div>
              <div className="form-group">
                <label for="CreditCardNumber">Card number</label> <br />
                <input
                  id="CreditCardNumber"
                  className="form-control"
                  type="text"
                ></input>
              </div>
              <div className="form-group">
                <label for="ExpiryDate">Expiry date</label> <br />
                <input id="ExpiryDate" className="form-control" type="date"></input>
              </div>
              <div className="form-group">
                <label for="SecurityCode">Security code</label>
                <div className="input-container">
                  <input
                    id="SecurityCode"
                    className="form-control"
                    type="text"
                  ></input>
                  <i id="cvc" className="fa fa-question-circle"></i>
                </div>
              </div>
              <button className="submit-button">
                <span className="align-middle">Add to Cart</span>
              </button>
            </form>
          </div>
        </div>
        {/*<!-- Tabla de servicios -->*/}
        <div>
          <h1>Services:</h1>
          <div className="services">
            <div>🛜 Wifi</div>
            <div>👍 Recommended</div>
            <div>🛏️ 3 beds</div>
            <div>👪 5 people</div>
            <div>🔥 Radiator</div>

            <div>📺 TV</div>
            <div>☕ Breakfast</div>
            <div>🐶 Pets</div>
            <div>🛀 2 Bathrooms</div>
            <div>❄️ Air conditioner</div>
          </div>
        </div>
        {/*<!-- Texto de descripcion -->*/}
        <div className="description">
          <h1>Description:</h1>
          <p>
            Experience unparalleled luxury at our exquisite Miami beachfront
            hotel. Nestled along the pristine shores of the Atlantic Ocean, our
            resort boasts breathtaking views and lavish accommodations designed
            to indulge every sense. From elegantly appointed guest rooms to
            opulent suites with private terraces overlooking the azure waters,
            every detail has been meticulously curated to ensure an
            unforgettable stay.
            <br />
            <br />
            Indulge your palate at our world-className restaurants, where renowned
            chefs craft culinary masterpieces inspired by the vibrant flavors of
            Miami. Relax and rejuvenate at our state-of-the-art spa, offering a
            range of indulgent treatments and therapies. Lounge by our infinity
            pool, cocktail in hand, as the golden sun sets over the horizon,
            painting the sky in hues of pink and orange.
            <br />
            <br />
            For those seeking adventure, our concierge is on hand to arrange
            bespoke experiences, from yacht charters to exclusive VIP access to
            Miami's hottest nightlife spots. Whether you're here for business or
            pleasure, our luxury hotel offers an unparalleled retreat where
            every moment is infused with sophistication and style. Welcome to
            the epitome of Miami glamour.
          </p>
        </div>
        {/*<!-- Ubicacion en el mapa -->*/}
        <div className="maps">
          <h1>Location:</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.033528436071!2d-58.38342880920024!3d-34.60373759230284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1716748130678!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="maps"
          ></iframe>
        </div>
      </Body>
      <Footer showFooterContainer={false} />
    
    </ThemeProvider>
   
  );
};

export default PostDetails;
