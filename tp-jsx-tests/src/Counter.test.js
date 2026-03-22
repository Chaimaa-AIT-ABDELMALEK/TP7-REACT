import { render, screen, fireEvent } from '@testing-library/react';
import CompteurInteractif from './Counter';

test('augmente la valeur du compteur après un clic', () => {
  render(<CompteurInteractif />);

  const boutonAjout = screen.getByRole('button', { name: '+' });
  fireEvent.click(boutonAjout);

  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();
});