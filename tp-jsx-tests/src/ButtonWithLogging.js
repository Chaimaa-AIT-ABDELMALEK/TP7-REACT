import ajouterJournal from './withLogging';
import BoutonPersonnalise from './Button';

const BoutonAvecJournal = ajouterJournal(BoutonPersonnalise);

export default BoutonAvecJournal;