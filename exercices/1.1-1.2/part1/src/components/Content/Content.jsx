import Part from '../Part/Part.jsx';

const Content = (props) => {
    return (
        <div>
         <Part parts={props.parts[0]} exercises={props.exercises[0]} />
         <Part parts={props.parts[1]} exercises={props.exercises[1]} />
         <Part parts={props.parts[2]} exercises={props.exercises[2]} />
        </div>
        
    )

};

export default Content;