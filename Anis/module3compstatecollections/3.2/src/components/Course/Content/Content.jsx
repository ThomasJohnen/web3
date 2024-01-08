import Part from "components/Course/Content/Part/Part"




const Content=({parts})=>{
    const total=parts.reduce((add,part)=>add+part.exercises,0)

return (
    <div>
       
        {parts.map((part) => 
         <Part name={part.name} number={part.exercises} key={part.id}/> 
         
        )}
        
       total={total}
         
     


    </div>
)


}



export default Content