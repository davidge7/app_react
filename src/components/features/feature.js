
import './feature.css';

function Features({ features }) {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Features</h2>
        <p>Discover the powerful features that make our application stand out.</p>
      </div>

      <div className="features-grid">
        {Array.isArray(features) && features.length > 0 ? (
          features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))
        ) : (
          <p className="no-features">No features available.</p>
        )}
      </div>
    </section>
  );
}

export default Features;