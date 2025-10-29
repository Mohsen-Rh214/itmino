import React, { useState } from 'react';
import MegaMenu from './MegaMenu';
import HeaderTopBar from './HeaderTopBar';
import MainHeader from './MainHeader';
import NavigationBar from './NavigationBar';

const Header: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header 
      className="w-full sticky top-0 z-50"
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <HeaderTopBar />
      <MainHeader />
      <NavigationBar 
        isMegaMenuOpen={isMegaMenuOpen} 
        onCategoriesHover={() => setIsMegaMenuOpen(true)}
      />
      <MegaMenu isOpen={isMegaMenuOpen} />
    </header>
  );
};

export default Header;