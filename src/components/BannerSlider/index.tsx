import { Banner, BannerProps } from '../Banner'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Container>
      <Slider settings={settings}>
        {items.map(item => (
          <Banner {...item} key={item.title} />
        ))}
      </Slider>
    </S.Container>
  )
}

export default BannerSlider
