import { Card } from 'flowbite-react';
import CardType from './type';

export default function CardCustome({ className, title, content }: CardType) {
 return (
    <Card className={`${className}`}>
      <h5 className="text-2xl font-bold tracking-tight">
        {title}
      </h5>
      <div className="font-normal">
        {content}
      </div>
    </Card>
  );
}