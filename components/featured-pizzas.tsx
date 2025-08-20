import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pizzas = [
  {
    name: "PEPPERONI",
    description: "Mussarela especial, pepperoni e fatias de tomate cereja garantindo uma experiência única no sabor.",
    italianDescription:
      "Speciali fette di mozzarella, peperoni e pomodorini che garantiscono un'esperienza di gusto unica.",
    image: "/pepperoni-pizza.png",
  },
  {
    name: "PIZZA CARIOCA",
    description:
      "Sendo a nossa campeã de vendas, conta com mussarela especial, pepperoni, cebola, tomate e azeitona preta.",
    italianDescription:
      "Essendo il nostro best seller, ha mozzarella speciale, peperoni, cipolla, pomodoro e olive nere.",
    image: "/carioca-pizza.png",
  },
  {
    name: "MUSHROOM",
    description:
      "Com especiarias únicas, nossa pizza vegetariana leva cogumelos portobello, tomate, cebola, pimentão e queijo.",
    italianDescription:
      "Con spezie uniche, la nostra pizza vegetariana include funghi portobello, pomodori, cipolle, peperoni e formaggio.",
    image: "/mushroom-pepper-pizza.png",
  },
]

export function FeaturedPizzas() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-red-800 mb-4">NOSSOS MELHORES SABORES:</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => (
            <Card key={index} className="bg-white-50 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img src={pizza.image || "/placeholder.svg"} alt={pizza.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-serif text-red-800 mb-4">{pizza.name}</h3>
                <p className="text-red-800 mb-3 leading-relaxed">{pizza.description}</p>
                <p className="text-red-800 italic text-sm mb-6">{pizza.italianDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild   className="hover:bg-red-800 hover:text-white border-red-800 text-red-800">
            <Link href="https://drive.google.com/file/d/1a6oztZO-huv4SlTd-J5hKrvVUz4Ufq_8/view?usp=sharing">Cardápio completo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
