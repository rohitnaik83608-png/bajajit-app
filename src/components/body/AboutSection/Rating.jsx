

function Rating() {
  return (
    <section className="rating-sec">
      <div className="container">
        <div className="row">

          <h3>
            Our IT service and technology agency partners with companies and
            organizations across the globe to enhance audience engagement and
            fuel business growth.
          </h3>

          <div className="col-lg-5 col-md-5 col-sm-12">
            <img src="../src/assets/img/rating-img-1.jpg" alt="rating" />
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book.
            </p>

            <div className="rating">
              <img src="../src/assets/img/Star.png" alt="star rating" />
              <p>
                5.0 Rated <br />
                Rated Superb Over 4.5k Rating
              </p>
            </div>

            <img src="../src/assets/img/rating-img-2.jpg" alt="rating" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Rating;