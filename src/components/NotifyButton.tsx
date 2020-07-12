import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { notify } from '../actions/notify';
import { successToast, errorToast } from '../utils/toast';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    try {
      await dispatch(
        notify({
          name: 'Jess Anthony G. Compacion',
          email: 'jagcompacion@gmail.com',
          repoUrl: 'https://github.com/jagcompacion/devices',
          message: 'Im finished',
        }),
      );
      successToast('Notify success');
      setLoading(false);
    } catch (err) {
      errorToast(err.toString());
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleSubmit} variant="light" disabled={isLoading}>
      NOTIFY
    </Button>
  );
};

export default Login;
