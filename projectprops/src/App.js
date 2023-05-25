import ComposantProfil from './profil/ComposantProfil';
import './App.css';
import logo from './MA.JPG';

function App() {
  const fullname = 'Diallo mariam';
  const bio = 'Le régime ivoirien de protection sociale protège les travailleurs salariés obligatoirement pour les risques suivants :•	la maladie : prestations en nature via la Couverture Maladie Universelle, régime de base et régime dassistance médicale ;•	les prestations familiales (dont la maternité) ;•	les accidents du travail-maladies professionnelles ;•	les pensions (vieillesse, invalidité et survivants).';
  const profession =  'Etudiante';
  const handlename = () =>{
    alert(fullname);
  }
  return (
    <div className="App">
      <ComposantProfil fullname={fullname} profession={profession} bio={bio} logo={logo} handlename={handlename}/>
    </div>
  );
}

export default App;
