function ajouterJournal(Composant) {
  return function ComposantAvecJournal(props) {
    console.log('Valeurs transmises au composant :', props);
    return <Composant {...props} />;
  };
}

export default ajouterJournal;