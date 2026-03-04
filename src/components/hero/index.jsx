const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__titles">
            <p>Favorite brands</p>

            <h1>
              <span>An exciting place </span> <br />
              for the whole family <br /> to shop.
            </h1>

            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is <br />{" "}
              reproduced below for those interested.
            </p>


            <div className="hero__buttons">

                <button >Shop Now</button>
                <p>$ 249.99</p>
                <p>$ 249.99</p>
            </div>
          </div>

          <div className="hero__img">

            <img src="/public/images/hero-img.png" alt="" />
          </div>



        </div>
        <div className="wall">
        <p >New Products</p>
        <h2>Popular Products</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
