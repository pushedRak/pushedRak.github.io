import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.main`
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const GraySection = styled(Section)`
  background-color: #eee;
`;

export const Introduction = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 24px;
`;

export const BackToBlogContainer = styled.nav`
  position: fixed;
  z-index: 10;
  top: 16px;
  left: 16px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const BackToBlogLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &:visited {
    color: inherit;
  }
`;

export const BackToBlogIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

export const TextFadeIn = styled.p`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in forwards;
`;

export const SecondText = styled.p`
  display: flex;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in forwards;
  animation-delay: 1s;
`;

export const Name = styled.span`
  color: #00f;
  font-weight: 500;
  margin-left: 8px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 32px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContactTitle = styled.p`
  font-weight: 700;
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;
`;

export const ContactIconImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${modalFadeIn} 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;

    &:hover {
      background: #555;
    }
  }
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  margin: 20px 0;

  button {
    background: none;
    border: none;
    color: ${props => props.isActive ? '#000' : '#666'};
    font-weight: ${props => props.isActive ? 'bold' : 'normal'};
    cursor: pointer;
    font-size: 14px;
    padding: 5px 10px;
    transition: all 0.3s ease;

    &:hover {
      color: #000;
    }
  }
`;

export const SideNav = styled.nav`
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const ContactSection = styled(Section)`
  padding: 5rem 15rem;
`;
