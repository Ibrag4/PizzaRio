"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface FormData {
  nome: string
  sobrenome: string
  email: string
  senha: string
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      setIsLoggedIn(true)
    } else {
      alert("Cadastro realizado! Agora faça login")
      setIsLogin(true)
    }
    setFormData({ nome: "", sobrenome: "", email: "", senha: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="py-20 flex-1">
          <div className="max-w-md mx-auto px-4">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-red-800 mb-4">Login realizado!</h2>
                <p className="text-gray-700 mb-6">Bem-vindo(a) ao sistema!</p>
                <Button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full bg-red-800 text-white hover:bg-red-900"
                >
                  SAIR
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="py-20 flex-1">
        <div className="max-w-md mx-auto px-4">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold font-serif text-red-800">
                {isLogin ? "Faça Login" : "Cadastre-se"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium mb-2 text-gray-700">
                        Nome
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        placeholder="Seu primeiro nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="sobrenome" className="block text-sm font-medium mb-2 text-gray-700">
                        Sobrenome
                      </label>
                      <Input
                        id="sobrenome"
                        name="sobrenome"
                        placeholder="Seu sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-900"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={isLogin ? "SEU EMAIL" : "seuemail@hotmail.com"}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900"
                  />
                </div>

                <div>
                  <label htmlFor="senha" className="block text-sm font-medium mb-2 text-gray-700">
                    Senha
                  </label>
                  <Input
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-300 text-gray-900"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-800 text-white hover:bg-red-900">
                  {isLogin ? "Login" : "Cadastrar"}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-red-800 hover:underline"
                >
                  {isLogin ? "Cadastre-se" : "Faça Login"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
