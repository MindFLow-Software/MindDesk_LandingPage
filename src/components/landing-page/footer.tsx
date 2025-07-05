"use client"

import { useState } from "react"
import {
  Bot,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"

const footerLinks = {
  product: [
    { name: "Funcionalidades", href: "#features" },
    { name: "Preços", href: "#pricing" },
    { name: "Integrações", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Documentação", href: "#docs" },
    { name: "Changelog", href: "#changelog" },
  ],
  company: [
    { name: "Sobre Nós", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Carreiras", href: "#careers" },
    { name: "Contato", href: "#contact" },
    { name: "Imprensa", href: "#press" },
    { name: "Parceiros", href: "#partners" },
  ],
  support: [
    { name: "Central de Ajuda", href: "#help" },
    { name: "Comunidade", href: "#community" },
    { name: "Status do Sistema", href: "#status" },
    { name: "Segurança", href: "#security" },
    { name: "Treinamentos", href: "#training" },
    { name: "Webinars", href: "#webinars" },
  ],
  legal: [
    { name: "Termos de Uso", href: "#terms" },
    { name: "Política de Privacidade", href: "#privacy" },
    { name: "LGPD", href: "#lgpd" },
    { name: "Cookies", href: "#cookies" },
    { name: "SLA", href: "#sla" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-500" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-blue-600" },
  { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
]

const certifications = [
  { name: "ISO 27001", icon: Shield },
  { name: "SOC 2", icon: Award },
  { name: "LGPD", icon: CheckCircle },
]

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "10,000+", label: "Empresas" },
  { value: "24/7", label: "Suporte" },
]

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-4 py-2 text-sm font-medium">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </Badge>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Fique por dentro das{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                novidades
              </span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Receba dicas exclusivas, atualizações de produto e insights sobre atendimento ao cliente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Inscrever-se
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">MindDesk</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                O futuro do atendimento ao cliente está aqui. Transforme sua experiência de suporte com tecnologia de
                ponta e IA avançada.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>contato@minddesk.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>(11) 4000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center text-gray-600 ${social.color} hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-110`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Produto</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-8 border-t border-gray-200 border-b">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-gray-600 text-sm">&copy; {currentYear} MindDesk. Todos os direitos reservados.</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Feito com</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span className="text-gray-600 text-sm">no Brasil</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <IconComponent className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">{cert.name}</span>
                    </div>
                  )
                })}
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Todos os sistemas operacionais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
          >
            <ArrowRight className="w-5 h-5 -rotate-90" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
