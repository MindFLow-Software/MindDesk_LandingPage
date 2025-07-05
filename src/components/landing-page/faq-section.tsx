"use client"
import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { Badge } from "@/src/components/ui/badge"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import {
    HelpCircle,
    Shield,
    Clock,
    CheckCircle,
    MessageCircle,
    Sparkles,
    ArrowRight,
    Zap,
    Calendar,
} from "lucide-react"

const faqs = [
    {
        question: "Como funciona o período de teste gratuito?",
        answer:
            "Você tem 30 dias para testar todas as funcionalidades sem limitações. Não é necessário cartão de crédito para começar. Durante o período de teste, você terá acesso completo a todos os recursos, incluindo IA conversacional, automação e relatórios avançados.",
        icon: <Clock className="w-5 h-5" />,
        color: "from-blue-500 to-blue-600",
        badge: "Sem Cartão",
        category: "Teste",
    },
    {
        question: "É possível integrar com nossos sistemas atuais?",
        answer:
            "Absolutamente. Temos integrações nativas com mais de 100 ferramentas populares como Slack, WhatsApp, Salesforce, e APIs robustas para integrações customizadas. Nossa equipe técnica oferece suporte completo durante a implementação.",
        icon: <Zap className="w-5 h-5" />,
        color: "from-blue-600 to-blue-700",
        badge: "100+ Apps",
        category: "Integração",
    },
    {
        question: "Como é o suporte técnico?",
        answer:
            "Oferecemos suporte 24/7 via chat, email e telefone. Nosso tempo médio de resposta é de 2 minutos para chat e 15 minutos para email. Clientes Enterprise têm acesso a um gerente de conta dedicado.",
        icon: <MessageCircle className="w-5 h-5" />,
        color: "from-blue-700 to-blue-800",
        badge: "24/7",
        category: "Suporte",
    },
    {
        question: "Os dados ficam seguros?",
        answer:
            "Sim, utilizamos criptografia end-to-end, certificações ISO 27001 e LGPD compliance. Seus dados são armazenados em servidores seguros na AWS com backup automático e monitoramento 24/7. Nunca compartilhamos dados com terceiros.",
        icon: <Shield className="w-5 h-5" />,
        color: "from-blue-500 to-blue-700",
        badge: "ISO 27001",
        category: "Segurança",
    },
    {
        question: "Posso cancelar a qualquer momento?",
        answer:
            "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento. Oferecemos também a opção de pausar temporariamente sua conta se necessário.",
        icon: <CheckCircle className="w-5 h-5" />,
        color: "from-blue-600 to-blue-800",
        badge: "Sem Taxa",
        category: "Cancelamento",
    },
    {
        question: "Qual o tempo de implementação?",
        answer:
            "A implementação básica leva apenas 5 minutos. Para configurações avançadas e integrações customizadas, nosso time de onboarding garante que tudo esteja funcionando em até 48 horas.",
        icon: <Zap className="w-5 h-5" />,
        color: "from-blue-500 to-blue-600",
        badge: "5 min",
        category: "Setup",
    },
]

export default function FAQSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [openItem, setOpenItem] = useState<string | undefined>(undefined)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="relative py-24 px-4 bg-white overflow-hidden">
            {/* Enhanced Background */}
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Enhanced Header Section */}
                <div className="text-center mb-20">
                    <div
                        className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        <div className="inline-flex items-center gap-2 mb-8">
                            <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                                <HelpCircle className="w-4 h-4 mr-2" />
                                Dúvidas Frequentes
                            </Badge>
                        </div>
                    </div>

                    <div
                        className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            Perguntas{" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                                    Frequentes
                                </span>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
                            </span>
                        </h2>
                    </div>

                    <div
                        className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                            Tire suas dúvidas sobre o MindDesk e descubra como podemos transformar seu atendimento
                        </p>
                    </div>
                </div>

                {/* Enhanced FAQ Accordion */}
                <div
                    className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <div className="mb-16">
                        <Accordion type="single" collapsible className="space-y-6" value={openItem} onValueChange={setOpenItem}>
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="group relative bg-white border-2 border-blue-100 hover:border-blue-300 rounded-2xl backdrop-blur-xl overflow-hidden hover:shadow-xl hover:shadow-blue-200/25 transition-all duration-500"
                                >
                                    {/* Background Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-6 z-10">
                                        <Badge className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-medium">
                                            {faq.badge}
                                        </Badge>
                                    </div>

                                    <AccordionTrigger className="relative text-gray-900 hover:text-blue-700 text-left font-semibold text-lg px-8 py-6 hover:no-underline transition-colors duration-300 [&[data-state=open]]:text-blue-700">
                                        <div className="flex items-center gap-4 pr-8">
                                            <div
                                                className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}
                                            >
                                                {faq.icon}
                                            </div>
                                            <span className="flex-1">{faq.question}</span>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="relative text-gray-700 leading-relaxed text-lg px-8 pb-8">
                                        <div className="pl-16">
                                            <p className="mb-4">{faq.answer}</p>
                                            <div className="flex items-center gap-2 text-blue-600 text-sm font-medium bg-blue-50 px-3 py-2 rounded-full ">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>Resposta verificada pela equipe técnica</span>
                                            </div>
                                        </div>
                                    </AccordionContent>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>

                {/* Enhanced Still Have Questions Section */}
                <div
                    className={`transform transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                    <Card className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 border-2 border-blue-200 backdrop-blur-xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30" />

                        {/* Floating Elements */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                        <div className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-1000" />
                        <div className="absolute bottom-6 left-8 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-2000" />

                        <div className="relative p-12 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl mx-auto mb-8 shadow-lg">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
                            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                                Nossa equipe de especialistas está pronta para ajudar você a encontrar a melhor solução
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Falar com Especialista
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 bg-white hover:border-blue-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                                >
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Agendar Demo
                                </Button>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
                                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Resposta em 2 minutos</span>
                                </div>
                                <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Suporte 24/7</span>
                                </div>
                                <div className="flex items-center gap-2 text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Sem compromisso</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
