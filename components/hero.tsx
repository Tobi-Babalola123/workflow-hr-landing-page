import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#4A1942] via-[#5A2050] to-[#6B2560] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-white rounded-full" />
              <span className="opacity-90">All-in-one Platform</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Employees get more done with WorkFlow
            </h1>

            <p className="text-lg text-white/80 max-w-xl text-pretty">
              Run all of HR, IT, and Finance in one platform. Automate manual work and streamline operations from
              onboarding to offboarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0 h-12 text-base"
              />
              <Button className="bg-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 h-12 px-8 font-semibold whitespace-nowrap">
                Create free account
              </Button>
            </div>

            <p className="text-sm text-white/60">
              No credit card required · <span className="underline cursor-pointer">Get started</span>
            </p>

            {/* Testimonials */}
            <div className="flex gap-6 pt-8">
              {[
                { company: "Lattice Advice", rating: 5, reviews: "2,841" },
                { company: "G2", rating: 5, reviews: "3,129" },
                { company: "Capterra", rating: 5, reviews: "892" },
              ].map((item) => (
                <div key={item.company} className="space-y-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FDB022] text-[#FDB022]" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold">{item.company}</p>
                  <p className="text-xs text-white/60">{item.reviews} reviews</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            <div className="bg-[#3A0F35]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="space-y-3">
                {[
                  { label: "HR", value: "+14.2%" },
                  { label: "IT", value: "+8.1%" },
                  { label: "Finance", value: "+22.5%" },
                  { label: "Payroll", value: "+9.8%" },
                  { label: "Benefits", value: "+18.3%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FDB022] rounded-full" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-[#FDB022] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-4 -right-4 bg-white text-black rounded-lg p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/professional-woman-avatar.png"
                  alt="Emily Johnson"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs font-semibold">Emily Johnson</p>
                  <p className="text-xs text-gray-500">Marketing Lead</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white text-black rounded-lg p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#FDB022] rounded-full flex items-center justify-center text-xs font-bold text-[#4A1942]">
                  98
                </div>
                <div className="text-xs font-semibold">Onboarding Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
