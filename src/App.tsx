import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import Layout from './components/layout/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
// import AboutPage from './pages/AboutPage.tsx'; // Keep this commented for now
// import ProjectsPage from './pages/ProjectsPage.tsx'; // Keep this commented for now
// import ProjectDetailPage from './pages/ProjectDetailPage.tsx'; // Keep this commented for now
// import ContactPage from './pages/ContactPage.tsx'; // Keep this commented for now
// import ProcessPage from './pages/ProcessPage.tsx'; // Keep this commented for now
// import DesignThinkingGamePage from './pages/DesignThinkingGamePage.tsx'; // Keep this commented for now
// import EnergiaJutraPage from './pages/EnergiaJutraPage.tsx'; // Keep this commented for now
// import BeataPrzybytkPage from './pages/BeataPrzybytkPage.tsx'; // Keep this commented for now

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            {/* <Route path="/projects/:projectId" element={<ProjectDetailPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/process" element={<ProcessPage />} /> */}
            {/* <Route path="/design-thinking-game" element={<DesignThinkingGamePage />} /> */}
            {/* <Route path="/energia-jutra" element={<EnergiaJutraPage />} /> */}
            {/* <Route path="/beata-przybytek" element={<BeataPrzybytkPage />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
