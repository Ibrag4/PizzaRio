import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 m-0 p-0">
      
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-30"
        style={{ backgroundImage: "url('/delicious-pizza.png')" }}
      />

      {/* Overlay preta */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6">
          Pizza na mesa,
          <br />
          <span className="text-white">Alegria no coração!</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Um ambiente de alto padrão com sabores únicos que só o Pizza Rio pode oferecer
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-4 bg-red-800 hover:bg-red-600 text-white font-bold rounded transition-colors"
          asChild
        >
          <Link href="https://web.whatsapp.com/">PEÇA AGORA!</Link>
        </Button>
      </div>
    </section>
  )
}
