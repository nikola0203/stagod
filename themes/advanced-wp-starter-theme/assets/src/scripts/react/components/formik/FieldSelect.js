import Select from 'react-select';
import { ErrorMessage, useField } from 'formik';
import TextError from './TextError';

function FieldSelect(props) {
  const { label, name, labelClass, placeholder, options, ...rest } = props;
  const [field, , helpers] = useField(name);

  const onChange = (selectedOption) => {
    helpers.setValue(selectedOption || null);
  };

  return (
    <div className="form-control mb-6">
      <label htmlFor={name} className={`text-black fw-bold mb-1 ${labelClass || ''}`}>
        {label}
      </label>
      <Select
        id={name}
        name={name}
        value={field.value} // Osigurava da vrednost bude kontrolisana
        placeholder={placeholder}
        onChange={onChange}
        options={options}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        noOptionsMessage={({ inputValue }) => `Nema rezultata za "${inputValue}"`}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default FieldSelect;
