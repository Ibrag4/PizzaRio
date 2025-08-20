"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    pessoas: "",
    data: "",
    preferencias: "",
  })
  const [isReserved, setIsReserved] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsReserved(true)
    setTimeout(() => setIsReserved(false), 3000)
    setFormData({ nome: "", pessoas: "", data: "", preferencias: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isReserved) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20">
          <div className="max-w-md mx-auto px-4">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-red-800 mb-4">RESERVADO!</h2>
                <p className="text-gray-800">Sua mesa foi reservada com sucesso!</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-serif text-red-800 mb-4">
              Deu água na boca?
              <br />
              Então venha experimentar!
            </h1>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold font-serif text-red-800">
                Tabela de reserva
                <br />
                <span className="text-lg font-normal text-gray-800">reserve uma mesa</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2 text-gray-800">
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="SEU NOME"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="pessoas" className="block text-sm font-medium mb-2 text-gray-800">
                    Quantidade de Pessoas
                  </label>
                  <Input
                    id="pessoas"
                    name="pessoas"
                    placeholder="2 pessoas"
                    value={formData.pessoas}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="data" className="block text-sm font-medium mb-2 text-gray-800">
                    Data e Horário
                  </label>
                  <Input
                    id="data"
                    name="data"
                    type="datetime-local"
                    value={formData.data}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="preferencias" className="block text-sm font-medium mb-2 text-gray-800">
                    Descrição opcional
                  </label>
                  <Textarea
                    id="preferencias"
                    name="preferencias"
                    placeholder="Preferência em mesa próxima do banheiro."
                    rows={3}
                    value={formData.preferencias}
                    onChange={handleChange}
                  />
                </div>

                <div className="text-sm text-gray-500 bg-gray-100 p-3 rounded">
                  Em caso de cancelamento, entre em contato conosco em ao menos 3 dias antes da data reservada.
                </div>

                <Button type="submit" className="w-full bg-red-800 text-white hover:bg-red-900">
                  Salvar e Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
