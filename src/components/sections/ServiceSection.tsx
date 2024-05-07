import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Errand Coordination",
      description:
        " Airrand facilitates the coordination of various errands, tasks, and deliveries, connecting users with trusted task runners who can efficiently handle these requests.",
    },
    {
      id: 1,
      iconUrl: "/images/video_icon.png",
      title: "Task Runner Matching",
      description:
        "Airrand's platform matches users with task runners based on their specific requirements and preferences, ensuring a seamless and personalized experience for both parties.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Real-time Tracking",
      description:
        "Airrand provides real-time tracking of tasks and deliveries, along with built-in communication features that enable users to stay updated and connected throughout the entire process.",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
