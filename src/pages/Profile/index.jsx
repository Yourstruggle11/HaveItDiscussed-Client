import React from 'react';
import HeroSection from './components/HeroSection';
import UserDetailsSection from './components/UserDetailsSection';

function ProfilePage() {
  return (
    <main className="profile-page">
      <HeroSection />
      <UserDetailsSection />
    </main>
  );
}

export default ProfilePage;
