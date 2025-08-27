import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

function App(): React.JSX.Element {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`dark min-h-screen relative overflow-hidden transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Background Layers */}
      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            background: "linear-gradient(135deg, #0a0a0a, #0d1b2a, #1a1a2e)",
          }}
        ></div>
        <div className="absolute inset-0 z-10 w-full h-full">
          <canvas
            className="w-full h-full block"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          ></canvas>
        </div>
        <div
          className="absolute inset-0 z-20 w-full h-full opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 20%, #1e3a8a15 0%, transparent 60%),
            radial-gradient(circle at 70% 80%, #04785715 0%, transparent 55%),
            linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.3) 100%)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-30">
        <Header />
        <main>
          <ComingSoon />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
