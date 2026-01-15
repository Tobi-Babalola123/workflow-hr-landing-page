import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function GlobalSection() {
  return (
    <section className="bg-[#F5F3F0] pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Compliantly manage your workforce across 185+ countries</h3>
                <p className="text-gray-600">
                  Access to one of America's most respected employer liability partners to pay contractors in over 140
                  countries.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              <Button className="bg-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 font-semibold">Get a demo</Button>
              <button className="text-sm text-gray-700 hover:underline">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
