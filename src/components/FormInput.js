const FormInput = (props) => {
  const control = props.formControl;
  return (
    <div className={control.inputClass}>
      <label htmlFor={control.fieldId}>{control.fieldLabel}</label>
      <input
        type={control.fieldType}
        id={control.fieldId}
        value={control.fieldValue}
        onBlur={control.onBlur}
        onChange={control.changeHandler}
      />
      {control.hasError && <p className="error-text">{control.errorMessage}</p>}
    </div>
  );
};

export default FormInput;
