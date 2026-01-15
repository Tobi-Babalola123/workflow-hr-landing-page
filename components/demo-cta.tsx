import { Button } from "@/components/ui/button"

export function DemoCTA() {
  return (
    <section className="bg-gradient-to-br from-[#4A1942] via-[#5A2050] to-[#6B2560] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Get a demo—live or on demand</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto text-pretty">
          See how WorkFlow can help you manage all of your employee data and operations, all from one place, no matter
          your company's size.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 h-12 px-8 font-semibold">
            Request Live Demo
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-12 px-8 font-semibold"
          >
            Watch Video
          </Button>
        </div>
      </div>
    </section>
  )
}
