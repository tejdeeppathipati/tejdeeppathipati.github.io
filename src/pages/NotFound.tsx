import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <div className="text-center max-w-md mx-auto">
          <div className="card-gradient p-8 mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <a 
              href="/" 
              className="btn-hero-primary inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
