import React, { useState,useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for toast notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Index.css';
import logoSmall from '../../assets/logoSmall.svg'
import { RiArrowDropDownLine } from "react-icons/ri";
import selectedHome from '../../assets/home.svg'
import code from '../../assets/code.svg'
import cloud from '../../assets/cloud.svg'
import how from '../../assets/howToUse.svg'
import gear from '../../assets/gear.svg'
import support from '../../assets/support.svg'
import logout from '../../assets/logout.svg'
import refreshAll from '../../assets/refreshAll.svg'
import repo from '../../assets/addRepo.svg'
import search from '../../assets/search.svg'
import CardsComp from '../CardsComp/Index';
import MobileNav from '../MobileNavComp/Index'
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash'; 
// import selectedHome from '../../assets/bitBucketlogo.svg'

const cardData = [
  {
    name: 'design-system',
    access: 'Public',
    technology: 'React',
    fileSize: '7320 KB',
    lastUpdated: 'Updated 1 day ago',
  },
  {
    name: 'project-alpha',
    access: 'Private',
    technology: 'Angular',
    fileSize: '150 KB',
    lastUpdated: 'Updated 3 hours ago',
  },
  {
    name: 'data-pipeline',
    access: 'Public',
    technology: 'Node.js',
    fileSize: '5 MB',
    lastUpdated: 'Updated 2 days ago',
  },
  {
    name: 'user-dashboard',
    access: 'Private',
    technology: 'Vue.js',
    fileSize: '2.3 MB',
    lastUpdated: 'Updated 5 minutes ago',
  },
  {
    name: 'analytics-platform',
    access: 'Public',
    technology: 'Python',
    fileSize: '10 MB',
    lastUpdated: 'Updated 4 hours ago',
  },
  {
    name: 'shopping-cart',
    access: 'Private',
    technology: 'JavaScript',
    fileSize: '1.8 MB',
    lastUpdated: 'Updated 7 hours ago',
  },
  {
    name: 'admin-portal',
    access: 'Public',
    technology: 'Ruby on Rails',
    fileSize: '500 KB',
    lastUpdated: 'Updated 3 days ago',
  },
];

function RepositoryComp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Repositories');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionName, setSelectedOptionName] = useState('Utkarsh Dhairya Panwar'); 
  const [selectedAction, setSelectedAction] = useState('Add Repository');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(cardData);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const dropdownRef = useRef(null);
  
  
  
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
    setSelectedOptionName(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };


  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const platform = queryParams.get('platform');

    if (platform) {
      switch (platform) {
        case 'github':
          toast("Signed in with Github!");
          break;
        case 'gitlab':
          toast("Signed in with Gitlab!");
          break;
        case 'azure':
          toast("Signed in with Azure!");
          break;
        case 'bitbucket':
          toast("Signed in with Bitbucket!");
          break;
        default:
          toast("Signed in with SSO!");
          break;
      }
    }
  }, [location.search]);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const logoutFunc = () => {
    navigate('/'); 
};

