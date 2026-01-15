export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: ["Employee Database", "Workflow Automation", "Analytics", "Integrations", "App Shop", "WorkFlow Unity"],
    },
    {
      title: "HCM",
      links: [
        "HR Services",
        "Recruiting",
        "Onboarding",
        "Performance Management",
        "Learning Management",
        "Workforce Planning",
        "Time & Attendance",
        "Scheduling",
      ],
    },
    {
      title: "IT",
      links: ["Device & Access Management", "Inventory Management", "IT Helpdesk"],
    },
    {
      title: "Payroll",
      links: ["US Payroll", "Global Payroll", "Contractor Payments", "Payroll Services"],
    },
    {
      title: "Spend",
      links: ["Expense Management", "Travel", "Bill Pay", "HRIS"],
    },
    {
      title: "Global",
      links: [
        "Employee of Record",
        "International Payroll",
        "Contractor Management",
        "Global Benefits",
        "International Hiring",
        "Global HR Compliance",
        "Visa Services",
      ],
    },
    {
      title: "Solutions",
      links: ["Partner Program", "Brokers", "Accountants", "PEO Firms", "Non-Profits", "Construction", "Healthcare"],
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Guides",
        "Customer Stories",
        "Glossary",
        "Podcast",
        "Rippling University",
        "API Documentation",
        "Marketplace Providers",
      ],
    },
    {
      title: "Legal",
      links: [
        "Licensing",
        "Privacy Policy",
        "Data Security & AI Policy",
        "Cookies",
        "Terms of Service",
        "Code of Conduct",
      ],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Values", "Press", "Customers", "Support Status"],
    },
  ]

  return (
    <footer className="bg-[#1A0A15] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 WorkFlow Human Capital Inc.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
