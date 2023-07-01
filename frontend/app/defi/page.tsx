import 'server-only';
import React from 'react';
import Sidebar from '../sidebar/page';
import { options } from '../sidebar/options';

const Dashboard = () => {
  return (
    <div>
      <Sidebar items={options}/>
        <div className="pl-32">
          Defi
        </div>
    </div>
  )
}

export default Dashboard