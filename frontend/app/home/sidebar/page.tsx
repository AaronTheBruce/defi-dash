'use client'
import React, { ReactNode } from 'react';

interface SidebarItem {
  id: number;
  title: string;
  url: string;
  icon: ReactNode
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="bg-gray-800 text-white w-32 flex flex-col h-screen">
      <div className="flex-grow">
        <ul className="p-4">
          {items.map((item) => (
            <li key={item.id} className="mb-2">
              <a href={item.url} className="flex items-end text-gray-300 hover:text-white">
                {item.icon}{item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
