import Misson from "./Misson";
import Results from "./Results";
const steps=[
    {
      id: '1',
      message: 'Hi I am chatbot',
      trigger: '2',
    },
    {
      id: '2',
      message:"What would you like to know about us",
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
        
       
      ],
      
      
    },
    {id:'7',
     message:"Great! Click on one of the year to know about results",
     trigger:'8'
  
  
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
component:<Misson/>,
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