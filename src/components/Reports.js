import React, { useState } from 'react';
import styled from 'styled-components';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const ReportsContainer = styled.div`
  padding: 20px;
  background: #F8F9FC;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Select = styled.select`
  background: #E0E0E0;
  color: #333;
  border: none;
  padding: 8px;
  border-radius: 12px;
  margin: 10px 0;
  font-size: 14px;
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

const Reports = () => {
  const [role, setRole] = useState('User');

  return (
    <ReportsContainer className="container">
      <UserInfo>
        <Avatar src={userAvatar} alt="User Avatar" />
        <span>John Doe</span>
      </UserInfo>
      <h2>Reports</h2>
      <Select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </Select>
      <p style={{ color: '#666' }}>
        {role === 'User' ? 'User-level report data' : 'Admin-level report data'}
      </p>
      <GradientButton>Download Report</GradientButton>
    </ReportsContainer>
  );
};

export default Reports;