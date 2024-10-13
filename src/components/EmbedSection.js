import React from 'react';
import './EmbedSection.css';

const EmbedSection = ({ title, embeds }) => {
  return (
    <section className="embed-section">
      <h2>{title}</h2>
      <div className="embeds">
        {embeds.map((embed, index) => (
          <div className="embed-container" key={index}>
            <iframe
              src={embed.src}
              title={embed.title}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmbedSection;
