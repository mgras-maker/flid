import Layout from '../components/layout/Layout.tsx';
import ProjectsSection from '../components/ui/ProjectsSection.tsx';
import DesignProcessSection from '../components/ui/DesignProcessSection.tsx';

const HomePage = () => {  return (
    <Layout>
      <ProjectsSection />
      <DesignProcessSection />
    </Layout>
  );
};

export default HomePage;
