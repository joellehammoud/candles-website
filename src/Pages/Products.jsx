import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
function Products() {
const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ Handcrafted in Lebanon ✦',
      title: 'Candle <em>&amp;</em> Gypsum <br /> Products!',
      subtitle:
         'Explore our collection of hand-poured candles and bespoke gypsum creations, crafted to make every space feel special.',

    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦ Luxury Handmade Pieces ✦',
      title: 'Elegant <em>Gypsum</em> Collection',
      subtitle:
        'Discover our exquisite range of handmade gypsum pieces, each one a testament to artisanal excellence.',
    },

  ];
  return (

    <>
      <Navbar />
      <Carousel slides={slides} />

      <section className="section-pad bg-cream gap-5 ">

        <div className="container">
              <div className="text-center mb-5  ">
                <span className="section-label">Our Products</span>
                <h2 className="section-title">Crafted with <i>intention</i></h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '12px auto 0', fontSize: '15px', lineHeight: '1.8' }}>
                  Each piece is made to order — unique, personal, and lasting.
                </p>
              </div>

            <div className="row g-4">
                <div className="col-md-6 col-lg-4 ">
                    <div className="product-card ">
                        <span className="product-tag">Bestseller </span>
                           <div className="imgpr">
                            <img src="/Amber.jpg"   className="img-fluid"/></div>
                    
                    <p className="product-type">Hand-Poured Candle</p>
                    <h3 className="prod-name">Amber &amp; Oud</h3>
                    <p className="about-product">  Rich oriental warmth — premium soy wax infused with pure oud resin
                       and warm amber accord. Burns 45+ hours.</p>
                        <p className="product-price">$28 <sub>USD</sub></p>
                </div>
            </div>

            
            
             <div className="col-md-6 col-lg-4 " style={{ transitionDelay: '0.1s' }}>
                <div className="product-card ">
                    <span className="product-tag "> Popular</span>
                    <div className="imgpr">
                        <img src="/gypset.jpg" alt="Product Image"/>
                    </div>
                    <p className="product-type">Gypsum</p>
                    <h3 className="prod-name">Gypsum Set </h3>
                    <p className="about-product">Handmade gypsum set — 3 unique pieces that add depth and
                       texture to any space. Custom sizes available.</p>
                    <p className="product-price">$27 <sub>USD</sub></p>
                </div>
        </div>

         <div className="col-md-6 col-lg-4 " style={{ transitionDelay: '0.2s' }}>
                <div className="product-card ">
                    <span className="product-tag ">Special</span>
                    <div className="imgpr">
                        <img src="/jarcandle.jpg" alt="Product Image"/>
                    </div>
                    <p className="product-type">Gypsum and Candle Set</p>
                    <h3 className="prod-name">Jar with Flower Candles 🌸 </h3>
                    <p className="about-product"> A little jar filled with blooming beauty ✨
                         These flower candles are lovingly handcrafted to create a cozy, romantic glow. Perfect for gifting or adding a gentle, floral touch to your space.</p>
                    <p className="product-price">$12 <sub>USD</sub></p>
                </div>
            </div>


           <div className="col-md-6 col-lg-4 " style={{ transitionDelay: '0.05s' }}>
          <div className="product-card">
            <span className="product-tag ">New Arrival</span>
                    <div className="imgpr">
                        <img src="cactus.jpg" alt="Product Image"/>
                    </div>
               
            <p className="product-type">Gypsum </p>
            <h3 className="product-name">Tray with Candles</h3>
            <p className="about-product">
              A beautifully arranged candle tray that brings instant coziness to your space 🤍
               Perfect for coffee tables, bedside corners, or gifting — where soft light meets simple elegance.
            </p>
            <p className="product-price"> $14 <sub>USD</sub></p>
          </div>
        </div>


          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Products;