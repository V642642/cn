export default function validate(values, inputRef) {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "First name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  }
  if (!values.companyname) {
    errors.companyname = "Companyname name is required";
  }
  if (!values.enquiry) {
    errors.enquiry = "Enquiry name is required";
  }
  if (!values.fullname) {
    inputRef.current[1].focus();
  } else if (!values.email) {
    inputRef.current[2].focus();
  } else if (!values.phone) {
    inputRef.current[3].focus();
  } else if (!values.companyname) {
    inputRef.current[4].focus();
  } else if (!values.enquiry) {
    inputRef.current[5].focus();
  }

  return errors;
}
