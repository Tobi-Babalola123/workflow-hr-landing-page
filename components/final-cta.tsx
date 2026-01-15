import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-[#0A0508] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Request a demo to see WorkFlow in action</h2>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
            <Button className="bg-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 h-12 px-8 font-semibold whitespace-nowrap">
              Get Started
            </Button>
          </div>

          <p className="text-sm text-white/60 mt-4">
            Or, call our sales team: <span className="text-white font-semibold">1-888-WORKFLOW</span>
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="flex flex-col items-center gap-8">
            <div className="text-6xl font-bold tracking-wider opacity-20">WORKFLOW</div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-white/60">Download the WorkFlow App</p>
          </div>
        </div>
      </div>
    </section>
  )
}
