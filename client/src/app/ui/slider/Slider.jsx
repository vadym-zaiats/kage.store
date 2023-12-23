import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "./slider.scss";

export function Slider({ products }) {
  return (
    <div className="slider">
      <h2 className="slider__title">Товари зі знижкою</h2>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {products &&
          Array.isArray(products) &&
          products.length > 0 &&
          products.map(
            ({ name, currentPrice, imageUrls, itemNo, quantity, _id }) => (
              <SwiperSlide
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={_id}
              >
                <Link
                  href={{
                    pathname: `/product/${itemNo}`,
                    query: {
                      name,
                      currentPrice,
                      imageUrls,
                      itemNo,
                      quantity,
                    },
                  }}
                >
                  <Image
                    className="slider__img"
                    src={imageUrls[0]}
                    alt={name}
                    width={250}
                    height={250}
                  />
                </Link>
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
}
