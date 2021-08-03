import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next images" />,
  prevArrow: <ArrowLeft aria-label="previous images" />
}

export type GalleyImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleyImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <S.Container>
      <Slider settings={settings}>
        {items.map(item => (
          <img
            key={item.src}
            role="button"
            src={item.src}
            alt={` Thumb - ${item.label}`}
          />
        ))}
      </Slider>
    </S.Container>
  )
}

export default Gallery
