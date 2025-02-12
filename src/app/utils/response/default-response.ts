import GtkEntity from '@/app/models/entity/gtk-entity';
import UserEntity from '@/app/models/entity/user-entity';

export default interface DefaultResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  result: GtkEntity[] |
          UserEntity |
          string
}