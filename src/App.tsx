import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[400px_1fr]">
      {/* Hero section (sidebar on large screens, top on small screens) */}
      <div className="lg:sticky lg:top-0 lg:h-screen overflow-y-auto bg-white shadow-md">
        <Hero />
      </div>

      {/* Main content */}
      <div className="w-full lg:pl-6">
        <main className="container mx-auto px-4 py-8 max-w-4x2">
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
