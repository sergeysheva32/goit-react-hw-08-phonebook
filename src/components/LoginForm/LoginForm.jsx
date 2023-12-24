import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
    form.reset();
  };

  return (
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" autoComplete="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" autoComplete="current-password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign in
      </Button>
      <p>Don't have an account?  
        <NavLink to="/register">
        Sign up
      </NavLink>
      </p>
    </Form>
  );
};
