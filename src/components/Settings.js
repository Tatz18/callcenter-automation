import React from 'react';
import styled from 'styled-components';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const SettingsContainer = styled.div`
  padding: 20px;
  background: #F8F9FC;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const IntegrationItem = styled.div`
  background: #FFFFFF;
  padding: 12px;
  margin: 8px 0;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #E0E0E0;
`;

const GradientButton = styled.button`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background: linear-gradient(90deg, #5A3ECC, #00A8CC);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Settings = () => (
  <SettingsContainer className="container">
    <UserInfo>
      <Avatar src={userAvatar} alt="User Avatar" />
      <span>John Doe</span>
    </UserInfo>
    <h2>Settings</h2>
    <h3>Integrations</h3>
    <IntegrationItem>WhatsApp - Connected</IntegrationItem>
    <IntegrationItem>Email - Connected</IntegrationItem>
    <IntegrationItem>SMS - Connected</IntegrationItem>
    <GradientButton>Manage Integrations</GradientButton>
  </SettingsContainer>
);

export default Settings;