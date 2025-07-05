"use client"
import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Card, CardContent } from "@/src/components/ui/card"
import {
    ArrowRight,
    CheckCircle,
    Sparkles,
    Play,
    Star,
    Users,
    TrendingUp,
    Shield,
    Zap,
    Clock,
    Award,
    MessageCircle,
    Bot,
} from "lucide-react"

const stats = [
    { value: "10,000+", label: "Empresas Confiam", icon: <Users className="w-5 h-5" /> },
    { value: "300%", label: "Aumento Satisfação", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "60%", label: "Redução de Custos", icon: <Award className="w-5 h-5" /> },
    { value: "24/7", label: "Suporte Dedicado", icon: <Shield className="w-5 h-5" /> },
]

const features = [
    { icon: <Bot className="w-4 h-4" />, text: "IA Avançada" },
    { icon: <Zap className="w-4 h-4" />, text: "Setup em 5 min" },
    { icon: <Shield className="w-4 h-4" />, text: "Sem cartão" },
    { icon: <Clock className="w-4 h-4" />, text: "Suporte 24/7" },
]

const floatingElements = [
    { icon: <MessageCircle className="w-6 h-6" />, delay: "0s", position: "top-1/4 left-1/4" },
    { icon: <Bot className="w-8 h-8" />, delay: "2s", position: "top-1/3 right-1/4" },
    { icon: <Sparkles className="w-5 h-5" />, delay: "4s", position: "bottom-1/3 left-1/3" },
    { icon: <Star className="w-7 h-7" />, delay: "6s", position: "bottom-1/4 right-1/3" },
]

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-white min-h-screen flex items-center">
            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
                <div
                    key={index}
                    className={`absolute ${element.position} text-blue-300/40 animate-bounce`}
                    style={{ animationDelay: element.delay, animationDuration: "3s" }}
                >
                    {element.icon}
                </div>
            ))}

            <div className="container mx-auto text-center relative z-10 max-w-7xl">
                {/* Enhanced Badge */}
                <div
                    className={`mb-12 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <Badge className="inline-flex items-center gap-3 px-8 py-4 text-lg bg-gradient-to-r from-blue-50 to-white text-blue-700 border-2 border-blue-200 backdrop-blur-xl rounded-full shadow-xl hover:shadow-blue-200/50 transition-all duration-300 hover:scale-105">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center animate-spin-slow">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        Tecnologia de Ponta em Atendimento
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </Badge>
                </div>

                {/* Enhanced Main Title */}
                <div
                    className={`mb-10 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                        O Futuro do{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-gradient-x">
                                Helpdesk
                            </span>
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/30 via-blue-300/20 to-blue-400/30 blur-2xl -z-10 animate-pulse" />
                        </span>
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">é Agora</span>
                    </h1>
                </div>

                {/* Enhanced Description */}
                <div
                    className={`mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <p className="text-2xl text-gray-700 mb-8 max-w-5xl mx-auto leading-relaxed">
                        Transforme a gestão interna da sua empresa com <span className="text-blue-600 font-semibold">processos otimizados</span>,{" "}
                        <span className="text-blue-700 font-semibold">fluxos automatizados</span> e mais produtividade para sua equipe.
                    </p>

                </div>

                {/* Stats Cards */}
                <div
                    className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className="group bg-white border-2 border-blue-100 backdrop-blur-xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:scale-105"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="flex items-center justify-center mb-3 text-blue-600 group-hover:text-blue-700 transition-colors">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Enhanced CTA Buttons */}
                <div
                    className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                        <Button
                            size="lg"
                            className="cursor-pointer group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 min-w-[280px]"
                        >
                            <Zap className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                            Teste Grátis por 90 Dias
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="cursor-pointer group border-2 border-blue-600 text-blue-700 hover:bg-blue-50 bg-white hover:border-blue-700 px-12 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 min-w-[280px]"
                        >
                            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                            Ver Demonstração
                        </Button>
                    </div>
                </div>

                {/* Enhanced Features List */}
                <div
                    className={`mb-12 transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group flex items-center space-x-3 bg-white px-6 py-3 rounded-full border-2 border-blue-100 backdrop-blur-sm hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-green-500 group-hover:text-green-600 transition-colors">
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div className="text-blue-600 group-hover:text-blue-700 transition-colors">{feature.icon}</div>
                                <span className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Proof */}
                <div
                    className={`transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                    <p className="text-gray-700 text-lg">
                        <span className="text-gray-900 font-bold">4.9/5</span> de satisfação •
                        <span className="text-blue-600 font-semibold"> 500+ empresas</span> já transformaram seu atendimento
                    </p>
                </div>
            </div>
        </section>
    )
}
