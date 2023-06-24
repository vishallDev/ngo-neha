import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './dashboard.scss';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('ngoDashboard'); // Initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDropdownItemClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="left-menu">
          <div className="menu-item" onClick={() => handleTabClick('ngoDashboard')}>
            NGO Dashboard
          </div>
          <div className="menu-item" onClick={() => handleTabClick('ngoDonor')}>
            NGO Donor
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab3')}>
            Tab 3
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab4')}>
            Tab 4
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab5')}>
            Tab 5
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab6')}>
            Tab 6
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab7')}>
            Tab 7
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab8')}>
            Tab 8
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab9')}>
            Tab 9
          </div>
          <div className="menu-item" onClick={() => handleTabClick('tab10')}>
            Tab 10
          </div>
          <div className="dropdown">
            <div className="dropdown-menu">
              <div className="menu-item" onClick={() => handleDropdownItemClick('dropdown1')}>
                Dropdown 1
              </div>
              <div className="menu-item" onClick={() => handleDropdownItemClick('dropdown2')}>
                Dropdown 2
              </div>
              <div className="menu-item" onClick={() => handleDropdownItemClick('dropdown3')}>
                Dropdown 3
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {activeTab === 'ngoDashboard' && <h2>NGO Dashboard Content</h2>}
          {activeTab === 'ngoDonor' && <h2>NGO Donor Content</h2>}
          {activeTab === 'tab3' && <h2>Tab 3 Content</h2>}
          {activeTab === 'tab4' && <h2>Tab 4 Content</h2>}
          {activeTab === 'tab5' && <h2>Tab 5 Content</h2>}
          {activeTab === 'tab6' && <h2>Tab 6 Content</h2>}
          {activeTab === 'tab7' && <h2>Tab 7 Content</h2>}
          {activeTab === 'tab8' && <h2>Tab 8 Content</h2>}
          {activeTab === 'tab9' && <h2>Tab 9 Content</h2>}
          {activeTab === 'tab10' && <h2>Tab 10 Content</h2>}
          {activeTab.startsWith('dropdown') && (
            <h2>{activeTab.charAt(8).toUpperCase() + activeTab.slice(9)} Content</h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
