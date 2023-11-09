export default function UserValidation(values) {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Name is required";
  }

  if (!values.email || values.email === "") {
    errors.email = "Email is required";
  }

  if (!values.address || values.address === "") {
    errors.address = "Address is required";
  }

  if (!values.phone || values.phone === "") {
    errors.phone = "Phone is required";
  }

  return errors;
}
