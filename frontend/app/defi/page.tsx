"use client"
import React from 'react';
import Defi from '@/pages/defi/defi';
import Sidebar from '@/components/sidebar/Sidebar';
import { options } from '@/components/sidebar/options';

const DeFiApp = () => {
  return (
    <>
        <Sidebar items={options} />
        <Defi />
    </>
  )
}

export default DeFiApp