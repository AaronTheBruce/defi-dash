import 'server-only';
import Dashboard from './home/page';
import Sidebar from './home/sidebar/page';
import { options } from './home/sidebar/options';

export default function Home() {
  return (
    <>
      <Sidebar items={options} />
      <Dashboard />
    </>
  )
}
