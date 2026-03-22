import { useState } from 'react';

function CompteurInteractif() {
  const [valeur, setValeur] = useState(0);

  const augmenter = () => {
    setValeur((ancienneValeur) => ancienneValeur + 1);
  };

  return (
    <section>
      <p>Compteur : {valeur}</p>
      <button onClick={augmenter}>+</button>
    </section>
  );
}

export default CompteurInteractif;