import React, { useState } from 'react';
import NavbarItems from './NavbarItems.js';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className={`flex flex-col gap-12 ${isExpanded ? 'w-64' : 'w-24 items-center'} h-screen p-5 text-white bg-neutral-900 transition-all duration-700`}>
    
      <button onClick={handleToggle} className="flex items-center gap-4 overflow-x-clip">
        <img className="rounded-full size-14 object-cover" src="https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/9869ee0c-d5b8-48c3-a2b9-3feb4bc6fbf7.png" alt="User profile image"/>
        {isExpanded && (
          <div className="shrink-0">
            <h3 className="font-bold">Benji Hunt</h3>
            <p className="text-xs bg-yellow-500 rounded-sm">Pro Member</p>
          </div>
        )}
      </button>

      <ul className="h-full">
        {NavbarItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3 h-12 cursor-pointer relative transition-all duration-300 group hover:text-sky-600">
            <i className="material-symbols-outlined text-2xl">{item.icon}</i>
            {
              isExpanded ? (
                <p>{item.title}</p>
              )
                :
              ( 
                <p className="grid place-items-center absolute top-1/2 -translate-y-1/2 left-14 bg-neutral-900 rounded transition-all duration-300 z-50 overflow-hidden max-w-0 group-hover:max-w-28 h-full">
                  <span className="px-5">
                    {item.title}
                  </span>
                </p>
              )
            }
          </li>
        ))}
      </ul>
      
      <button className="rounded-md w-full py-3 text-white border-2 border-white mt-auto flex items-center justify-center transition-all duration-300 hover:text-neutral-900 hover:bg-white">
        {isExpanded ? (
          <span className="shrink-0">Sign out</span>
        ) : (
          <i className="material-symbols-outlined">logout</i>
        )}
      </button>
    </nav>
  )
}

export default Navbar;
