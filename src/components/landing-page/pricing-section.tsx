"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import {
    CheckCircle,
    MessageCircle,
    Mail,
    Calendar,
    Users,
    Building,
    Shield,
    HeadphonesIcon,
    Sparkles,
    Star,
    ArrowRight,
} from "lucide-react"

const features = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Segurança Enterprise",
        description: "Criptografia end-to-end e compliance LGPD",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Equipe Ilimitada",
        description: "Adicione quantos agentes precisar",
        color: "from-blue-600 to-blue-700",
    },
    {
        icon: <Building className="w-6 h-6" />,
        title: "Integrações Customizadas",
        description: "Conecte com seus sistemas existentes",
        color: "from-blue-700 to-blue-800",
    },
    {
        icon: <HeadphonesIcon className="w-6 h-6" />,
        title: "Suporte Dedicado 24/7",
        description: "Gerente de conta exclusivo",
        color: "from-blue-500 to-blue-700",
    },
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Multicanal Completo",
        description: "WhatsApp, Email, Chat, Telefone e mais",
        color: "from-blue-600 to-blue-800",
    },
]

const contactMethods = [
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Chat ao Vivo",
        description: "Resposta em menos de 2 minutos",
        action: "Iniciar Chat",
        color: "from-green-500 to-green-600",
        badge: "Mais Rápido",
    },
    {
        icon: <Calendar className="w-6 h-6" />,
        title: "Agendar Reunião",
        description: "Demonstração personalizada",
        action: "Agendar Demo",
        color: "from-blue-600 to-blue-700",
        badge: "Recomendado",
    },
]

const reasonsData = [
    {
        icon: <Users className="w-8 h-8" />,
        title: "Necessidades Únicas",
        description: "Cada empresa tem volume e complexidade diferentes",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: <Building className="w-8 h-8" />,
        title: "Integrações Customizadas",
        description: "Desenvolvemos soluções específicas para seu negócio",
        color: "from-blue-600 to-blue-700",
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
        title: "Melhor Custo-Benefício",
        description: "Você paga apenas pelo que realmente precisa",
        color: "from-blue-700 to-blue-800",
    },
]

