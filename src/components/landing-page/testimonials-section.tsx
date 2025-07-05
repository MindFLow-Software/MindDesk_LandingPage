/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Building,
  Calendar,
} from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Coordenadora de TI",
    content:
      "Conseguimos otimizar processos e aumentar consideravelmente a eficiência da equipe de TI. O MindDesk transformou completamente nossa gestão.",
    rating: 5,
    company: "Prefeitura de Votorantim",
    industry: "Serviço Público",
    image: "/assets/user_4.jpg",
    results: "85% mais eficiente",
    color: "from-blue-500 to-blue-600",
    featured: false,
    timeUsing: "8 meses",
    teamSize: "25 pessoas",
  },
  {
    name: "João Santos",
    role: "Gerente de CS",
    content:
      "A IA do MindDesk é impressionante. Resolve a maioria dos problemas sem intervenção humana, liberando nossa equipe para tarefas estratégicas.",
    rating: 5,
    company: "StartupX",
    industry: "Startup",
    image: "/assets/user_5.jpg",
    results: "90% automação",
    color: "from-blue-600 to-blue-700",
    featured: true,
    timeUsing: "1 ano",
    teamSize: "12 pessoas",
  },
  {
    name: "Ana Costa",
    role: "Diretora",
    content:
      "ROI de 400% em 6 meses. A melhor decisão que tomamos para nosso atendimento. Recomendo para qualquer empresa séria.",
    rating: 5,
    company: "E-commerce Plus",
    industry: "E-commerce",
    image: "/assets/user_2.jpg",
    results: "400% ROI",
    color: "from-blue-700 to-blue-800",
    featured: false,
    timeUsing: "6 meses",
    teamSize: "40 pessoas",
  },
]

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "10,000+",
    label: "Clientes Satisfeitos",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "4.9/5",
    label: "Avaliação Média",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "300%",
    label: "Aumento Médio de Produtividade",
    color: "from-blue-700 to-blue-800",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "98%",
    label: "Taxa de Retenção",
    color: "from-blue-500 to-blue-700",
  },
]

const additionalTestimonials = [
  {
    name: "Carlos Mendes",
    role: "CTO",
    company: "TechCorp",
    rating: 5,
    shortContent: "Revolucionou nossa gestão de TI",
  },
  {
    name: "Fernanda Lima",
    role: "Gerente de Operações",
    company: "LogiFlow",
    rating: 5,
    shortContent: "Eficiência incomparável",
  },
  {
    name: "Roberto Alves",
    role: "Diretor de TI",
    company: "InnovaTech",
    rating: 5,
    shortContent: "Melhor investimento do ano",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Quote className="w-4 h-4 mr-2" />
                Depoimentos Reais
              </Badge>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              O que Nossos{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  Clientes Dizem
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
              </span>
            </h2>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Resultados reais de empresas que transformaram seu atendimento e alcançaram resultados extraordinários
            </p>
          </div>

          {/* Enhanced Stats Grid */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 backdrop-blur-xl hover:shadow-xl hover:shadow-blue-200/25 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/25 cursor-pointer ${
                  testimonial.featured ? "ring-2 ring-blue-400/50 scale-105 border-blue-300" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Featured Badge */}
                {testimonial.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>
                  </div>
                )}

                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="relative p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 opacity-10">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl border-2 border-blue-200 object-cover shadow-lg group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-bold text-lg group-hover:text-blue-700 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div
                        className={`text-lg font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent`}
                      >
                        {testimonial.results}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed text-center italic group-hover:text-gray-800 transition-colors duration-300">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Company Info */}
                  <div className="border-t border-blue-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-900 font-semibold">{testimonial.company}</span>
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 border border-blue-200">{testimonial.industry}</Badge>
                    </div>

                    {/* Additional Info */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Usando há {testimonial.timeUsing}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{testimonial.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div
          className={`transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative text-center p-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border-2 border-blue-200 backdrop-blur-xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30 rounded-3xl" />

            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            <div className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-2000" />

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mx-auto mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para se Juntar a Eles?</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Milhares de empresas já transformaram seu atendimento. Seja a próxima história de sucesso!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Começar Teste Grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 bg-white hover:border-blue-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Falar com Especialista
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>30 dias grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Setup em 5 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
