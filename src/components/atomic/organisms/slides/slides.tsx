import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../../molecules/slide/slide.tsx";
import { SlidesStyles } from "./slides.styles";
import { SectionSimilarProps } from "../sectionSimilar/sectionSimilar";

export default function Slides({ slides }: SectionSimilarProps) {
  const styles = SlidesStyles();

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>";
    }
  };

  return (
    <Box sx={styles.slides}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
