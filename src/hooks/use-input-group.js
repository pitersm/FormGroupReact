import { useState } from "react";

const useInputGroup = (validationSettings) => {
  const [fieldValue, setFieldValue] = useState("");
  const [isFieldTouched, setIsFieldTouched] = useState(false);

  const controlIsValid = validationSettings.validationFunction(fieldValue);
  const controlHasError = isFieldTouched && !controlIsValid;

  const changeHandler = (event) => {
    setFieldValue(event.target.value);
  };

  const reset = () => {
    setFieldValue("");
    setIsFieldTouched(false);
  };

  const formControl = {};
  formControl.fieldValue = fieldValue;
  formControl.setToTouched = (isTouched) => setIsFieldTouched(isTouched);
  formControl.hasError = controlHasError;
  formControl.isValid = controlIsValid;
  formControl.onBlur = () => setIsFieldTouched(true);
  formControl.changeHandler = changeHandler;
  formControl.inputClass = controlHasError
    ? "form-control invalid"
    : "form-control";
  formControl.errorMessage = validationSettings.errorMessage;
  formControl.reset = reset;

  return formControl;
};

export default useInputGroup;
