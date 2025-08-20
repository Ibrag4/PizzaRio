import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Bloco Pizza Rio */}
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold font-serif text-white mb-4">Pizza Rio</h3>
            <p className="text-white text-sm">Pizza na mesa, Alegria no coração!</p>
          </div>

          {/* Mapa do Site */}
          <div className="bg-gray-800 p-4 rounded">
            <h4 className="font-semibold text-white mb-4">Mapa do Site</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Página Principal
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1a6oztZO-huv4SlTd-J5hKrvVUz4Ufq_8/view?usp=sharing" className="hover:text-gray-300">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="/reservas" className="hover:text-gray-300">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Unidades - fundo do formulário */}
          <div className="bg-gray p-4 rounded">
            <h4 className="font-semibold text-white mb-4">Unidades</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>Méier</li>
              <li>Tijuca</li>
              <li>Penha</li>
            </ul>
          </div>

          {/* Contato - fundo do formulário */}
          <div className="bg-gray p-4 rounded">
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="mailto:pizzario@email.com" className="hover:text-primary">
                  pizzario@email.com
                </a>
              </li>
              <li>Tijuca: (21) 99999-9999</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white text-sm">© 2024 Pizza Rio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
