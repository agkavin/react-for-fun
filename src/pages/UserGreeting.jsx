import proptypes from "prop-types";
export default function UserGreeting(props) {
    if(props.isLoggedIn){
    return(<>
    <h2 className="welcome-message">Welcome {props.username}</h2>
    </>)} 
    else{
    return(<>
    <h2 className="welcome-else-message">Welcome Guest</h2>
    </>)}
}

UserGreeting.propTypes = {
    isLoggedIn: proptypes.bool,
    username: proptypes.string
    
}

UserGreeting.defaultProps = {
    isLoggedIn: proptypes.bool,
    username: "Guest"
    
}