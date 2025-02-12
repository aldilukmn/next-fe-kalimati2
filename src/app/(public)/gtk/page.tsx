'use client';
import { setIsLoading } from '@/app/config/redux/action/loading.action';
import { firstCapitalizeWord } from '@/app/utils/first-cap';
import DataGtk from '@/app/utils/gtk/data-gtk';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonLoader from '../components/skeleton-loader/skeleton-skeleton-loader';
import DefaultResponse from '@/app/utils/response/default-response';
import GtkEntity from '@/app/models/entity/gtk-entity';
import { AppDispatch, RootState } from '@/app/config/redux/store';

export default function page() {
  const [gtk, setGtk] = useState<GtkEntity[] | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [isHead, setIsHead] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading)
  const headOfSchool = gtk?.find(val => val.status.includes('kepala sekolah'));
  const toggleParagraph = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
    setIsHead(false);
  }
  const toggleHead = () => {
    setIsHead((prev) => !prev)
    setIsOpen(null)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setIsLoading(true));
        const data: DefaultResponse = await DataGtk.getGtk();
        if (data.status.code === 400) throw new Error();
        const sortedData: GtkEntity[] = Array.isArray(data.result) ? data.result.sort((a, b) => {
          const classA = a.class_gtk;
          const classB = b.class_gtk;
          if (a.status.includes('penjaga')) return 1;
          if (b.status.includes('penjaga')) return -1;

          if (classA < classB) return -1;
          if (classA > classB) return 1;

          return 0;
        }) : [];
        setGtk(sortedData);
      } catch (error) {
        if (error instanceof Error) {
          console.log('Failed to fetch data from server.', error.message)
        }
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    getData();
  }, [dispatch]);
  return (
    <>
      <section className='w-[90%] mx-auto mt-20'>
        <h1 className="font-bold md:text-2xl text-center mb-10 text-blue_paisley border-b-blue_paisley border-b-2 max-w-fit mx-auto">Guru dan Tenaga Kependidikan</h1>
        {
          isLoading ? (
            <SkeletonLoader />
          ) : (
            headOfSchool && (
              <div className="mb-5 md:w-80 mx-auto text-white" onClick={toggleHead}>
                <h3 className={`bg-blue_paisley text-center tracking-widest font-semibold py-3 rounded-t-md cursor-pointer text-xl transition-all duration-500 ease-in-out ${isHead ? 'rounded-t-md' : 'rounded-md'}`}>{firstCapitalizeWord(headOfSchool.status)}</h3>
                <div className={`bg-blue_paisley overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isHead ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
                  <img src={headOfSchool.image_url} alt="Kepala Sekolah" width={125} className="rounded-full mx-auto mb-5" />
                  <h4 className="tracking-wide font-semibold">{headOfSchool.name}</h4>
                  <h4>NIP. {headOfSchool.nip}</h4>
                </div>
              </div>
              )
          )
        }
        {
          isLoading ? (
            <SkeletonLoader/>
          ) : (
            <div className="text-white grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
             gtk?.filter(val => !val.status.includes('kepala sekolah')).map((value, index) => (
               <div key={index}>
                <h3 className={`bg-blue_paisley text-xl tracking-widest font-semibold text-center cursor-pointer py-3 bg-blue transition-all duration-500 ease-in-out ${isOpen === index ? 'rounded-t-md' : 'rounded-md'}`} onClick={() => toggleParagraph(index)}>
                  { value.class_gtk && value.class_gtk.includes('pjok') ? 'Guru PJOK' :
                    value.class_gtk && value.class_gtk.includes('pai') ? 'Guru PAI' :
                  value.class_gtk ? `Guru Kelas ${value.class_gtk}` : 'Penjaga'
                  }
                </h3>
                 <div className={`bg-blue_paisley overflow-hidden transition-all duration-500 ease-in-out bg-blue-soft flex flex-col items-center ${isOpen === index ? 'max-h-dvh py-5 opacity-100 rounded-b-md' : 'max-h-0 opacity-0'}`}>
                   <img src={value.image_url} alt={value.status} width={125} className="rounded-full mb-5"/>
                   <h4 className="text-center font-semibold tracking-wide">
                     {value.name}
                   </h4>
                   <h4>NIP : {value.nip}</h4>
                   {
                     value.status.includes('GURU KELAS') && (
                       <h5>Jumlah Siswa : {(value.total_student?.male ?? 0) + (value.total_student?.female ?? 0)}</h5>
                     )
                   }
                 </div>
               </div>
             ))
            }
           </div>
          )
        }
      </section>
    </>
  )
}