// Le fichier App.jsx est le composant principal de l'application. Il est responsable de l'encapsulation et du rendu du composant AppRouter, 
// qui à son tour gère le routage de l'application.

import AppRouter from './components/Router';

const App = () => {
  return <AppRouter />;  // Rend le composant Router
};

export default App;

//Le composant App rend AppRouter. Il ne gère pas directement le routage ou le contenu spécifique, mais il sert de wrapper (enveloppe) autour du composant de routage. 
// Il permet également d’ajouter d’autres logiques ou configurations communes à toute l’application dans le futur si nécessaire.