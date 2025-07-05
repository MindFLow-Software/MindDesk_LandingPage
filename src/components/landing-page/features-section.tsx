/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { MessageSquare, Shield, Users, BarChart3, Zap, Briefcase, BookOpen, Inbox, Sparkles } from "lucide-react"

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Chat com TI",
    desc: "Solicite apoio técnico em tempo real",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Base de Conhecimento",
    desc: "Guias e respostas rápidas para usuários",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: <Inbox className="w-6 h-6" />,
    title: "Chamados Internos",
    desc: "Gerencie solicitações dentro da organização",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Atribuição de Funcionários",
    desc: "Direcione chamados para responsáveis específicos",
    color: "from-blue-700 to-blue-800",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Login Personalizado",
    desc: "Acesso seguro e adaptado por perfil",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Tipos de Atividades",
    desc: "Classifique e organize demandas facilmente",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Dashboards de Métricas",
    desc: "Acompanhe dados de performance em tempo real",
    color: "from-blue-700 to-blue-800",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Cadastro por Cargos",
    desc: "Defina permissões conforme o cargo do usuário",
    color: "from-blue-600 to-blue-700",
  },
]

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="features" className="relative py-20 px-4 bg-white overflow-hidden">
        
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                Funcionalidades Completas
              </Badge>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Funcionalidades que{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Fazem a Diferença
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
              </span>
            </h2>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cada recurso foi pensado para maximizar a eficiência e satisfação do cliente, oferecendo uma experiência
              completa de gestão
            </p>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-blue-200/25 backdrop-blur-sm overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-sm" />
                </div>

                <CardContent className="relative p-6 text-center">
                  {/* Enhanced Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg text-white`}
                    >
                      {feature.icon}
                    </div>

                    {/* Floating Ring Effect */}
                    <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl border-2 border-blue-300/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                  </div>

                  {/* Enhanced Text */}
                  <h3 className="text-gray-900 font-bold text-lg mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.desc}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </CardContent>

                {/* Card Number */}
                <div className="absolute top-3 right-3 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {index + 1}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mt-20 text-center">
            <div className="relative inline-block p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border-2 border-blue-200 backdrop-blur-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30 rounded-3xl" />

              {/* Floating Elements */}
              <div className="absolute top-2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <div className="absolute top-4 right-6 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000" />
              <div className="absolute bottom-3 left-6 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-2000" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Todas as funcionalidades em uma única plataforma
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Simplifique sua gestão de TI com ferramentas integradas e intuitivas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
