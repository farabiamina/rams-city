import React from 'react';
import { useState, useEffect } from 'react';
import "./header.css";
import Logo from "../../svg/logoSvg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen])

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      const headerHeight = 120; // Adjust this value to the actual height of your fixed header

      // Calculate the adjusted scroll position
      const scrollPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    };

    const anchorLinks = document.getElementsByClassName('smooth-scroll');
    Array.from(anchorLinks).forEach((link) => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      Array.from(anchorLinks).forEach((link) => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <header>
      <nav className={`drop-down ${isMenuOpen ? 'open' : ''}`}>
        <a onClick={handleMenuClick} className="smooth-scroll" href="#benefits">Преимущества</a>
        <a onClick={handleMenuClick} className="smooth-scroll" href="#layouts">Планировки</a>
        <a onClick={handleMenuClick} className="smooth-scroll" href="#infrastructure">Инфраструктура</a>
        <a onClick={handleMenuClick} className="smooth-scroll" href="#gallery">Галерея</a>
        <a onClick={handleMenuClick} className="smooth-scroll" href="#purchase">Способы покупки</a>
        <span><b><a href="tel:+77072124444">+7 707 212-44-44</a></b></span>
      </nav>
      {isMenuOpen && (
          <div onClick={handleMenuClick} className='overlay'></div>
        )}
      <div className="inner">
        <Logo className="logo" />
        <nav>
          <a className="smooth-scroll" href="#benefits">Преимущества</a>
          <a className="smooth-scroll" href="#layouts">Планировки</a>
          <a className="smooth-scroll" href="#infrastructure">Инфраструктура</a>
          <a className="smooth-scroll" href="#gallery">Галерея</a>
          <a className="smooth-scroll" href="#purchase">Способы покупки</a>
        </nav>
        <div className="right">
          <span><a href="tel:+77072124444">+7 707 212-44-44</a></span>
        </div>
        <div onClick={handleMenuClick} className={`menu-icon ${isMenuOpen ? 'open' : ''}`} >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  )
}

export default Header;