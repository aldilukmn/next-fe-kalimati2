import GtkEntity from '@/app/models/entity';

interface DefaultGtkResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  result: GtkEntity[]
}

export type { DefaultGtkResponse }