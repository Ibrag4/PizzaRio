"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({ nome: "", sobrenome: "", email: "", mensagem: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Card className="bg-white shadow-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Mensagem enviada com sucesso!</h3>
              <p className="text-gray-700">
                Verifique seu email (caixa de entrada ou spam) para o recebimento do retorno
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-white shadow-md text-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-serif">FALE CONOSCO</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Digite seu primeiro nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="sobrenome" className="block text-sm font-medium mb-2">
                    Sobrenome
                  </label>
                  <Input
                    id="sobrenome"
                    name="sobrenome"
                    type="text"
                    placeholder="Digite seu sobrenome"
                    value={formData.sobrenome}
                    onChange={handleChange}
                    required
                    className="bg-gray-100 text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem..."
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 text-gray-800 placeholder-gray-400"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
