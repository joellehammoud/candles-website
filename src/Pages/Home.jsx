import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function Home() {

  const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ Handcrafted in Lebanon ✦',
      title: 'Candle <em>&amp;</em> Gypsum <br /><em>Artistry</em>',
      subtitle:
        'Where light meets sculpted earth.',
    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦ Luxury Handmade Pieces ✦',
      title: 'Elegant <em>Gypsum</em> Collection',
      subtitle:
        'Handcrafted artistic gypsum creations.',
    },

  ];

  return (

    <>
      <Navbar />

      <Carousel slides={slides} />

      <Footer />
    </>

  );
}

export default Home;