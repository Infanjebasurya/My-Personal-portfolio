// import React, { useState, useEffect } from 'react';
// import { portfolioData } from '../data/portfolioData';

// const SkillBar = ({ name, level }) => {
//   const [width, setWidth] = useState('0%');

//   useEffect(() => {
//     setTimeout(() => {
//       setWidth(`${level}%`);
//     }, 100);
//   }, [level]);

//   return (
//     <div className="mb-6">
//       <div className="flex justify-between mb-2">
//         <span className="text-gray-800 font-medium">{name}</span>
//         <span className="text-gray-600">{level}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-3">
//         <div 
//           className="skill-bar h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" 
//           style={{ width: width }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">My Skills</h2>
        
//         <div className="max-w-3xl mx-auto">
//           {portfolioData.skills.map((skill, index) => (
//             <SkillBar 
//               key={index} 
//               name={skill.name} 
//               level={skill.level} 
//             />
//           ))}
//         </div>
        
//         <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-4xl text-indigo-600 mb-3">🚀</div>
//             <h3 className="font-semibold mb-2">Fast</h3>
//             <p className="text-gray-600">Fast load times and lag free interaction</p>
//           </div>
          
//           <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-4xl text-indigo-600 mb-3">📱</div>
//             <h3 className="font-semibold mb-2">Responsive</h3>
//             <p className="text-gray-600">My layouts work on any device</p>
//           </div>
          
//           <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-4xl text-indigo-600 mb-3">💡</div>
//             <h3 className="font-semibold mb-2">Intuitive</h3>
//             <p className="text-gray-600">Strong preference for easy to use UX</p>
//           </div>
          
//           <div className="text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//             <div className="text-4xl text-indigo-600 mb-3">🔥</div>
//             <h3 className="font-semibold mb-2">Dynamic</h3>
//             <p className="text-gray-600">Websites don't have to be static</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;