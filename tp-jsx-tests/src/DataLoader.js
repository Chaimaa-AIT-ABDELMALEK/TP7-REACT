function ListeAvecRendu({ render }) {
  const listeNoms = ['Chaimaa', 'Zakia', 'Fati', 'Ikram'];

  return <section>{render(listeNoms)}</section>;
}

export default ListeAvecRendu;