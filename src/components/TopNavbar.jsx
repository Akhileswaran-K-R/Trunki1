import React from 'react';

const TopNavbar = () => {
  const menuItems = [
    { name: 'About', target: 'about' },
    { name: 'Blog', target: 'blog' },
    { name: 'FAQ', target: 'faq' },
    { name: 'Contacts', target: 'contacts' },
  ];

  const socialIcons = ['FB', 'TW', 'YT'];

  return (
    <>
      {/* App Name on Top-Left */}
      <div className="fixed top-4 left-4 z-50">
        <h1 className="text-2xl font-extrabold select-none text-stroke-pink">
  Trunki
</h1>

      </div>

      {/* Centered Menu Buttons */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex gap-4 px-6 z-50">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.target}`}
className="text-white font-semibold px-6 py-3 rounded-full bg-pink-600/90 hover:bg-pink-600/60 text-lg shadow-md hover:scale-105 transition duration-300"
          >
            {item.name}
          </a>
        ))}
      </nav>

    </>
  );
};

export default TopNavbar;
