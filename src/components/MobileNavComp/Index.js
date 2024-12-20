import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logoSmall.svg';
import './Index.css';
import hamburger from '../../assets/hamburger.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import selectedHome from '../../assets/home.svg';
import code from '../../assets/code.svg';
import cloud from '../../assets/cloud.svg';
import how from '../../assets/howToUse.svg';
import gear from '../../assets/gear.svg';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionName, setSelectedOptionName] = useState('Utkarsh Dhairya Panwar');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Repositories');

  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setMenuOpen(false); // Close the navbar when an option is clicked
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className='flex flex-col navMobPadding' style={{ width: "100%" }}>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-2'>
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className='flex flex-col justify-center'>
            <div className='navTextMob afont-inter justify-center'>CodeAnt AI</div>
          </div>
        </div>
        <div className='flex flex-col justify-center' onClick={toggleMenu}>
          <img src={hamburger} alt="Hamburger Icon" />
        </div>
      </div>
      {/* Conditional rendering of the mobile menu */}
      <div className={`mobileMenu ${menuOpen ? 'open' : 'closed'}`}>
        <div className="relative" ref={dropdownRef}>
          {/* Dropdown Trigger */}
          <div
            className="marginTopHelp flex flex-row rounded-md cursor-pointer p-2"
            onClick={toggleDropdown}
          >
            <div className="flex flex-col justify-center truncate">{selectedOptionName}</div>
            <div>
              <RiArrowDropDownLine
                className={`arrowDown transition-transform ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full z-10">
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Option 1')}
              >
                Option 1
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Option 2')}
              >
                Option 2
              </div>
              <div
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Option 3')}
              >
                Option 3
              </div>
            </div>
          )}
        </div>

        {/* Menu options */}
        <div
          className={`marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Repositories' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleOptionClick('Repositories')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Repositories' ? selectedHome : selectedHome} alt="Repositories Icon" />
          </div>
          <div className="optText text-md">Repositories</div>
        </div>

        {/* AI Code Review */}
        <div
          className={`marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'AI Code Review' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleOptionClick('AI Code Review')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'AI Code Review' ? code : code} alt="AI Code Review Icon" />
          </div>
          <div className="optText text-md">AI Code Review</div>
        </div>

        {/* Cloud Security */}
        <div
          className={`marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Cloud Security' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleOptionClick('Cloud Security')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Cloud Security' ? selectedHome : cloud} alt="Cloud Security Icon" />
          </div>
          <div className="optText text-md">Cloud Security</div>
        </div>

        {/* How to Use */}
        <div
          className={`marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'How to Use' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleOptionClick('How to Use')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'How to Use' ? selectedHome : how} alt="How to Use Icon" />
          </div>
          <div className="optText text-md">How to Use</div>
        </div>

        {/* Settings */}
        <div
          className={`marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Settings' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleOptionClick('Settings')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Settings' ? selectedHome : gear} alt="Settings Icon" />
          </div>
          <div className="optText text-md">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
