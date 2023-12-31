import Misson from "./Misson";
import Results from "./Results";
import Research from "./Research";
const steps=[
    {
      id: '1',
      message: 'Hi I am chatbot,what is your name',
      trigger: 'user',
    },
    {
        id:'user',
        user:true,
        trigger:'name'
    },
    {
        id:'name',
        message:'Hi {previousValue},nice to meet you how may i help you?',
        trigger:'6'
    },

    {
      id: '2',
      message:"What would you like me to do",
     trigger:'6'
    },
    {
      id: '3',
      message: 'Our Misson',
      trigger: 'Misson',
    },
    {
      id: '4',
      message: 'About us',
      trigger:'2'
      
      
    },
    {
      id: '5',
      message: 'Results',
      trigger:'2'
      
    },
    {
      id: '6',
    
      options: [
        { value: 1, label: 'About', trigger: '4' },
       
        { value: 2, label: 'Misson', trigger: 'Misson' },
        { value: 3, label: 'Results', trigger: '7' },
        { value: 4, label: 'Blogs', trigger: 'SciAstra' },
        { value: 5, label: 'Courses', trigger: 'Courses' },
        { value: 6, label: 'Research Institutes ', trigger: 'Insti' },
        {value:8,label:'Prerequiste for enrolling? ' ,trigger:'requiste'}
       
      ],
      
      
    },
{
    id:'requiste',
    message:"No,there is no Prerequiste for enrolling in our courses",
    trigger:'2',
},
    {id:'Insti',
message:"Sure,Here are some top Research Institutes In India",

trigger:'showInsti'},
    {id:'7',
     message:"Great! Click on one of the year to know about results",
     trigger:'8'
  
  
  },{
    id:'showInsti',
    component:<Research/>,
    trigger:'2',
  }
  ,
  {
    id:'8',
    options:[
         { value: 1, label: '2022', trigger: '9' },
       
        { value: 2, label: '2021', trigger: '10' },
        { value: 3, label: '2023', trigger: '11' },

        
    ]
  }
  ,{
    id:'9',
    message:"sure here are some best results from the year 2022",
    trigger:'12'
  
  },
  {
    id:'10',
    message:"Sure Here are some best results from year 2021",
    trigger:'12'
  },
  {
    id:'11',
    message:"Sure Here are some best results from year 2023",
    trigger:'12',

  },
{
    id:'12',
    component:<Results     />,
    trigger:'2'
},{
    id:'Misson',
    message:"Sure here is our misson for 2024",
    trigger:'misson-message'
},
{id:"misson-message",
message:"SciAstra aims to diversify scientific career paths in India, offering specialized courses in Physics and Biology for aspiring astrophysicists and medical researchers respectively. Our goal is to ignite passion and curiosity beyond traditional careers, empowering individuals to contribute significantly to fields like astrophysics and medical research. Join us in reshaping science education, inspiring a new generation of diverse scientists driving innovative discoveries and impactful careers beyond engineering and medicine.",
trigger:'2'},
{
    id:'SciAstra',
    message:"here are some top blogs",
    trigger:'2'
}

,{
    id:'Courses',
    message:"courses",
    trigger:'2'
}







  ];
  export default steps