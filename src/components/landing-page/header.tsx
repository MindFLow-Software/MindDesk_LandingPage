"use client"

import { useState, useEffect } from "react"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Bot, Menu, X, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

const navigationLinks = [
    { name: "Benefícios", href: "#benefits" },
    { name: "Preços", href: "#pricing" },
    { name: "Funcionalidades", href: "#features" },
    { name: "Depoimentos", href: "#testimonials" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsCompanyDropdownOpen(false)
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "backdrop-blur-xl bg-white/95 border-b border-blue-200 shadow-lg shadow-blue-100/25"
                    : "backdrop-blur-md bg-white/80 border-b border-blue-100"
                }`}
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center space-x-3 group">
                    <div
                        className={`w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${isScrolled ? "shadow-blue-500/25" : ""
                            }`}
                    >
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                            MindDesk
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Buttons */}
                <div className="hidden lg:flex items-center space-x-3">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                        Teste Grátis
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={closeMenu}
                            style={{ top: "80px" }}
                        />

                        {/* Mobile Menu */}
                        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b-2 border-blue-200 shadow-xl shadow-blue-200/25 lg:hidden">
                            <nav className="flex flex-col p-6 space-y-1">
                                {/* Navigation Links */}
                                <div className="space-y-1 mb-6">
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium"
                                            onClick={closeMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="border-t border-blue-100 pt-4 mb-6">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 px-4 py-2">
                                        <Phone className="w-4 h-4 text-blue-600" />
                                        <span>(11) 4000-0000</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 px-4 py-2">
                                        <Mail className="w-4 h-4 text-blue-600" />
                                        <span>contato@minddesk.com.br</span>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="space-y-3">
                                    <Button
                                        variant="outline"
                                        className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 bg-transparent"
                                        onClick={closeMenu}
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Entrar em Contato
                                    </Button>
                                    <Button
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                        onClick={closeMenu}
                                    >
                                        Começar Teste Grátis
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>

                                {/* Promotional Badge */}
                                <div className="mt-6 pt-4 border-t border-blue-100">
                                    <Badge className="w-full justify-center bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 py-3 text-sm font-medium">
                                        🎉 30 dias grátis • Sem cartão de crédito
                                    </Badge>
                                </div>
                            </nav>
                        </div>
                    </>
                )}
            </div>

            {/* Click outside to close dropdown */}
            {isCompanyDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsCompanyDropdownOpen(false)} />}
        </header>
    )
}
