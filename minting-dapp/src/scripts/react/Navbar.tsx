import React, { useState } from 'react';
import { FaTwitter, FaDiscord, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <nav className="navbar-container bg-primary text-white py-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 999 }}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* Your project name or logo */}
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 hover:text-hover_txt"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://discord.gg/your-discord"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hover_txt"
          >
            <FaDiscord size={32} />
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none mt-20"
            onClick={togglePanel}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>
      {isPanelOpen && (
        <div
          className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-75 z-10"
          onClick={togglePanel}
        >
          <div className="w-1/2 h-screen bg-black">
            <div className="flex justify-end py-4 pr-4">
              <button
                className="text-primary focus:outline-none"
                onClick={togglePanel}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 text-2xl hover:text-hover_txt"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://discord.gg/your-discord"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 text-2xl hover:text-hover_txt"
              >
                <FaDiscord size={32} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
