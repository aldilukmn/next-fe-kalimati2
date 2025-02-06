import { currentYear } from '@/app/utils/current-year';

export default function Footer() {
  return (
    <>
      <footer className="bg-blue_paisley text-white text-center py-16 sm:text-base text-sm">
        <h2 className="lg:text-xl text-base font-semibold tracking-widest">UPTD SDN 2 KALIMATI</h2>
        <h3 className="font-semibold tracking-wide">KECAMATAN JATIBARANG KABUPATEN INDRAMAYU
        </h3>
        <h4>Copyright &copy; {currentYear}</h4>
      </footer>
    </>
  )
}