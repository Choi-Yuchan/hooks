//it has two parameters and could get a value and validator. validator should be a function.
 
export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => value.length <= 10;
  const name = useInput("", maxLength);
  return (
    <div className="App">
      <h1>Hi</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

