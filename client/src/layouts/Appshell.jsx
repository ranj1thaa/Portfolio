import NavbarPage from '../components/Navbar';
import '../styles/appShell.css';

const Appshell = ({ children }) => {
  return (
    <div className="appshell">
      <NavbarPage />
      <div className="appshell-content">
        {children}
      </div>
    </div>
  );
}

export default Appshell;
