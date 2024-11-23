import image1 from "/a1.jpg";
import image2 from "/a6.jpg";
import image3 from "/a3.jpg";
import image4 from "/a5.jpg";
import { motion } from "framer-motion";

const Data = [
    {
      image:image1,
      title: "Market Research & Use Case Generation Multi-Agent architecture system",
      description:"A Multi-Agent architecture system that generates relevant AI and Generative AI (GenAI) use cases for the retail sector. The system conducts market research, understands the industry and product, and provide AI/ML solutions which focuses on enhancing operations and customer experiences.",
      stack: ['Python', 'Beautiful Soup', 'LangChain', 'Transformers', 'Faiss'],
      link:"https://drive.google.com/drive/folders/1kTrK8t-38ofApxEXompTvL-gCgf86gzB?usp=drive_link"
    },
    {
      image:image2,
      title: "AI facial recognition system",
      description:" A facial recognition system that uses face-api to determine the current emotion the user.",
      stack: ['Angular', 'Typescript', 'Face.api'],
      link:"https://github.com/iam-ogomide/AI-Facial-recognition"
    },
    {
      image:image3,
      title: "Loan Approval Prediction System",
      description:"A machine learning project built with machine learning models that determines which of the customers will have their loans approved",
      stack: ['Python', 'Machine Learning'],
      link:"https://github.com/iam-ogomide/Loan-Approval-Prediction-System"
    },
    {
        image:image4,
        title: "Cardiovascular Disease Prediction Model",
        description:"A machine learning project built with machine learning models that succesfully identifies patients with cardiovascular disease",
        stack: ['Python', 'Machine Learning'],
        link:"https://github.com/iam-ogomide/Cardiovascular-Disease-Prediction"
      },
    
  ];

  const ScrollReveal = ({children}) => {
    return (
      <motion.div
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.8}}
      >{children}</motion.div>
    )
  }

  const ProjectCard = ({project}) => {
    return (
      <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>
  
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
            
          </div>
  
          <div className="flex flex-wrap gap-5">
            {
              project.stack.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>
          <a href={project.link}>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Code Base
          </button>
          </a>
          
        </div>
      </div>
      </ScrollReveal>
    )
  }

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">

      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          Data.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
    
  )
}

export default Projects