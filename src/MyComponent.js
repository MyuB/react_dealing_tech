import PropTypes from "prop-types";

const MyComponent = ({ name, children, favorNum }) => {
  return (
    <div>
      MyComponent name is {name} <br />
      value of children is {children} <br />
      my favourite number is {favorNum}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favorNum: PropTypes.number.isRequired,
};

export default MyComponent;
