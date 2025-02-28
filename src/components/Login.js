import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => props.theme.mainBackground};
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
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 12px;
  background: #FFFFFF;
  color: ${props => props.theme.textColor};
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
  color: ${props => props.theme.textColor === '#333' ? '#666' : '#B0B0D1'};
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
  color: ${props => props.theme.textColor};
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login (replace with actual API call)
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true'); // Simple local storage for demo
      navigate('/'); // Redirect to dashboard silently
    }
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <UserInfo>
          <Avatar src={userAvatar} alt="User Avatar" />
          <span>John Doe</span>
        </UserInfo>
        <Title>Log In</Title>
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
          <GradientButton type="submit">Log In</GradientButton>
        </form>
        <LinkText>
          Don’t have an account? <a href="/signup">Sign up</a>
        </LinkText>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;