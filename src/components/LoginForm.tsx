import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthInput } from '../types';
type Props = {
  isLoading: boolean;
  onSubmit: (input: AuthInput) => void;
};

const LoginForm: React.FC<Props> = ({ isLoading, onSubmit }: Props) => {
  const [input, setInput] = useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <Form onSubmit={handleSubmit} className="p-3 bg-light">
      <h4 className="mb-3 text-center">Login</h4>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" value={input.email} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
        />
      </Form.Group>
      <div className="text-center">
        <Button className="mt-4" type="submit" disabled={isLoading}>
          LOG IN
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
