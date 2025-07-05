/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Images, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Dashboard Principal",
    description: "Visão geral completa do sistema com métricas em tempo real",
    category: "Dashboard",
    device: "desktop",
    placeholder: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Gestão de Chamados",
    description: "Interface intuitiva para gerenciar tickets e solicitações",
    category: "Tickets",
    device: "desktop",
    placeholder: "/placeholder.svg?height=400&width=600",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 3,
    title: "Chat em Tempo Real",
    description: "Comunicação instantânea entre equipe e usuários",
    category: "Chat",
    device: "mobile",
    placeholder: "/placeholder.svg?height=500&width=300",
    color: "from-blue-700 to-blue-800",
  },
  {
    id: 4,
    title: "Relatórios Avançados",
    description: "Analytics detalhados com gráficos interativos",
    category: "Analytics",
    device: "desktop",
    placeholder: "/placeholder.svg?height=400&width=600",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 5,
    title: "App Mobile",
    description: "Acesso completo via dispositivos móveis",
    category: "Mobile",
    device: "mobile",
    placeholder: "/placeholder.svg?height=500&width=300",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: 6,
    title: "Configurações",
    description: "Painel de configurações personalizáveis",
    category: "Settings",
    device: "tablet",
    placeholder: "/placeholder.svg?height=400&width=500",
    color: "from-blue-700 to-blue-800",
  },
]

const categories = ["Todos", "Dashboard", "Tickets", "Chat", "Analytics", "Mobile", "Settings"]

export default function ImageGallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredImages =
    selectedCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  const nextImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Enhanced Background */}
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-2 border-blue-200 px-6 py-3 text-sm font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <Images className="w-4 h-4 mr-2" />
                Galeria do Sistema
              </Badge>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Veja o{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                  MindDesk
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/40 to-blue-300/30 blur-lg -z-10" />
              </span>{" "}
              em Ação
            </h2>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore as interfaces intuitivas e funcionalidades avançadas que tornam o MindDesk a escolha ideal para
              sua empresa
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl"
                    : "border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group relative bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-blue-200/25 backdrop-blur-sm overflow-hidden"
                onMouseEnter={() => setHoveredCard(image.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedImage(image)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-0 relative">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={image.placeholder || "/placeholder.svg"}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                      <ZoomIn className="w-5 h-5 text-blue-600" />
                    </div>

                    {/* Device Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-blue-600">{getDeviceIcon(image.device)}</div>
                      <span className="text-xs font-medium text-gray-700 capitalize">{image.device}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Badge className={`bg-gradient-to-r ${image.color} text-white border-0`}>{image.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {image.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mt-16 text-center">
            <div className="relative inline-block p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl border-2 border-blue-200 backdrop-blur-xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-50/20 to-blue-100/30 rounded-3xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quer ver uma demonstração ao vivo?</h3>
                <p className="text-gray-600 mb-4">
                  Agende uma demo personalizada e veja como o MindDesk pode transformar sua gestão de TI
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Agendar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedImage(null)}
                className="rounded-full w-10 h-10 p-0"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Image */}
            <div className="relative">
              <img
                src={selectedImage.placeholder || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-white/90 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-white/90 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge className={`bg-gradient-to-r ${selectedImage.color} text-white`}>{selectedImage.category}</Badge>
                <div className="flex items-center gap-2 text-gray-600">
                  {getDeviceIcon(selectedImage.device)}
                  <span className="text-sm capitalize">{selectedImage.device}</span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {filteredImages.findIndex((img) => img.id === selectedImage.id) + 1} de {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
