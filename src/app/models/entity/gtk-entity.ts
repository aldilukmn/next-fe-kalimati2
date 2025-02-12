export default interface GtkEntity {
  status: string;
  name: string;
  nip: string;
  class_gtk: string;
  image_url: string;
  image_id: string;
  total_student: {
    male: number;
    female: number;
  }
}