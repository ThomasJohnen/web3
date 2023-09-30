const Total = (props) => {

    
    return (
        <>
           <p><b>Il y a {props.total.reduce((a, b) => a + b, 0)} exercices</b></p>
        </>
    )
}

export default Total;