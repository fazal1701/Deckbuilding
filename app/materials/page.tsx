const materials = [
  {
    title: "Trex Composite Decking",
    subtitle: "Premium Composite Collection",
    price: "$28-38/sq ft",
    image: "/images/IpeHardwoodFlooring.jpg",
    description: "Industry-leading composite decking with superior durability and style",
    pros: [
      "25-year fade & stain warranty",
      "Scratch & mold resistant",
      "Low maintenance",
      "Eco-friendly recycled materials",
      "Wide color selection",
    ],
    cons: ["Higher upfront cost", "Can get hot in direct sun"],
    bestFor: "Homeowners wanting premium, low-maintenance decking",
    rating: 5,
  },
  {
    title: "TimberTech Composite Decking",
    subtitle: "Advanced Composite Technology",
    price: "$25-35/sq ft",
    image: "/images/Multi-level-entertainment-deck.jpg",
    description: "High-performance composite with realistic wood grain textures",
    pros: [
      "30-year limited warranty",
      "Capped polymer technology",
      "Fade & stain resistant",
      "Splinter-free surface",
      "Easy installation",
    ],
    cons: ["Premium pricing", "Limited availability"],
    bestFor: "Those seeking authentic wood appearance without maintenance",
    rating: 5,
  },
  {
    title: "Azek PVC Decking",
    subtitle: "100% Synthetic PVC",
    price: "$30-42/sq ft",
    image: "/images/Rooftop-urban-retreat.jpg",
    description: "Premium PVC decking that won't rot, warp, or splinter",
    pros: [
      "Lifetime limited warranty",
      "Completely waterproof",
      "Stain & scratch resistant",
      "Cool surface technology",
      "Paintable surface",
    ],
    cons: ["Highest cost option", "Can expand/contract"],
    bestFor: "Extreme weather conditions and high-moisture areas",
    rating: 4,
  },
  {
    title: "Fiberon Composite Decking",
    subtitle: "Good Life Collection",
    price: "$22-32/sq ft",
    image: "/images/cedarpooldeckparadise.jpg",
    description: "Value-oriented composite with excellent performance",
    pros: [
      "25-year warranty",
      "PermaTech cap technology",
      "Slip-resistant surface",
      "Consistent color",
      "Good value proposition",
    ],
    cons: ["Fewer color options", "Less premium feel"],
    bestFor: "Budget-conscious buyers wanting composite benefits",
    rating: 4,
  },
  {
    title: "Zuri PVC Decking",
    subtitle: "Premium PVC Collection",
    price: "$32-45/sq ft",
    image: "/images/contemporycompositedeck.jpg",
    description: "Luxury PVC decking with authentic hardwood appearance",
    pros: [
      "25-year warranty",
      "Realistic wood grain",
      "Stain & fade resistant",
      "Low thermal expansion",
      "Premium aesthetics",
    ],
    cons: ["Very high cost", "Limited color range"],
    bestFor: "Luxury installations requiring premium aesthetics",
    rating: 4,
  },
  {
    title: "Red Cedar Decking",
    subtitle: "Western Red Cedar",
    price: "$18-28/sq ft",
    image: "/images/curvedcedardeck.jpg",
    description: "Beautiful natural wood with natural weather resistance",
    pros: [
      "Natural beauty & aroma",
      "Naturally rot resistant",
      "Easy to work with",
      "Renewable resource",
      "Can be stained/painted",
    ],
    cons: ["Requires regular maintenance", "Can warp or split", "Color fades over time"],
    bestFor: "Traditional wood lovers willing to maintain",
    rating: 4,
  },
  {
    title: "Ipe Wood Decking",
    subtitle: "Brazilian Hardwood",
    price: "$38-55/sq ft",
    image: "/images/pergolagardendeck.jpg",
    description: "Ultra-premium hardwood with exceptional durability",
    pros: [
      "50+ year lifespan",
      "Naturally fire resistant",
      "Extremely dense & durable",
      "Beautiful rich color",
      "Insect resistant",
    ],
    cons: ["Very expensive", "Difficult to work with", "Requires pre-drilling", "Limited sustainability"],
    bestFor: "Premium installations requiring maximum durability",
    rating: 5,
  },
];

export default function MaterialsPage() {
  return (
    <div className="materials-grid">
      {materials.map((material) => (
        <div className="material-card" key={material.title}>
          <img
            src={material.image}
            alt={material.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px 8px 0 0",
              marginBottom: "16px",
            }}
          />
          <h3>{material.title}</h3>
          <p>{material.subtitle}</p>
          <p>{material.price}</p>
          <p>{material.description}</p>
          {/* You can expand here to include pros, cons, bestFor, etc. */}
        </div>
      ))}
    </div>
  );
}
