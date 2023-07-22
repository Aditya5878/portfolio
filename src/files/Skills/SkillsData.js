


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaCode } from 'react-icons/fa';
const SkillData = [
    {
      id: 1,
      title: "Web Development",
      // list of skills
      description: [
        { text: "HTML", icon: <FaHtml5 /> },
        { text: "CSS", icon: <FaCss3Alt /> },
        { text: "JavaScript", icon: <FaJs /> },
        { text: "React", icon: <FaReact /> },
        { text: "Bootstrap", icon: <FaBootstrap /> },
      ]
    },
    {
      id: 2,
      title: "Programming",
      // list of skills
      description: [
        { text: "C++", icon: <FaCode /> },
        { text: "C", icon: <FaCode /> },
      ]
    },
    {
      id: 3,
      title: "Tools & Technologies",
      // list of skills
      description: [
         
        { text: "Solid Edge", icon: < none/> },
        // { text: "Adobe Photoshop", icon: <FaCode /> },
        // { text: "Adobe Illustrator", icon: <FaCode /> },
        // { text: "Adobe InDesign", icon: <FaCode /> },
      ]
    }
  ];

    export default SkillData;