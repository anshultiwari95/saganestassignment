export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices.",
      icon: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android devices.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      icon: "🎨"
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to help your business grow.",
      icon: "💼"
    },
    {
      title: "Maintenance",
      description: "Ongoing support and maintenance to keep your applications running smoothly.",
      icon: "🔧"
    },
    {
      title: "Analytics",
      description: "Data-driven insights to optimize your digital presence and performance.",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-tertiary max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business 
            succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-lift cursor-pointer">
              <div className="text-3xl sm:text-4xl mb-4 hover-scale">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-tertiary text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
