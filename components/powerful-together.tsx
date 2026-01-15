import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, DollarSign, Laptop, BarChart } from "lucide-react"

export function PowerfulTogether() {
  const features = [
    {
      icon: Users,
      title: "HCM",
      description: "Effortlessly streamline across the entire employee lifecycle, from hire to retire.",
      color: "bg-orange-100",
    },
    {
      icon: DollarSign,
      title: "Payroll",
      description: "Automate and run payroll in seconds, whether you're paying employees in one state or 50.",
      color: "bg-blue-100",
    },
    {
      icon: Laptop,
      title: "IT",
      description: "Streamline security using device management and identity tools for IT teams of any size.",
      color: "bg-red-100",
    },
    {
      icon: BarChart,
      title: "Spend",
      description: "Save money unified by controlling spend and tracking your company's card expenses in one place.",
      color: "bg-yellow-100",
    },
  ]

  return (
    <section className="bg-[#F5F3F0] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Powerful alone.
            <br />
            Stronger together.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Pick any individual product and you'll have one of the best in its category. Put them together—and you have
            an experience no other platform can offer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                <Button
                  variant="outline"
                  className="w-full bg-[#FDB022] border-[#FDB022] text-[#4A1942] hover:bg-[#FDB022]/90 font-semibold"
                >
                  Get a demo
                </Button>
                <button className="w-full text-sm text-gray-700 hover:underline">Learn more</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
