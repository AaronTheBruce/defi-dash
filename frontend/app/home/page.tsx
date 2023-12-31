"use client"
import React from 'react';
import Home from '@/pages/home/home';
import Sidebar from '@/components/sidebar/Sidebar';
import { options } from '@/components/sidebar/options';

const HomeApp = () => {
  return (
    <>
    <Sidebar items={options} />
    <Home />
    </>
  )
}

export default HomeApp