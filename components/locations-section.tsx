import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "MÉIER",
    phone: "(21) 88888-8888",
    address: "R. Dias da Cruz, 000 Méier, Rio de Janeiro, RJ, 20720-010",
    hours: "Dom a Sáb: 11h às 21h",
  },
  {
    name: "TIJUCA",
    phone: "(21) 99999-9999",
    address: "R. Uruguai, 000 - Tijuca, Rio de Janeiro - RJ, 20510-055",
    hours: "Dom a Sáb: 11h às 21h",
  },
  {
    name: "PENHA",
    phone: "(21) 77777-7777",
    address: "R. Nicarágua, 000 - Penha, Rio de Janeiro - RJ, 21020-050",
    hours: "Dom a Sáb: 11h às 21h",
  },
];

export function LocationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Nossas Unidades</h2>
          <p className="text-lg text-muted-foreground">
            Temos unidades no Rio de Janeiro. Clique abaixo para encontrar a mais próxima de você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="bg-white-50 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold font-serif text-red-800 mb-4">{location.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-card-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-start justify-center gap-2 text-card-foreground">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-card-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
