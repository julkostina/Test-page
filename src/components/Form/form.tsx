import React from "react";
import "./form.scss";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import { TextField } from "@mui/material";
const FormELement: React.FC = () => {
  const [errors, setErrors] = React.useState({});
  return (
    <Form
      className="form-container"
      errors={errors}
        onClearErrors={setErrors}
        onSubmit={async (event) => {
          event.preventDefault();
          console.log(event);
          const formData = new FormData(event.currentTarget);
          const value = formData.get('url') as string;
          const response = await submitForm(value);
          const serverErrors = {
            url: response.error,
          };
          setErrors(serverErrors);
        }}
    >
      <Field.Root>
        <Field.Control
          type="text"
          required
          placeholder="Enter your Name"
        />
        <Field.Error />
      </Field.Root>
      <Field.Root>
        <Field.Control
          type="email"
          required
          placeholder="Enter your Email Address"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <Field.Error />
      </Field.Root>
      <Field.Root>
        <TextField
          className="text-field"
          fullWidth
          sx={{
            backgroundColor: "rgba(65, 162, 151, 1)",
            outline: "none",
            border: "none",
            borderRadius: "27.5px",
            "& .MuiOutlinedInput-root": {
                padding:"0px",
              "& fieldset": {
                border: "none", 
              },
            },
          }}
          required
          variant="outlined"
          placeholder="Your Message"
          multiline
          rows={5}
        />
        <Field.Error/>
      </Field.Root>
      <button disabled={false} type="submit">
        Send
      </button>
    </Form>
  );
};
async function submitForm(value: string) {
  // Mimic a server response
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  try {
    const url = new URL(value);

    if (url.hostname.endsWith("example.com")) {
      return { error: "The example domain is not allowed" };
    }
  } catch {
    return { error: "This is not a valid URL" };
  }

  return { success: true };
}
export default FormELement;