{/* Deboune Algo for search*/}
useEffect(() => {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  const newTimeout = setTimeout(() => {
    const filtered = cardData.filter((data) =>
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.technology.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, 500); // Debounce delay in ms (500ms in this case)

  setDebounceTimeout(newTimeout);

  return () => {
    clearTimeout(newTimeout); // Cleanup on component unmount or when `searchQuery` changes
  };
}, [searchQuery]);


  return (
    <>
    <div className=' topParent'>
    <div className=' leftNav flex flex-col justify-between'>
      <div>
          <div className='flex flex-row gap-3 justify-start'>
            <div className='logoSmall'><img style={{width:"100%",height:"100%"}} src={logoSmall}/></div>
            <div className='font-inter codeAntText flex flex-col justify-center'>CodeAnt AI</div>
          </div>  
          <div className="relative" ref={dropdownRef}>
          {/* Dropdown Trigger */}
          <div
            className="marginTopHelp flex flex-row justify-between rounded-md cursor-pointer "
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
          <div
          className={` marginBelowHelp flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Repositories' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption('Repositories')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Repositories' ? selectedHome : selectedHome} alt="Repositories Icon" />
          </div>
          <div className="optText text-md">Repositories</div>
        </div>
  
        {/* AI Code Review */}
        <div
          className={` marginBelowHelpSec flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'AI Code Review' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption('AI Code Review')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'AI Code Review' ? code : code} alt="AI Code Review Icon" />
          </div>
          <div className="optText text-md">AI Code Review</div>
        </div>
  
        {/* Cloud Security */}
        <div
          className={` marginBelowHelpSec flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Cloud Security' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption('Cloud Security')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Cloud Security' ? selectedHome : cloud} alt="Cloud Security Icon" />
          </div>
          <div className="optText text-md">Cloud Security</div>
        </div>
  
        {/* How to Use */}
        <div
          className={` marginBelowHelpSec flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'How to Use' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption('How to Use')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'How to Use' ? selectedHome : how} alt="How to Use Icon" />
          </div>
          <div className="optText text-md">How to Use</div>
        </div>
  
        {/* Settings */}
        <div
          className={` marginBelowHelpSec flex flex-row gap-2 rounded-md cursor-pointer ${
            selectedOption === 'Settings' ? 'bg-[#1570EF] text-white' : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption('Settings')}
        >
          <div className="flex flex-col justify-center">
            <img src={selectedOption === 'Settings' ? selectedHome : gear} alt="Settings Icon" />
          </div>
          <div className="optText text-md">Settings</div>
        </div>
      </div>

      <div className=''>
        <div className=' marginBelowHelpBottom flex flex-row gap-2 rounded-md'>
          <div className='flex flex-col justify-center'><img src={support}/></div>
          <div className=' optText text-md'>Support</div>
        </div>
        <div className=' marginBelowHelpBottom flex flex-row gap-2 rounded-md' onClick={logoutFunc}>
          <div className='flex flex-col justify-center'><img src={logout}/></div>
          <div className=' optText text-md'>Logout</div>
        </div>
      </div>


    </div>

  

      

    <div className='border border-[#E9EAEB] rightNav flex flex-col'>
    {/* Below Mobile Navbar*/}
    <div className='mobNav'><MobileNav/></div>
    {/* Above Mobile Navbar */}
        <div className='border border-[#E9EAEB] upperRight flex flex-col'>
            <div className='repoRefreshFlexDiv'>
              <div className='flex flex-col gap-0.5 '>
                <div className='repoText font-inter'>Repositories</div>
                <div className='repoDetailText font-inter'>33 total repositories </div>
              </div>
              <div className="flex flex-row gap-3  marginRefreshMob">
      {/* Refresh All Button */}
      <div className='flex flex-col justify-center'>
      <div
        className={`flex flex-row gap-1 btnRight rounded-md parentRefresh ${
          selectedAction === 'Refresh All' ? 'bg-blue-500 text-white' : 'bg-white text-black border border-[#D5D7DA]'
        }`}
        onClick={() => setSelectedAction('Refresh All')}
      >
        <div className="flex flex-col justify-center">
          <img src={refreshAll} alt="Refresh All" />
        </div>
        <div className="flex flex-col justify-center refreshText">Refresh All</div>
      </div>
      </div>

      {/* Add Repository Button */}
      <div className='flex flex-col justify-center'>
      <div
        className={`flex flex-row gap-1 btnRight rounded-md parentRepo ${
          selectedAction === 'Add Repository' ? 'bg-blue-500 text-white' : 'bg-white text-black border border-[#D5D7DA]'
        }`}
        onClick={() => setSelectedAction('Add Repository')}
      >
        <div className="flex flex-col justify-center">
          <img src={repo} alt="Add Repository" />
        </div>
        <div className="flex flex-col justify-center refreshText">Add Repository</div>
      </div>
      </div>
    </div>
            </div>


            {/*search option*/}


            <div className='border border-[#D5D7DA] searchBar flex flex-row gap-2'>
      {/* Search Icon */}
      <div className=''>
        <img src={search} alt="Search Icon" />
      </div>

      {/* Search Input */}
      <input
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search Repositories"
      className="px-2 py-1"
      style={{
        width: "100%",
        outline: "none", // Removes the default outline when focused
        userSelect: "none", // Prevents text selection
      }}
    />
    </div>


        </div>
        <div className='lowerRight border border-danger-900'>
  {filteredData.length === 0 ? (
    <div className='flex flex-row justify-center'>No repositories found</div>
  ) : (
    filteredData.map((data, index) => (
      <CardsComp
        key={index}
        name={data.name}
        access={data.access}
        technology={data.technology}
        fileSize={data.fileSize}
        lastUpdated={data.lastUpdated}
      />
    ))
  )}
</div>

    </div>
   
      {/*<ToastContainer />*/}
    </div>
    <ToastContainer />
    </>
  );
}

export default RepositoryComp;
