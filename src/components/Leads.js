import React, { useState } from 'react';
import styled from 'styled-components';

// Sample avatar image
import userAvatar from '../assets/images/avatar.jpg';

const LeadsContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.mainBackground};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow};
`;

const LeadTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.theme.borderColor};
`;

const TableHeader = styled.th`
  background: ${props => props.theme.textColor === '#333' ? '#E0E0E0' : '#3A3A5A'};
  padding: 12px;
  color: ${props => props.theme.textColor};
  font-weight: 600;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  &:hover {
    background: ${props => props.theme.textColor === '#333' ? '#F5F7FA' : '#3A3A5A'};
  }
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.textColor};
`;

const GradientButton = styled.button`
  background: linear-gradient(90deg, #6B48FF, #00D4FF);
  color: white;
  border: none;
  padding: 6px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: linear-gradient(90deg, #5A3ECC, #00A8CC);
  }
`;

const Select = styled.select`
  background: ${props => props.theme.textColor === '#333' ? '#E0E0E0' : '#3A3A5A'};
  color: ${props => props.theme.textColor};
  border: none;
  padding: 8px;
  border-radius: 12px;
  font-size: 14px;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.textColor};
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

const Leads = () => {
  const [leads] = useState([
    { id: 1, name: 'John Doe', phone: '+1-555-123-4567', status: 'New', notes: 'Interested in product A' },
    { id: 2, name: 'Jane Smith', phone: '+1-555-987-6543', status: 'Follow-Up', notes: 'Callback tomorrow' },
    { id: 3, name: 'Bob Johnson', phone: '+1-555-456-7890', status: 'Closed', notes: 'Sale completed' },
  ]);
  const [callMethod, setCallMethod] = useState('VoIP');
  const [selectedLead, setSelectedLead] = useState(null);

  const handleCall = (phone) => alert(`Calling ${phone} via ${callMethod}...`);
  const handleCommunication = (type, phone) => alert(`Sending ${type} to ${phone}...`);
  const openLeadDetails = (lead) => setSelectedLead(lead);
  const closeModal = () => setSelectedLead(null);

  return (
    <LeadsContainer className="container">
      <UserInfo>
        <Avatar src={userAvatar} alt="User Avatar" />
        <span>John Doe</span>
      </UserInfo>
      <h2>Leads</h2>
      <div>
        <label style={{ marginRight: '10px', color: props => props.theme.textColor }}>Calling Method: </label>
        <Select value={callMethod} onChange={(e) => setCallMethod(e.target.value)}>
          <option value="SIM-based">SIM-based</option>
          <option value="Cloud Telephony">Cloud Telephony</option>
          <option value="VoIP">VoIP</option>
        </Select>
      </div>
      <LeadTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell onClick={() => openLeadDetails(lead)} style={{ cursor: 'pointer' }}>
                {lead.name}
              </TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>
                <GradientButton onClick={() => handleCall(lead.phone)}>Call</GradientButton>
                <GradientButton onClick={() => handleCommunication('WhatsApp', lead.phone)}>WhatsApp</GradientButton>
                <GradientButton onClick={() => handleCommunication('Email', lead.phone)}>Email</GradientButton>
                <GradientButton onClick={() => handleCommunication('SMS', lead.phone)}>SMS</GradientButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </LeadTable>
      {selectedLead && (
        <Modal>
          <h3>{selectedLead.name}</h3>
          <p><strong>Phone:</strong> {selectedLead.phone}</p>
          <p><strong>Status:</strong> {selectedLead.status}</p>
          <p><strong>Notes:</strong> {selectedLead.notes}</p>
          <GradientButton onClick={closeModal}>Close</GradientButton>
        </Modal>
      )}
    </LeadsContainer>
  );
};

export default Leads;