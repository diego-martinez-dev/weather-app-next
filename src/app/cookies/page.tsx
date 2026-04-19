import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Política de Cookies</h1>
          <p>Contenido de política de cookies...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
