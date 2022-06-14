import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* use of spread operator to spread all the key value pairs passed to input prop */}
    </div>
  );
};

export default Input;
