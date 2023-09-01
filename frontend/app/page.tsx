import 'server-only';
import Sidebar from '../components/sidebar/Sidebar';
import { options } from '../components/sidebar/options';

export default function App() {


  return (
    <>
      <Sidebar items={options} />
      <div className='ml-32'>App</div>
    </>
  )
}
