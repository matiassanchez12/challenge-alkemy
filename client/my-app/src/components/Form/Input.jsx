import { useField } from "formik";
import { Form } from "react-bootstrap";

const Input = ({ type, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group style={{marginBottom: 20}}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <Form.Text className="text-muted">{meta.error}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default Input;
