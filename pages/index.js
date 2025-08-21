import { useState } from 'react';

// Componentes Header e Footer
// Mantidos no mesmo arquivo para evitar erros de importação.
const Header = ({ title }) => {
  return (
    <header className="py-8 text-center">
      <h1 className="text-4xl font-extrabold text-blue-600">{title}</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="py-4 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} QJA - Todos os direitos reservados.</p>
    </footer>
  );
};

// Componente do formulário, estilizado com Tailwind CSS para um design limpo e responsivo.
const PresenceForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      // Aqui você pode adicionar a lógica para enviar os dados para um banco de dados ou API.
      // Por enquanto, vamos apenas mostrar uma mensagem de sucesso no console.
      console.log('Dados enviados:', { name, phone });
      setMessage('Formulário enviado com sucesso!');
      setName('');
      setPhone('');
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto mt-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Formulário de Presença</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="(xx) xxxxx-xxxx"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Presença
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Header title="QJA JUDO ACADEMY" />
        <PresenceForm />
      </main>

      <Footer />
    </div>
  );
}
