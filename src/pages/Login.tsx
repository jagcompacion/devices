import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import LoginForm from 'components/LoginForm';
import styled from 'styled-components';
import { AuthInput } from 'types';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { errorToast } from '../utils/toast';

const ContainerWrapper = styled.div`
  height: 100%;
  background: #273238;
`;

const Login: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (input: AuthInput) => {
    setLoading(true);
    try {
      const response: any = await dispatch(login(input));
      const { accessToken } = response.payload;
      localStorage.setItem('accessToken', accessToken);
      setLoading(false);
      history.push('/');
    } catch (err) {
      errorToast(err.toString());
      setLoading(false);
    }
  };

  return (
    <ContainerWrapper>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default withRouter(Login);
