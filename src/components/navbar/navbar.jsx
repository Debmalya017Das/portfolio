import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import Lc from "../../assets/leetcodegif1.gif"
import gh from "../../assets/github (1).gif"
import Li from "../../assets/Linkedin.gif"


function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full p-4 bg-white/10 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-12">
        {/* <div className="text-white font-bold text-xl">Portfolio</div>         */}
        <nav className="w-full flex justify-center">
          <ul className="flex space-x-6">
             <Link to="https://leetcode.com/u/Debmalya_017/" className="flex items-center">
          <img 
            src={Lc} 
            alt="Brand Logo" 
            className="h-14 w-auto" // Adjust height as needed
          />
        </Link>
         <Link to="https://github.com/Debmalya017Das" className="flex items-center">
          <img 
            src={gh} 
            alt="Brand Logo" 
            className="h-12 w-auto pr-2" // Adjust height as needed
          />
        </Link>
         <Link to="https://www.linkedin.com/in/debmalya-das-b1b168247/" className="flex items-center">
          <img 
            src={Li} 
            alt="Brand Logo" 
            className="h-12 w-auto" // Adjust height as needed
          />
        </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import Lc from "../../assets/leetcodegif2.gif"
// import gh from "../../assets/github.gif"
// import Li from "../../assets/Linkedin1.gif"

// function Navbar() {
//   return (
//     <div className="fixed top-0 left-0 w-full p-4 bg-white/10 backdrop-blur-md backdrop-saturate-150 border-b border-white/20 shadow-lg z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <nav>
//            <div className="text-white font-bold text-xl mb-4 md:mb-0">Brand</div>
//           <ul className="flex space-x-6">
//              {/* Logo with GIF */}
//         <Link to="https://leetcode.com/u/Debmalya_017/" className="flex items-center">
//           <img 
//             src={Lc} 
//             alt="Brand Logo" 
//             className="h-16 w-auto" // Adjust height as needed
//           />
//         </Link>
//          <Link to="https://leetcode.com/u/Debmalya_017/" className="flex items-center">
//           <img 
//             src={gh} 
//             alt="Brand Logo" 
//             className="h-16 w-auto" // Adjust height as needed
//           />
//         </Link>
//          <Link to="https://leetcode.com/u/Debmalya_017/" className="flex items-center">
//           <img 
//             src={Li} 
//             alt="Brand Logo" 
//             className="h-16 w-auto" // Adjust height as needed
//           />
//         </Link>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;