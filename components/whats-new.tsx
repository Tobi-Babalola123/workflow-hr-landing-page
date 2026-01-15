import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WhatsNew() {
  const articles = [
    {
      title: "Bingeworthy business content",
      description: "Binge to-do list of videos and guides to help you get started with your business",
      gradient: "from-purple-900 to-purple-700",
      image: "/business-content-video-thumbnail-purple-background.jpg",
    },
    {
      title: "With WorkFlow, you can build your entire code on top of WorkFlow and the systems you already use",
      description: "",
      gradient: "from-gray-100 to-gray-50",
      image: "/modern-software-dashboard.png",
    },
    {
      title: "How WorkFlow's PEO helped empower a dynamic workforce at Barry's",
      description: "",
      gradient: "from-red-900 to-red-700",
      image: "/fitness-studio-with-red-lighting.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">What's new at WorkFlow</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                )}
                <button className="flex items-center gap-2 text-sm font-semibold text-[#4A1942] group-hover:gap-3 transition-all">
                  Read story <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
