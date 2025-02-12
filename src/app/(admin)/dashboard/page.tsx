import { cookies } from 'next/headers'

export default async function Dashboard() {
  const token = await cookies();
  // console.log(token);
  return (
    <div>
      Hello World
    </div>
  )
}