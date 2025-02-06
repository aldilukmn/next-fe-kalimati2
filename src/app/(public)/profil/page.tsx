import SkeletonLoader from '../components/skeleton-loader/skeleton-skeleton-loader';
import { logoUrl, misi, profilDesc, visi } from './data';

export default function page() {
  return (
    <div className='my-10 w-[90%] mx-auto'>
       <div className="lg:flex gap-20 mb-20 mt-20">
      <figure className={`lg:w-1/6 w-1/3 mx-auto ${logoUrl ? 'self-center' : ''}`}>
        { logoUrl ? 
        (
          <img src={logoUrl} alt="logo" className=" lg:mb-0 mb-10" />
        ) : (
          <SkeletonLoader />
        )}
      </figure>
      <section className="bg-blue_paisley text-snow_day p-4 rounded-xl w-full">
        <p className="md:text-lg">
          {
            profilDesc ? profilDesc : 
            <div >
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonLoader key={index}/>
              ))}
            </div>
          }
        </p>
      </section>
    </div>
    <section className="bg-blue_paisley text-white rounded-xl p-5 mb-20">
      <h3 className="md:text-2xl text-lg font-semibold text-center mb-5">VISI</h3>
      <p className="md:text-lg">
        {
          visi[0]?.visi
        }
      </p>
      <ol className="list-decimal ml-4">
        {
          visi[0].point.map((value, index) => (
            <li key={index}>
              {value.desc}
            </li>
          ))
        }
      </ol>
    </section>
    <section className="bg-blue_paisley text-white rounded-xl p-5 mb-20">
      <h3 className="md:text-2xl text-lg font-semibold text-center mb-2">MISI</h3>
      <ol className="md:text-lg list-decimal ml-4">
        {
          misi.map((value, index) => (
            <li key={index}>
              {value.misi}
            </li>
          ))
        }
      </ol>
    </section>
   </div>
  )
}