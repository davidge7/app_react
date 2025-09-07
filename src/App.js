import './App.css';
import Header from './components/header/header';
import Router from './router';
import Footer from './components/footer';
import { useEffect, useState } from 'react';

function App() {
  const [features, setFeatures] = useState([]);
  const data = [
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Enjoy a seamless and lightning-fast experience with our app.",
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Your data is always safe with our top-notch security measures.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Clean and modern UI designed for great user experience.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Easily work together with your team in real-time.",
    },
  ];

  useEffect(() => {
    setFeatures([...data]);
  }, []);

  return (
    <>
      <div className="App">
        <div className="App">
          <Header />
          <Router
            features={features} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;