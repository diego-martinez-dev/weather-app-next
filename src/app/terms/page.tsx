import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Términos de Uso</h1>
          <p>Contenido de términos de uso...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