export default function PricingSection() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        employees: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        // Handle success
    }

    return (
        <section id="pricing" className="relative py-20 px-4 bg-white overflow-hidden">

            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Preços Personalizados
                        </Badge>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                        Converse com a{" "}
                        <span className="relative">
                            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                                MindDesk
                            </span>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
                        </span>{" "}
                        para
                        <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent block md:inline">
                            Fechar o Valor
                        </span>{" "}
                        da Aplicação
                    </h2>
                    <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                        Cada empresa é única. Por isso, criamos uma proposta personalizada baseada nas suas necessidades
                        específicas, garantindo o melhor custo-benefício do mercado.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                        <span className="text-gray-900 ml-2 font-medium">4.9/5 de satisfação dos clientes</span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid xl:grid-cols-2 gap-20 items-start mb-24">
                    {/* Left Side - Features */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-10 flex items-center">
                                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />O que está incluído:
                            </h3>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-8 bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-200/25"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative flex items-start space-x-6">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}
                                            >
                                                {feature.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-gray-900 font-bold mb-3 text-xl group-hover:text-blue-700 transition-colors">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                                    {feature.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Guarantee Section */}
                        <div className="relative p-10 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 rounded-2xl border-2 border-green-200 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-100/30 to-blue-100/30 rounded-2xl" />
                            <div className="relative">
                                <h4 className="text-gray-900 font-bold mb-4 flex items-center text-2xl">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 text-white">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    Garantia de Satisfação
                                </h4>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    30 dias de teste gratuito + garantia de reembolso se não ficar satisfeito nos primeiros 60 dias.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="space-y-10">
                        <Card className="relative bg-white border-2 border-blue-200 backdrop-blur-xl shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 rounded-lg" />
                            <CardHeader className="relative text-center pb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mx-auto mb-6">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-gray-900 text-4xl mb-4 font-bold">Solicite sua Proposta</CardTitle>
                                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                                    Preencha os dados abaixo e receba uma proposta personalizada em até 24 horas
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="relative">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="name" className="text-gray-900 font-semibold text-lg">
                                                Nome *
                                            </Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Seu nome completo"
                                                className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg backdrop-blur-sm transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="company" className="text-gray-900 font-semibold text-lg">
                                                Empresa *
                                            </Label>
                                            <Input
                                                id="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Nome da sua empresa"
                                                className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg backdrop-blur-sm transition-all duration-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="email" className="text-gray-900 font-semibold text-lg">
                                            Email Corporativo *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="seu@empresa.com"
                                            className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg backdrop-blur-sm transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="phone" className="text-gray-900 font-semibold text-lg">
                                                Telefone *
                                            </Label>
                                            <Input
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="(11) 99999-9999"
                                                className="bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 h-14 text-lg backdrop-blur-sm transition-all duration-300"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="employees" className="text-gray-900 font-semibold text-lg">
                                                Funcionários
                                            </Label>
                                            <select
                                                id="employees"
                                                value={formData.employees}
                                                onChange={handleInputChange}
                                                className="w-full h-14 px-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-lg backdrop-blur-sm transition-all duration-300"
                                            >
                                                <option value="">Selecione o porte</option>
                                                <option value="1-10">1-10 funcionários</option>
                                                <option value="11-50">11-50 funcionários</option>
                                                <option value="51-200">51-200 funcionários</option>
                                                <option value="201-1000">201-1000 funcionários</option>
                                                <option value="1000+">1000+ funcionários</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-16 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                                                Enviando...
                                            </div>
                                        ) : (
                                            <>
                                                <Mail className="w-6 h-6 mr-3" />
                                                Solicitar Proposta Gratuita
                                                <ArrowRight className="w-6 h-6 ml-3" />
                                            </>
                                        )}
                                    </Button>
                                    <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                                        <Shield className="w-4 h-4" />
                                        <span>Seus dados estão seguros. Não compartilhamos com terceiros.</span>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Methods */}
                        <div>
                            <h4 className="text-gray-900 font-bold mb-8 text-center text-2xl">Ou entre em contato diretamente:</h4>
                            <div className="space-y-6">
                                {contactMethods.map((method, index) => (
                                    <Card
                                        key={index}
                                        className="group relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 cursor-pointer backdrop-blur-xl overflow-hidden hover:shadow-xl hover:shadow-blue-200/25"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <CardContent className="relative p-8 flex items-center space-x-6">
                                            <div
                                                className={`w-18 h-18 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}
                                            >
                                                {method.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h5 className="text-gray-900 font-bold text-xl">{method.title}</h5>
                                                    <Badge className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 border-2 border-green-200 text-xs">
                                                        {method.badge}
                                                    </Badge>
                                                </div>
                                                <p className="text-gray-600 text-lg">{method.description}</p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 bg-white hover:border-blue-700 px-6 py-3 font-semibold"
                                            >
                                                {method.action}
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="relative text-center p-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border-2 border-blue-200 backdrop-blur-xl shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30 rounded-3xl" />
                    <div className="relative">
                        <h3 className="text-4xl font-bold text-gray-900 mb-16 flex items-center justify-center">
                            <Sparkles className="w-10 h-10 text-blue-600 mr-4" />
                            Por que nossos preços são personalizados?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-12">
                            {reasonsData.map((reason, index) => (
                                <div key={index} className="group text-center">
                                    <div
                                        className={`w-20 h-20 bg-gradient-to-r ${reason.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl text-white`}
                                    >
                                        {reason.icon}
                                    </div>
                                    <h4 className="text-gray-900 font-bold mb-4 text-2xl group-hover:text-blue-700 transition-colors">
                                        {reason.title}
                                    </h4>
                                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
