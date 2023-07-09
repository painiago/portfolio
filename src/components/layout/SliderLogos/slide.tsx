import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js';

const CustomerLogos = () => {
  const customerLogosRef = useRef(null);

  useEffect(() => {
    const options = {
        slidesToShow: 6,
        slidesToScroll: 1,
        scrollLock: true,
        dots: false,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next',
        },
        draggable: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
      
    if (customerLogosRef.current) {
      new Glider(customerLogosRef.current);
    }
  }, []);

  return (
    <div ref={customerLogosRef} className="customer-logos">
      {/* Slides content here */}
    </div>
  );
};

export default CustomerLogos;
