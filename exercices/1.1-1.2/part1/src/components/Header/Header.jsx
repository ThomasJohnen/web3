 import vinci from './vinci.png'
 const Header = (props) => {
    return (
        <>
            <img src={vinci} alt="vinci" />
            <h1>{props.course}</h1>
        </>
    )
}

export default Header