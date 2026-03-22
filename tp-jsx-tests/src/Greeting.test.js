import { render, screen } from '@testing-library/react';
import MessageAccueil from './Greeting';

test('montre correctement le texte de bienvenue', () => {
  render(<MessageAccueil name="Alice" />);

  expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();
});