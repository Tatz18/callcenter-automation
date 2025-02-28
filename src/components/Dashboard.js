import React from 'react';
import styled from 'styled-components';

// Sample avatar image (replace with actual path or URL)
import userAvatar from '../assets/images/avatar.jpg';

const DashboardContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.mainBackground};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow};
`;

const Header = styled.h2`
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  background: #FFFFFF;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.borderColor};
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
`;

const CampaignsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const CampaignCard = styled.div`
  background: #FFFFFF;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.borderColor};
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
  color: ${props => props.theme.textColor};
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Dashboard = () => (
  <DashboardContainer className="container">
    <UserInfo>
      <Avatar src={userAvatar} alt="User Avatar" />
      <span>John Doe</span>
    </UserInfo>
    <Header>Your Total Revenue</Header>
    <StatsContainer>
      <StatCard>
        <h3>New Subscriptions</h3>
        <p>22 <span style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>(+15% compared to last week)</span></p>
        <GradientText>View Details</GradientText>
      </StatCard>
      <StatCard>
        <h3>New Orders</h3>
        <p>320 <span style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>(+4% compared to last week)</span></p>
        <GradientText>Analyze</GradientText>
      </StatCard>
      <StatCard>
        <h3>Avg. Order Revenue</h3>
        <p>$1,080 <span style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>(+8% compared to last week)</span></p>
        <GradientText>Improve</GradientText>
      </StatCard>
    </StatsContainer>
    <Header>Recent Campaigns</Header>
    <CampaignsContainer>
      <CampaignCard>
        <p>Draft 2</p>
        <p>10 Simple Steps to Revolutionize Workflows with Our Product</p>
        <p style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>Start: Not Started | Last updated: Apr 10, 2023</p>
        <GradientButton>Add Campaign</GradientButton>
      </CampaignCard>
      <CampaignCard>
        <p>In Progress 2</p>
        <p>Boost Your Performance: Start Using Our Amazing Product</p>
        <p style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>Start: Jun 1, 2023 | Ends: Aug 1, 2023</p>
        <GradientButton>View Progress</GradientButton>
      </CampaignCard>
      <CampaignCard>
        <p>Archived 1</p>
        <p>The Power of Our Product: A New Era in SaaS</p>
        <p style={{ color: props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1' }}>Ended: Jul 11, 2023 | Last updated: Apr 10, 2023</p>
        <GradientButton>View Archive</GradientButton>
      </CampaignCard>
    </CampaignsContainer>
  </DashboardContainer>
);

export default Dashboard;