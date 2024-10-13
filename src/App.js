import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import EmbedSection from './components/EmbedSection';

function App() {
  // Replace these URLs with your actual Google Looker and Forms embed URLs
  const lookerEmbeds = [
    {
      src: 'https://lookerstudio.google.com/reporting/e88c4fd3-9652-4584-a499-fc09b2ba8969',
      title: 'Looker volunteers',
    },
    {
      src: 'https://lookerstudio.google.com/reporting/0eb62373-5c84-45e3-beae-a9a489d7bfe3',
      title: 'home perservation',
    },
    {
      src: 'https://lookerstudio.google.com/reporting/1d2f7e20-86f4-4d30-8a98-b48f6f85c39b',
      title: 'Looker home repair',
    },
  ];

  const formsEmbeds = [
    {
      src: 'https://forms.gle/sXTjEU4p8R2B3dHv7',
      title: 'Volunteer Form',
    },
    {
      src: 'https://forms.gle/wUBtYhmj1j6Lefr47',
      title: 'Home repair application program',
    },
    {
      src: 'https://forms.gle/NrJNnxFbptUvbHms7',
      title: 'Home preservation application',
    },
  ];

  return (
    <div className="App">
      <AppHeader />

      <main>
        {/* Volunteer Section */}
        <section className="section">
          <h2>For Volunteers</h2>
          <p>
            If you would like to volunteer for the San Gabriel Valley Habitat for Humanity, click{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZ_f_RLmWX0t-wh283anN4VAUVdYRAHBdXqGjWuTMhvb-w5A/viewform?usp=sharing">
              here
            </a>
            .
          </p>
        </section>

        {/* Homeowner Section */}
        <section className="section">
          <h2>For Homeowners</h2>
          <p>
            If you would like to apply for the San Gabriel Valley Habitat for Humanity, please check back for more details.
          </p>
        </section>

        {/* admin Section */}
        <section className="section">
          <h2>For admins</h2>
          <p>
            If you would like to change sheet data manually for the San Gabriel Valley Habitat for Humanity, click{' '}
            <a href="https://docs.google.com/spreadsheets/d/1MS4h04tqbNDo4Q1_ROsEzWk6q8KAXO5Dmnq84a-9BxI/edit?usp=sharing">
              here
            </a>
          </p>
        </section>

        {/* Google Looker Embeds */}
        <EmbedSection title="Google Looker Reports" embeds={lookerEmbeds} />

        {/* Google Forms Embeds */}
        <EmbedSection title="Forms" embeds={formsEmbeds} />
      </main>
    </div>
  );
}

export default App;
