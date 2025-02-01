// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrolled(scrollTop > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     // Clear user session if stored in localStorage/sessionStorage
//     localStorage.removeItem("user"); // If you're using localStorage
//     sessionStorage.removeItem("user"); // If sessionStorage is used

//     // Redirect to login page
//     navigate("/login");
//   };

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
//         }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             TWO STEP &nbsp;
//             <span className='sm:block hidden'> | Authentication</span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${active === nav.title ? "text-white" : "text-secondary"
//                 } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//           {/* Logout Button */}
//           <li
//             className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
//             onClick={handleLogout}
//           >
//             Logout
//           </li>
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
//                     }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//               {/* Logout Button in Mobile Menu */}
//               <li
//                 className='font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white'
//                 onClick={() => {
//                   setToggle(false);
//                   handleLogout();
//                 }}
//               >
//                 Logout
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track user login

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Check if user is logged in (based on localStorage/sessionStorage)
    const user = localStorage.getItem("user") || sessionStorage.getItem("user");
    setIsAuthenticated(!!user); // Convert to boolean

    // Scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setIsAuthenticated(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            TWO STEP &nbsp;
            <span className="sm:block hidden"> | Authentication</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Show Login & Signup when not logged in */}
          {!isAuthenticated ? (
            <>
            <Link to='/documentation' >Documentation</Link>
              <li
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </li>
              <li
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </li>
            </>
          ) : (
            // Show Logout button when logged in
            <li
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </li>
          )}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Show Login & Signup in Mobile Menu when not logged in */}
              {!isAuthenticated ? (
                <>
                  <li
                    className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                    onClick={() => {
                      setToggle(false);
                      navigate("/login");
                    }}
                  >
                    Login
                  </li>
                  <li
                    className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                    onClick={() => {
                      setToggle(false);
                      navigate("/signup");
                    }}
                  >
                    Signup
                  </li>
                </>
              ) : (
                // Show Logout button when logged in
                <li
                  className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white"
                  onClick={() => {
                    setToggle(false);
                    handleLogout();
                  }}
                >
                  Logout
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

