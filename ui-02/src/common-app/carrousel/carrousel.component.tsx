import { useRef } from "react";
import Slider from "react-slick";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import "./carrousel.styles.scss";

export const Carrousel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  const [divRef, dimensions] = useResizeObserver<HTMLDivElement>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: dimensions?.width > 600 ? false : true, // Disables touch swipe
    draggable: false, // Disables mouse drag
    touchMove: dimensions?.width > 600 ? false : true, // Prevents touch movement on mobile devices
    arrows: false, // Hides the default slick 'Slide' arrows
    //* It does not work
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="rootCarrousel">
      <div className="containerCarrousel">
        <button onClick={() => sliderRef.current?.slickPrev()}>{"<<"}</button>

        <div ref={divRef} className="carouselWrapper">
          <Slider ref={sliderRef} {...settings}>
            {children}
          </Slider>
        </div>
        <button onClick={() => sliderRef.current?.slickNext()}>{">>"}</button>
      </div>
    </div>
  );
};
