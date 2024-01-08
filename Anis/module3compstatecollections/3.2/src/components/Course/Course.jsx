import Content from "./Content/Content"
import Header from "./Header/Header"


      
    
    const Course=({course})=>{

        const {name: courseName,parts:courseParts}=course;









        return (
            <div>
            <Header  course={courseName} />
            <Content parts={courseParts}/>
            
            </div>

        )
    }
      
      
      
      
      /*
      <Header  {... {course}} />
            <Content {...{part1,exercises1,part2,exercises2,part3,exercises3}} />
            <Total {...{exercises1,exercises2,exercises3}} />
            */
      
      
      
      
      export default Course
    