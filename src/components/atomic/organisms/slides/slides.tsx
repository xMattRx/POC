import { Box } from "@mui/material"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { SlidesStyles } from "./slides.styles"
import Slide from "../../molecules/slide/slide"

export default function Slides() {
  const styles = SlidesStyles()

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + "</span>"
    }
  }

  return (
    <Box sx={styles.slides}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide/>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
