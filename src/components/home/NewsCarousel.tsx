import { TrendingUp, Users, Building2, Sparkles } from "lucide-react";

const newsItems = [
  { icon: TrendingUp, text: "73% of companies prefer interns with project portfolios" },
  { icon: Building2, text: "Practical skills beat academic scores in hiring decisions" },
  { icon: Users, text: "IN10SIP students contributing to real projects across startups" },
  { icon: Sparkles, text: "New skill streams coming soon based on market demand" },
];

const NewsCarousel = () => {
  return (
    <section className="py-3 bg-primary overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...newsItems, ...newsItems].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <item.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-primary-foreground text-sm font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <div className="animate-marquee2 flex whitespace-nowrap absolute top-0">
          {[...newsItems, ...newsItems].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <item.icon className="w-4 h-4 text-accent" />
              </div>
              <span className="text-primary-foreground text-sm font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
