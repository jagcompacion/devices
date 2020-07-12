import React from 'react';
import { Button } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const LogoutButton: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => {
  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    history.push('/login');
  };

  return (
    <Button onClick={handleClick} variant="dark">
      LOGOUT
    </Button>
  );
};

export default withRouter(LogoutButton);
