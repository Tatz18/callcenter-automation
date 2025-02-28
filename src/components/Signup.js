import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Sample avatar image (optional, can be used for future user profile)
import userAvatar from '../assets/images/avatar.jpg';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #F8F9FC;
`;

const FormWrapper = styled.div`
  background: #FFFFFF;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  background: #FFFFFF;
  color: #333;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #6B48FF;
    box-shadow: 0 0 0 3px rgba(107, 72, 255, 0.2);
  }
`;

const GradientButton = styled.button`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
  width: 100%;
  &:hover {
    background: linear-gradient(90deg, #5A3ECC, #00A8CC);
  }
`;

const LinkText = styled.p`
  margin-top: 15px;
  color: #666;
  font-size: 14px;
  a {
    color: #00D4FF;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true');
      alert('Signup successful! Redirecting to login...');
      navigate('/login');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <SignupContainer>
      <FormWrapper>
        <UserInfo>
          <Avatar src={userAvatar} alt="User Avatar" />
          <span>John Doe</span>
        </UserInfo>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <GradientButton type="submit">Sign Up</GradientButton>
        </form>
        <LinkText>
          Already have an account? <a href="/login">Log in</a>
        </LinkText>
      </FormWrapper>
    </SignupContainer>
  );
};

export default Signup;