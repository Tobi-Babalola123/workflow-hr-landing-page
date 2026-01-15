import Image from "next/image"

export function Awards() {
  const awards = [
    { name: "Best HR Software 2025", badge: "/award-badge-hr-software-gold.jpg" },
    { name: "Top Rated Payroll", badge: "/award-badge-payroll-excellence-blue.jpg" },
    { name: "Leader in IT Management", badge: "/award-badge-it-management-leader-green.jpg" },
    { name: "Excellence in Finance", badge: "/award-badge-finance-excellence-purple.jpg" },
    { name: "Best All-in-One Platform", badge: "/award-badge-platform-integration-silver.jpg" },
    { name: "Customer Choice Award", badge: "/award-badge-customer-choice-red.jpg" },
  ]

  return (
    <section className="py-16 bg-[#F5F3F0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-32 h-32 flex items-center justify-center"
            >
              <Image
                src={award.badge || "/placeholder.svg"}
                alt={award.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
