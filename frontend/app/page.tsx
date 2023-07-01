import 'server-only';
import Sidebar from './sidebar/page';
import { options } from './sidebar/options';

export default function Home() {
  return (
    <>
      <Sidebar items={options} />
      <div className='pl-32'>
        Main Page
      </div>
    </>
  )
}
