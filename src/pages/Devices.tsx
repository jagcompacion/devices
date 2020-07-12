import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevices } from 'actions/devices';
import { RootState } from '../types';
import NotifyButton from '../components/NotifyButton';
import LogoutButton from '../components/LogoutButton';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ff7043;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Footer = styled.div`
  background: #d76845;
`;

const Devices: React.FC = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state: RootState) => state.devices);
  useEffect(() => {
    dispatch(fetchDevices());
  }, []);
  return (
    <Wrapper>
      <Content>
        <div className="text-center">
          <h1>{devices.length}</h1>
          <div>
            DEVICES
            <br />
            ONLINE
          </div>
        </div>
      </Content>
      <Footer className="p-3 text-center">
        <NotifyButton /> <LogoutButton />
      </Footer>
    </Wrapper>
  );
};

export default Devices;
