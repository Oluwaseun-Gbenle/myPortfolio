import React from "react";

const Portfolio = ({portfolioElement}) => {
  return (
    <>
      <div id="portfolio" ref={portfolioElement} className="pt-5 text-light">
        <div className="container">
          <div className="section-title pt-4">
            <h2>Portfolio</h2>
          </div>

          <div className="">
          <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="row portfolio-container ">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app "data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <div className="btn border-green"> <i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web"data-aos="slide-up">
          <div className="portfolio-wrap">
            <img src="https://bootstrapmade.com/demo/templates/Personal/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <div className="btn border-green"><i className="bi bi-box-arrow-up-right me-2"></i>Visit Site</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
