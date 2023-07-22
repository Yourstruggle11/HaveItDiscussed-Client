import React, { useState } from 'react';
import logoDesigner from '../../assets/logoDesigner.jpg';
import founder from '../../assets/founder.jpg';

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 py-10 px-6 md:px-24 lg:px-36 text-white">
      <h1 className="text-4xl font-bold mb-6">About HaveItDiscussed</h1>
      <p className="text-lg mb-6">
        Welcome to HaveItDiscussed, our open-source online discussion forum! We are a team of
        passionate individuals who believe in the power of community-driven
        knowledge sharing. Our mission is to provide a platform for people to
        have meaningful discussions on a wide range of topics, fostering a
        diverse and inclusive community.
      </p>
      <div className="mb-6 flex items-center">
        <img
          src={founder}
          alt="Souvik Sen"
          className="rounded-full w-20 h-20 object-cover mr-4 cursor-pointer"
          onClick={() => handleImageClick(founder)}
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Meet Souvik Sen</h2>
          <p className="text-lg">
            I am Souvik Sen, the developer behind HaveItDiscussed. As an avid
            technologist and community enthusiast, I created this platform to
            enable constructive discussions and information sharing among
            like-minded individuals. My vision is to empower users with an
            intuitive and secure space to exchange ideas.
          </p>
        </div>
      </div>
      <div className="mb-6 flex items-center">
        <img
          src={logoDesigner}
          alt="Rohit Das"
          className="rounded-full w-20 h-20 object-cover mr-4 cursor-pointer"
          onClick={() => handleImageClick(logoDesigner)}
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Meet Rohit Das - Our Talented Logo Designer</h2>
          <p className="text-lg">
            I am Rohit Das, the creative mind behind the HaveItDiscussed logo.
            Designing the logo was an exciting challenge, and I aimed to capture
            the essence of community, diversity, and collaboration in the visual
            identity of this platform. It's a pleasure to contribute to such a
            vibrant and inclusive project.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <img
            src={selectedImage}
            alt="Full-screen"
            className="max-w-full max-h-full cursor-pointer"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
