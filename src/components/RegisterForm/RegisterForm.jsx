import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="name" placeholder="Username" autoComplete="username"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" autoComplete="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete="current-password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
      <p>Have an account?  
        <NavLink to="/login">
        Sign in
      </NavLink>
      </p>
    </Form>
  );
};
