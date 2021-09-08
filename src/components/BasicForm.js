import FormInput from "./FormInput";
import useInputGroup from "../hooks/use-input-group";

const BasicForm = (props) => {
  const formGroup = [
    {
      fieldId: "name",
      fieldType: "text",
      fieldLabel: "First Name",
      inputClass: "form-control",
      ...useInputGroup({
        validationFunction: (value) => value.trim() !== "",
        errorMessage: "Name must be fulfilled!",
      }),
    },
    {
      fieldId: "lastName",
      fieldType: "text",
      fieldLabel: "Last Name",
      inputClass: "form-control",
      ...useInputGroup({
        validationFunction: (value) => value.trim() !== "",
        errorMessage: "Last name must be fulfilled!",
      }),
    },
    {
      fieldId: "email",
      fieldType: "email",
      fieldLabel: "E-Mail Address",
      inputClass: "form-control",
      ...useInputGroup({
        validationFunction: (value) => value.indexOf("@") > 0,
        errorMessage: "E-mail must be valid!",
      }),
    },
  ];

  const formIsValid = formGroup.every(formControl => formControl.isValid);

  const submitHandler = (event) => {
    event.preventDefault();

    if (formGroup.findIndex(formControl => formControl.hasError) > 0) {
      return;
    }
    else {
      formGroup.forEach(formControl => {
        formControl.reset();
      })
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        {formGroup.map((formControl) => {
          return <FormInput formControl={formControl} key={formControl.fieldId}></FormInput>;
        })}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
