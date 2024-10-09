import backgroundImage1 from '../../assets/images/naufragos1.jpeg';
import backgroundImage2 from '../../assets/images/naufragos2.jpeg';
import backgroundImage3 from '../../assets/images/naufragos3.jpeg';
import backgroundImage4 from '../../assets/images/naufragos4.jpeg';
import backgroundImage5 from '../../assets/images/naufragos5.jpeg';
import backgroundImage6 from '../../assets/images/naufragos6.jpeg';
import backgroundImage7 from '../../assets/images/naufragos7.jpeg';



export function Banda() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 ml-10 mr-6 py-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <h1 className="text-4xl font-bold mb-2">Náufragos à Deriva</h1>
          <ul className="flex space-x-5">
            <li><a href="#about" className="hover:text-gray-400">Sobre</a></li>
            <li><a href="#music" className="hover:text-gray-400">Músicas</a></li>
            <li><a href="#gallery" className="hover:text-gray-400">Fotos</a></li>
            <li><a href="#tour" className="hover:text-gray-400">Shows</a></li>
            <li><a href="#contact" className="hover:text-gray-400 mr-4">Contato</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex items-center justify-center min-h-80 md:min-h-screen bg-cover bg-center bg-no-repeat opacity-75"
        style={{ backgroundImage: `url(${backgroundImage1})` }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">Bem-vindo(a) à bordo da N.A.D</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Sobre a Banda</h2>
          <p className="text-lg text-justify">
            Náufragos à Deriva é uma banda de rock alternativo formada em Sorocaba/SP no ano de 2017. Voltada para um repertório de músicas que nos levam aos mais diversos e profundos sentimentos, os músicos prezam pela poética em suas letras e melodias. A banda teve uma longa pausa no ano de 2020, retornando no início de 2023. Desde sua formação, a Náufragos já gravou diversas músicas em estúdio, e agora em 2024 estão lançando algumas dessas músicas, que farão parte de seu primeiro EP.
          </p>
          <br />
          <h2 className='text-2xl text-center font-bold'>Formação</h2>
          <p className='text-center'>Lucas Caruso - Vocalista</p>
          <p className='text-center'>Luis Fernando - Guitarrista</p>
          <p className='text-center'>Maiko Roberto - Baixista</p>
          <p className='text-center'>Gerly Miguel - Baterista</p>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-16 bg-gray-800">
        <h2 className="text-4xl font-bold mb-8 text-center">Escute agora em:</h2>
        <div className="flex justify-center items-center">
          <a href="https://linktr.ee/naufragosaderiva" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl underline font-semibold">naufragos.banda</a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage2} alt="Foto capa" />
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage3} alt="Banda ao vivo" />
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage4} alt="Show ao vivo" />
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage5} alt="Evento ao vivo" />
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage6} alt="Ensaio fotográfico" />
            <img className="w-full h-48 md:h-72 object-cover" src={backgroundImage7} alt="Show em SP" />
          </div>
        </div>
      </section>

      {/* Tour Section */}
      <section id="tour" className="py-16 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Próximos Shows</h2>
          <div className="flex justify-center">
            <ul className="space-y-4">
              <li className="bg-gray-700 py-4 px-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">23 e 24 de Novembro - Sorocaba/SP</h3>
                <p>Local: Parque dos Espanhóis</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Contato</h2>
          <p className="text-lg max-w-lg mx-auto">
            Quer contratar a banda ou saber mais informações? <br /> Envie-nos um e-mail!
          </p>
          <a href="mailto:contato@bandamusica.com" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Enviar e-mail
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Náufragos à Deriva - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
