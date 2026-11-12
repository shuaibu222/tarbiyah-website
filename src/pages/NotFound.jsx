import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function NotFound() {
  return (
    <PageHero title="Page not found" intro="The page you are looking for does not exist.">
      <Link to="/" className="btn btn--gold">Back to home</Link>
    </PageHero>
  );
}
