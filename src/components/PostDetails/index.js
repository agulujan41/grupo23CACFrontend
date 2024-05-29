import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../../themes/themes";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "../Footer";
import "./style.css";
const PostDetails = () => {
  const Body = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 80%;
    margin-top:80px;
    overflow-x: hidden;
    margin: auto;
  `;
  return (
    <ThemeProvider theme={lightMode}>
      <Navbar />
      <Body>
        {/*<!-- Sección superior (fotos, perfil y pago) -->*/}
        <div class="upper-container">
          {/* <!-- Carousel de fotos -->*/}
          <div class="slideshow-container">
            <div class="mySlides fade">
              <img
                alt=""
                src={require("./images/casa1.jpeg")}
                style={{ width: "100%" }}
                class="imagenes"
              />
            </div>

            <div class="mySlides fade">
              <img
                alt=""
                src={require("./images/casa2.jpeg")}
                style={{ width: "100%" }}
                class="imagenes"
              />
            </div>

            <div class="mySlides fade">
              <img
                alt=""
                src={require("./images/casa3.jpeg")}
                style={{ width: "100%" }}
                class="imagenes"
              />
            </div>

            <div class="mySlides fade">
              <img
                alt=""
                src={require("./images/casa4.jpeg")}
                style={{ width: "100%" }}
                class="imagenes"
              />
            </div>

            {/* <!-- Botones anterior y siguiente -->*/}
            <a class="prev" onclick="plusSlides(-1)" href="#">
              &#10094;
            </a>
            <a class="next" onclick="plusSlides(1)" href="#">
              &#10095;
            </a>
            <br />

            {/*<!-- Puntitos de selección de imagen -->*/}
            <div style={{ textAlign: "center" }} class="thumbs">
              <img
                alt=""
                src={require("./images/casa1.jpeg")}
                style={{ width: "17%" }}
                onclick="currentSlide(1)"
                class="thumbnail"
              />
              <img
                alt=""
                src={require("./images/casa2.jpeg")}
                style={{ width: "17%" }}
                onclick="currentSlide(2)"
                class="thumbnail"
              />
              <img
                alt=""
                src={require("./images/casa3.jpeg")}
                style={{ width: "17%" }}
                onclick="currentSlide(3)"
                class="thumbnail"
              />
              <img
                alt=""
                src={require("./images/casa4.jpeg")}
                style={{ width: "17%" }}
                onclick="currentSlide(4)"
                class="thumbnail"
              />
            </div>
          </div>
          {/*<!-- Perfil del dueño -->*/}
          <div class="profile">
            <img alt="" src={require("./images/profile.png")} class="pfp" />
            <p id="nombre">
              Maria Alish <br />{" "}
              <label for="badge" id="badge">
                🥇 Best Seller
              </label>
            </p>
            <p id="calif">⭐4.5</p>
          </div>
          {/*<!-- Form de pago -->*/}
          <div id="Checkout" class="inline">
            <h1>Miami Beach</h1>
            <form>
              <p>
                Short description Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Adipisci culpa deleniti officiis minus
                recusandae, incidunt ducimus voluptate molestias, corrupti nihil
                quam et placeat soluta sit nobis provident ullam nesciunt!{" "}
              </p>
              <div class="form-group price">
                <div class="available">
                  <span>Hotel Avaliable</span>
                </div>
                <div class="amount-placeholder">
                  <span>U$D 130.00</span>
                </div>
              </div>
              <div class="card-row">
                <span class="visa"></span>
                <span class="mastercard"></span>
                <span class="amex"></span>
              </div>
              <div class="form-group">
                <label or="NameOnCard">Name on card</label> <br />
                <input
                  id="NameOnCard"
                  class="form-control"
                  type="text"
                  maxlength="255"
                ></input>
              </div>
              <div class="form-group">
                <label for="CreditCardNumber">Card number</label> <br />
                <input
                  id="CreditCardNumber"
                  class="form-control"
                  type="text"
                ></input>
              </div>
              <div class="form-group">
                <label for="ExpiryDate">Expiry date</label> <br />
                <input id="ExpiryDate" class="form-control" type="date"></input>
              </div>
              <div class="form-group">
                <label for="SecurityCode">Security code</label>
                <div class="input-container">
                  <input
                    id="SecurityCode"
                    class="form-control"
                    type="text"
                  ></input>
                  <i id="cvc" class="fa fa-question-circle"></i>
                </div>
              </div>
              <button class="submit-button">
                <span class="align-middle">Add to Cart</span>
              </button>
            </form>
          </div>
        </div>
        {/*<!-- Tabla de servicios -->*/}
        <div>
          <h1>Services:</h1>
          <div class="services">
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
        <div class="description">
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
            Indulge your palate at our world-class restaurants, where renowned
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
        <div class="maps">
          <h1>Location:</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.033528436071!2d-58.38342880920024!3d-34.60373759230284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1716748130678!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="maps"
          ></iframe>
        </div>
      </Body>
      <Footer showFooterContainer={false} />
    </ThemeProvider>
  );
};

export default PostDetails;
