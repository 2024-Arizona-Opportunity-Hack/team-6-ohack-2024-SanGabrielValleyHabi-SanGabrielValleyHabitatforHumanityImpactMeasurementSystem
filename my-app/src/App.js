import React from 'react';
import AppHeader from './AppHeader'; // Assuming you created this header component
import AdminDataInput from './AdminDataInput'; // This is your data input component

const App = () => {
  return (
    <div>
      <AppHeader />
      <h1>San Gabriel Valley Habitat for Humanity</h1>
      
      {/* Placeholder for the logo */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img src="path/to/your/logo.png" alt="Logo" style={{ width: '200px', height: 'auto' }} />
      </div>
      
      {/* Volunteers Section */}
      <div>
        <p>
          If you would like to volunteer for the San Gabriel Valley Habitat for Humanity, 
          click <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZ_f_RLmWX0t-wh283anN4VAUVdYRAHBdXqGjWuTMhvb-w5A/viewform?usp=sharing">here</a>.
        </p>
      </div>
      
      {/* Homeowners Section */}
      <div>
        <p>
          If you would like to apply for the program, please fill out the form 
          <a href="Yhttps://forms.gle/Fjzxznx5jQ39Jak37"> here</a>.
        </p>
      </div>
      
      {/* Admins Section */}
      <div>
        <h2>Admin Input</h2>
        <p>
          Admins can input data directly into the system by clicking 
          <a href="YOUR_ADMIN_FORM_LINK"> here</a>.
        </p>
      </div>

      {/* If you want to include embedded Google Looker dashboards */}
      <div>
        <h2>Dashboard</h2>
        <iframe
          src="YOUR_GOOGLE_LOOKER_URL_1"
          width="600"
          height="400"
          title="Dashboard 1"
        ></iframe>
        <iframe
          src="YOUR_GOOGLE_LOOKER_URL_2"
          width="600"
          height="400"
          title="Dashboard 2"
        ></iframe>
        <iframe
          src="YOUR_GOOGLE_LOOKER_URL_3"
          width="600"
          height="400"
          title="Dashboard 3"
        ></iframe>
      </div>
    </div>
  );
};

export default App;
