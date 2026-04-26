import  { useMemo } from 'react';
import { motion } from 'framer-motion';
import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import post3 from '../../assets/post3.png'
import post4 from '../../assets/post4.png'

const projects = [
  { 
    id: 1,  
    height: 'h-[300px]', 
    img: post1 
  },
  { 
    id: 2, 

    height: 'h-[450px]', 
    img: post3 
  },
  { 
    id: 3, 
     
    height: 'h-[250px]', 
    img: post2
  },
  { 
    id: 4, 

    height: 'h-[400px]', 
    img: post4
  },
];
const Posts = () => {
  const columns = useMemo(() => {
    const cols: (typeof projects)[] = [[], [], []];
    projects.forEach((item, index) => {
      cols[index % 3].push(item);
    });
    return cols;
  }, []);

  return (
    <section id="works" className="max-w-7xl mx-auto px-4 py-24 bg-white">
      <div className="mb-16">
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold font-sans">Portfolio</span>
        <h2 className="text-4xl font-bold tracking-tight mt-2 text-black">Culinary Projects</h2>
      </div>

      <div className="flex gap-4">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {column.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: colIdx * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${project.height} bg-gray-100`}
              >
                <img 
                  src={project.img} 
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2 text-white/70">Case Study 0{project.id}</p>
                  <h3 className="text-2xl font-bold text-white"></h3>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                  <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H5.5M11.3536 3.64645V9.5" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Posts;