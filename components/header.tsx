import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#4A1942] text-white border-b border-white/10">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white rounded" />
            <span className="font-bold text-sm">WORKFLOW</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1 hover:opacity-80">
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:opacity-80">
              Platform <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:opacity-80">
              Solutions <ChevronDown className="w-4 h-4" />
            </button>
            <button className="hover:opacity-80">Global</button>
            <button className="flex items-center gap-1 hover:opacity-80">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <button className="hover:opacity-80">Pricing</button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm hover:opacity-80">
            <span className="w-5 h-5 flex items-center justify-center border border-white/30 rounded text-xs">EN</span>
          </button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            Login
          </Button>
          <Button size="sm" className="bg-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 font-semibold">
            Get a demo
          </Button>
        </div>
      </div>
    </header>
  )
}
