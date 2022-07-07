import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import html2pdf from "html2pdf.js";

import { jsPDF } from "jspdf";
function App() {
  const content = useRef();

  var opt = {
    margin: 0,
    filename: "myfile.pdf",
    image: { type: "jpg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    useCORS: true,
  };
  //   console.log(html2pdf);
  const handleSave = () => {
    // New Promise-based usage:
    html2pdf().set(opt).from(content.current?.outerHTML).save();

    // Old monolithic-style usage:
    //   html2pdf(content.current?.outerHTML, opt);
  };

  return (
    <>
    
      <div
        ref={content}
        class="wrapper"
        id="content"
        style={{
          overflow: "hidden",
          zIndex: 10,
          height: "100%",
          width: "100%",
        }}
      >
         
        <div class="container">
          <div
            class="banner"
            style={{
              width: "80vw",
              height: "80vw",
              transform: "rotate(-45deg)",
              marginLeft: "-40vw",
              backgroundColor: "#fff",
              position: "absolute",
              zIndex: 2,
            }}
          >
            <div class="box large__box">
              <div class="box__content">
                <div class="image">
                  <img
                    src="https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBlZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="domek"
                  />
                </div>
              </div>
            </div>

            <div class="box small__box left">
              <div class="box__content">
                <div class="image">
                  <img
                    src="https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBlZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="domek"
                  />
                </div>
              </div>
            </div>

            <div class="box small__box right">
              <div class="box__content">
                <div class="image">
                  <img
                    src="https://images.unsplash.com/photo-1606115915090-be18fea23ec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBlZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="domek"
                    height="100px"
                    width="100px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="content__wrapper">
            <header class="header">
              <div class="title__bar">
                <div>Luxury Apartments</div>
                <div>for lease</div>
              </div>

              <div class="discount__bar">
                <span>Discount</span>
                <span>Up to</span>
                <span>30%</span>
              </div>
            </header>

            <div class="frame">
              <div class="title__frame middle">Real estate agency</div>
            </div>

            <main class="main">
              <section class="about__section">
                <h3>About the Property</h3>
                <div class="about__section__content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ullamcorper metus eu metus porttitor, sit amet sollicitudin
                  dolor iaculis. Duis ac scelerisque ipsum. Maecenas at lorem
                  aliquam, volutpat sem vel, ultricies nulla. Etiam bibendum
                  accumsan felis, sed feugiat nunc ornare ullamcorper. Proin
                  porttitor, ligula eu iaculis ultricies, libero nisl sagittis
                  dui, vel tempus enim lorem nec nulla. Quisque sit amet arcu
                  eget libero sodales efficitur. Donec tristique, nisl tempus
                  accumsan dignissim, lorem metus euismod velit, a tincidunt
                  sapien nunc eu lacus. Proin sit amet nibh arcu. Sed nunc ante,
                  faucibus id vestibulum sed, tincidunt vel urna. Ut sit amet
                  nisl ante. Suspendisse vitae ullamcorper nisi. Nulla porttitor
                  ultrices odio nec elementum.
                </div>
              </section>

              <section class="title__frame low">
                <div class="badge">
                  <h1> House for Sale</h1>
                  <p>Lorem ipsum dolor amet</p>
                </div>
                <div class="value">
                  Offer at <span>$250,000</span>
                </div>
              </section>
              <section class="more__about__section__content">
                Proin cursus ornare nisl, sed eleifend enim gravida eget. Nunc
                metus est, condimentum non sapien in, tincidunt cursus orci.
                Curabitur magna tellus, sodales non tristique a, tincidunt id
                eros. Nam tristique, elit nec blandit ullamcorper, metus nisi
                efficitur turpis, nec cursus orci purus in tortor. Proin laoreet
                tempor aliquam. Maecenas id congue metus. Vestibulum sit amet
                laoreet elit. In eleifend sodales lectus, sit amet accumsan
                nulla dignissim nec. Duis urna tortor, euismod vestibulum semper
                ut, porttitor non orci. Proin fermentum congue neque, vel
                aliquam metus. Suspendisse mattis posuere justo, ac aliquet
                ipsum sagittis at. Proin facilisis sodales nisi, a molestie
                mauris pulvinar id. Quisque a congue orci, quis viverra velit.
                Sed scelerisque volutpat sodales.
              </section>
            </main>
          </div>
        </div>

        <footer class="footer">
          <section class="footer__disclaimer">
            Proin ullamcorper metus eu metus porttitor, sit amet sollicitudin
            dolor iaculis. Duis ac scelerisque ipsum. Maecenas at lorem aliquam,
            volutpat sem vel, ultricies nulla. Etiam bibendum accumsan felis,
            sed feugiat nunc ornare ullamcorper. Proin porttitor, ligula eu
            iaculis ultricies, libero nisl sagittis dui, vel tempus enim lorem
            nec nulla. Quisque sit amet arcu eget libero sodales efficitur.
          </section>
          <div class="footer__content__wrapper">
            <div class="footer__slice other__facilities">
              <ul>
                <li>Something</li>
                <li>from</li>
                <li>nothing</li>
                <li>or</li>
                <li>anything</li>
              </ul>
            </div>
            <div class="footer__slice">
            <img
                    src="https://jpeg.org/images/jpegsystems-home.jpg"
                    alt="domek"
                    height="100px"
                    width="100px"
                  />
              Nullam tristique rutrum ipsum, ac euismod libero volutpat eu.
              Maecenas et ultricies eros. Nam commodo erat nulla, in aliquam est
              semper eu. Morbi volutpat tempor risus, in mollis dui rhoncus
              rhoncus. Nam tristique eros eu neque tincidunt, quis iaculis
              sapien ultricies. Nullam id tristique diam. Proin et nulla congue,
              placerat turpis at, tincidunt ipsum.
            </div>
          </div>
          <div class="bottom__bar"></div>
          <div class="bottom__banner">
            <div class="bottom__banner_content">
              <div class="bottom__banner_image"></div>
            </div>
          </div>
        </footer>
        <div id="editor"></div>
      </div>
      <button onClick={handleSave}>save</button>
    </>
  );
}

export default App;
