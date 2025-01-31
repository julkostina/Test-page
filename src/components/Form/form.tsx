import React from "react";
import "./form.scss";
import { Field } from "@base-ui-components/react/field";
import { Form } from "@base-ui-components/react/form";
import { TextField } from "@mui/material";
const FormELement: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({});
  
  return (
    <Form
      className="form-container"
      errors={errors}
        onClearErrors={setErrors}
        onSubmit={async (event) => {
          event.preventDefault();
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
          onChange={(event) => setName(event.target.value)}
          required
          placeholder="Enter your Name"
        />
      </Field.Root>
      <Field.Root>
        <Field.Control
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          required
          placeholder="Enter your Email Address"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </Field.Root>
      <Field.Root>
        <TextField
          className="text-field"
          onChange={(event) => setMessage(event.target.value)}
          fullWidth
          required
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
          variant="outlined"
          placeholder="Your Message"
          multiline
          rows={5}
        />
      </Field.Root>
      <button disabled={false} type="submit">
        Send
      </button>
    </Form>
  );
};
async function submitForm(value: string) {
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
