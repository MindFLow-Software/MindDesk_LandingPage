"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Zap, BarChart3, User, CheckCircle, Sparkles, Star, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Gestão de Equipe de TI",
    description: "Gerencie sua equipe, distribua chamados com eficiência e acompanhe o desempenho em tempo real",
    color: "from-blue-500 to-blue-600",
    features: [
      "Atribuição automática de chamados",
      "Monitoramento de produtividade",
      "Organização por cargos e funções",
    ],
    stats: "95% mais eficiente",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Velocidade Extrema",
    description: "Resposta em menos de 30 segundos com automação avançada e distribuição inteligente",
    color: "from-blue-600 to-blue-700",
    features: ["Roteamento automático", "Priorização inteligente", "Respostas instantâneas"],
    stats: "< 30 segundos",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics Avançado",
    description: "Dashboards em tempo real com insights acionáveis e métricas detalhadas",
    color: "from-blue-700 to-blue-800",
    features: ["Relatórios personalizados", "Métricas em tempo real", "Análise preditiva"],
    stats: "360° insights",
  },
]

export default function BenefitsSection() {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-8">
            <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Vantagens Competitivas
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Por que Escolher o{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                MindDesk
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Tecnologia de ponta que transforma seu atendimento em uma vantagem competitiva, com resultados comprovados
            por milhares de empresas
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 satisfação</span>
            </div>
            <div className="w-px h-4 bg-gray-300" />
            <div className="text-gray-600">
              <span className="text-blue-600 font-bold">100+</span> empresas confiam
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 backdrop-blur-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/25"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative pb-6">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl text-white`}
                  >
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                    >
                      {benefit.stats}
                    </div>
                    <div className="text-gray-500 text-sm">melhoria média</div>
                  </div>
                </div>
                <CardTitle className="text-gray-900 text-2xl font-bold group-hover:text-blue-700 transition-colors duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-gray-600 text-lg mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </CardDescription>
                <div className="space-y-4 mb-8">
                  <h4 className="text-gray-900 font-semibold text-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Recursos Inclusos:
                  </h4>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${benefit.color} rounded-full mr-3 flex-shrink-0`}
                        ></div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative text-center p-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border-2 border-blue-200 backdrop-blur-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30 rounded-3xl" />
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mx-auto mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para Transformar seu Atendimento?</h3>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já revolucionaram sua gestão de TI com o MindDesk
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Suporte 24/7 incluído</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">30 dias grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
