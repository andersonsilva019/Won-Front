import { useState, useEffect, useRef } from 'react'
import SlickSlider from 'react-slick'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'

import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next images" />,
  prevArrow: <ArrowLeft aria-label="previous images" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToScroll: 1
}

export type GalleyImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleyImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const sliderRef = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) =>
      key === 'Escape' && setIsOpen(false)

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Container>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <img
            onClick={() => {
              setIsOpen(true)
              sliderRef.current!.slickGoTo(index, true)
            }}
            key={item.src}
            role="button"
            src={item.src}
            alt={` Thumb - ${item.label}`}
          />
        ))}
      </Slider>
      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          onClick={() => setIsOpen(false)}
          aria-label="close modal"
        >
          <Close size={40} />
        </S.Close>
        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map(item => (
              <img
                key={`gallery - ${item.src}`}
                src={item.src}
                alt={`${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Container>
  )
}

export default Gallery
