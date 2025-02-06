import CardCustome from './components/card-custome/card-custome';
import Slider from './components/slider/slider';

export default function Beranda() {
  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <Slider/>
      <CardCustome className='my-10'
        title='UPTD SDN 2 Kalimati'
        content={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis incidunt provident, molestiae iusto necessitatibus animi maxime? Sunt, necessitatibus placeat optio, similique debitis quo delectus modi quod nam perferendis odit molestiae non, eligendi id temporibus natus repellendus! Mollitia recusandae alias sint sapiente cumque repellendus necessitatibus. Itaque ipsum a vero suscipit minima, quam expedita recusandae, perferendis consequuntur molestias aliquam enim incidunt, eum esse assumenda tempora corporis eligendi odit nobis necessitatibus autem. Eos rerum dolorum eum saepe voluptates, a quaerat delectus blanditiis ea maiores sit ipsam reprehenderit laboriosam assumenda, consequuntur itaque suscipit voluptate aut! Nam perferendis labore aliquam veritatis ratione, neque aspernatur.
          </p>
        }
      />
    </div>
  );
}
