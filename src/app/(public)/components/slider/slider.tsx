import { Carousel } from 'flowbite-react';
import SliderType from './type';

export default function Slider({ className }: SliderType) {
  return (
    <Carousel className={`h-56 sm:h-64 xl:h-96 ${className}`}>
      <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1733679066/uptd%20sdn%202%20kalimati/images/1733678562202_izsoev.jpg" alt="..." />
      <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1733678993/uptd%20sdn%202%20kalimati/images/1733678562164_fdf9fh.jpg" alt="..." />
      <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1733679725/uptd%20sdn%202%20kalimati/images/1733679634606_r4savl.jpg" alt="..." />
      <img src="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717922899/uptd%20sdn%202%20kalimati/images/msyaiwco44xf9ig3qd91.jpg" alt="..." />
    </Carousel>
  )
}