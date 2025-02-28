import React from 'react';
import styled from 'styled-components';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const AnalyticsContainer = styled.div`
  padding: 20px;
  background: #F8F9FC;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ChartPlaceholder = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  height: 200px;
  margin: 20px 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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

const GradientText = styled.span`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
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

const Analytics = () => (
  <AnalyticsContainer className="container">
    <UserInfo>
      <Avatar src={userAvatar} alt="User Avatar" />
      <span>John Doe</span>
    </UserInfo>
    <h2>Analytics</h2>
    <ChartPlaceholder>Calls Made: 50 | Success Rate: <GradientText>80%</GradientText></ChartPlaceholder>
    <ChartPlaceholder>Team Performance (Placeholder)</ChartPlaceholder>
    <GradientButton>Generate Report</GradientButton>
  </AnalyticsContainer>
);

export default Analytics;