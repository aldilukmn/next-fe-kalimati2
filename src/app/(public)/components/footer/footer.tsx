import { currentYear } from '@/app/utils/current-year';
import { Footer } from 'flowbite-react';

export default function FooterCustome() {
  return (
    <>
      <Footer container className='bg-blue_paisley text-center py-16 sm:text-base text-sm border-none'>
        {/* <h2 className="lg:text-xl text-base font-semibold tracking-widest">UPTD SDN 2 KALIMATI</h2>
        <h3 className="font-semibold tracking-wide">KECAMATAN JATIBARANG KABUPATEN INDRAMAYU
        </h3> */}
        {/* <h4>Copyright &copy; {currentYear}</h4> */}
        <div className='mx-auto'>
          <Footer.Title title='UPTD SDN 2 KALIMATI' className='text-snow_day mb-2'/>
          <Footer.Title title='KECAMATAN JATIBARANG KABUPATEN INDRAMAYU' className='text-snow_day mb-2'/>
          <Footer.Copyright year={currentYear} by='INDONESIA' className='text-snow_day'/>
        </div>
      </Footer>
    </>
  )
}