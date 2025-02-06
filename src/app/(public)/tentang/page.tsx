import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardCustome from '../components/card-custome/card-custome';

export default function page() {
  return (
    <>
      <div className="mt-28 text-snow_day max-w-sm mx-auto sm:max-w-lg">
        <CardCustome
          className='bg-blue_paisley mb-10'
          title='Tentang'
          content='Website ini dikelola oleh Tenaga Administrasi Sekolah atau Operator. Jika ada kritik dan saran dapat menghubungi nomor kontak di bawah ini. Terima Kasih.'
        />
        <CardCustome
          className='bg-blue_paisley'
          title='Kontak'
          content={
            <>
              <figcaption className='flex gap-2 mb-2'>
                <WhatsAppIcon/>
                <p>081-324-718-895</p>
              </figcaption>
              <figcaption className='flex gap-2'>
                <MailOutlineIcon/>
                <p>uptdsdnegeri2kalimati@gmail.com</p>
              </figcaption>
            </>
          }
        />
      </div>
    </>
  )
}