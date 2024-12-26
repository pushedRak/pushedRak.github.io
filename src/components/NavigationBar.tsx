'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 64px;
`;

const Nav = styled.nav<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e1e4e8;
  transition: transform 0.3s ease;
  z-index: 1000;
  transform: translateY(${props => props.$visible ? '0' : '-100%'});
`;

const Container = styled.div`
  max-width: 1012px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #24292e;
  text-decoration: none;

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: #24292e;
    text-decoration: none;
    font-size: 1rem;
    transition: font-weight 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    }

    &.active {
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.75);
    }
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio'
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  if(isPortfolio) {
    return null;
  }

  return (
    <>
      <Spacer />
      <Nav $visible={visible}>
        <Container>
          <Logo href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/logo.png" alt="logo" /> Rak Blog
          </Logo>
          <Menu>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/posts" className={pathname === '/posts' ? 'active' : ''}>Posts</Link>
            <Link href="/portfolio" className={pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
          </Menu>
        </Container>
      </Nav>
    </>
  );
}