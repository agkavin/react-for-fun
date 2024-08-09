import PropTypes from "prop-types";
function Student(props) {
  return (
    <>
      <div className="student" >
        <h2>Name :{props.name}</h2>
        <h2>Age : {props.age}</h2>
        <h2>Student: {props.isStudent ? "Yes" : "No"}</h2>
      </div>
    </>
  );
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: true,
}
export default Student;
