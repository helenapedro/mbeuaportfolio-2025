interface ProjectTechnologiesProps {
     technologies: string[];
   }
   
   export const ProjectTechnologies: React.FC<ProjectTechnologiesProps> = ({ technologies }) => {
     return (
       <div className="mb-4">
         <div className="flex flex-wrap gap-2">
           {technologies.map((tech, i) => (
             <span
               key={i}
               className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm transform transition-transform hover:scale-105"
             >
               {tech}
             </span>
           ))}
         </div>
       </div>
     );
   };