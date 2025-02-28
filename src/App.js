import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import FollowUps from './components/FollowUps';
import Analytics from './components/Analytics';
import Reports from './components/Reports';
import Support from './components/Support';
import Settings from './components/Settings';
import Signup from './components/Signup';
import Login from './components/Login';

// Sample avatar image (replace with actual path or URL)
import userAvatar from './assets/images/avatar.jpg';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background: ${props => props.theme.sidebarBackground};
  padding: 20px;
  border-right: 1px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.shadow};
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme.borderColor};
  }
`;

const Header = styled.div`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  padding: 15px 20px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-radius: 0 0 12px 0;
`;

const GradientNavLink = styled(Link)`
  display: block;
  padding: 12px 16px;
  margin: 10px 0;
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background: linear-gradient(90deg, #5A3ECC, #00A8CC);
  }
`;

const ThemeToggleButton = styled.button`
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.buttonText};
  border: none;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background: ${props => props.theme.buttonHover};
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

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background: ${props => props.theme.mainBackground};
`;

const themes = {
  light: {
    sidebarBackground: '#FFFFFF',
    mainBackground: '#F8F9FC',
    borderColor: '#E0E0E0',
    textColor: '#333',
    buttonBackground: '#E0E0E0',
    buttonText: '#333',
    buttonHover: '#D0D0D0',
    shadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  dark: {
    sidebarBackground: '#1A1A2E',
    mainBackground: '#1A1A2E',
    borderColor: '#2D2D44',
    textColor: '#FFFFFF',
    buttonBackground: '#2D2D44',
    buttonText: '#FFFFFF',
    buttonHover: '#3A3A5A',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
};

function App() {
  const [theme, setTheme] = useState('light');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              isAuthenticated ? (
                <AppContainer>
                  <Sidebar>
                    <UserInfo>
                      <Avatar src={userAvatar} alt="User Avatar" />
                      <span>John Doe</span>
                    </UserInfo>
                    <GradientNavLink to="/">Dashboard</GradientNavLink>
                    <GradientNavLink to="/leads">Leads</GradientNavLink>
                    <GradientNavLink to="/follow-ups">Follow-Ups</GradientNavLink>
                    <GradientNavLink to="/analytics">Analytics</GradientNavLink>
                    <GradientNavLink to="/reports">Reports</GradientNavLink>
                    <GradientNavLink to="/settings">Settings</GradientNavLink>
                    <GradientNavLink to="/support">Support</GradientNavLink>
                    <ThemeToggleButton onClick={toggleTheme}>
                      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                    </ThemeToggleButton>
                  </Sidebar>
                  <div style={{ flex: 1 }}>
                    <Header>TeleCRM Clone</Header>
                    <MainContent>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/leads" element={<Leads />} />
                        <Route path="/follow-ups" element={<FollowUps />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/support" element={<Support />} />
                      </Routes>
                    </MainContent>
                  </div>
                </AppContainer>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;