import React from 'react';
import styled from 'styled-components';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const FollowUpsContainer = styled.div`
  padding: 20px;
  background: #F8F9FC;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ReminderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReminderItem = styled.li`
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
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
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

const FollowUps = () => {
  const reminders = [
    { id: 1, lead: 'John Doe', date: '2025-03-01', time: '10:00 AM' },
    { id: 2, lead: 'Jane Smith', date: '2025-03-02', time: '2:00 PM' },
  ];

  return (
    <FollowUpsContainer className="container">
      <UserInfo>
        <Avatar src={userAvatar} alt="User Avatar" />
        <span>John Doe</span>
      </UserInfo>
      <h2>Follow-Ups</h2>
      <ReminderList>
        {reminders.map((reminder) => (
          <ReminderItem key={reminder.id}>
            {reminder.lead} - {reminder.date} at {reminder.time}
            <GradientButton>Mark Done</GradientButton>
          </ReminderItem>
        ))}
      </ReminderList>
    </FollowUpsContainer>
  );
};

export default FollowUps;