import { TrendingUp, Building2, Banknote, Globe, ArrowUpRight } from "lucide-react";

export interface Opportunity {
  title: string;
  description: string;
  icon: "trending" | "building" | "money" | "global";
}

interface StreamOpportunitiesProps {
  opportunities: Opportunity[];
  salaryRange?: string;
  jobGrowth?: string;
  streamName: string;
}

const iconMap = {
  trending: TrendingUp,
  building: Building2,
  money: Banknote,
  global: Globe,
};

const StreamOpportunities = ({ 
  opportunities, 
  salaryRange, 
  jobGrowth,
  streamName 
}: StreamOpportunitiesProps) => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Career Opportunities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore the growing demand and opportunities in {streamName}
            </p>
          </div>

          {/* Stats Cards */}
          {(salaryRange || jobGrowth) && (
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto mb-12">
              {salaryRange && (
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
                  <Banknote className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{salaryRange}</p>
                  <p className="text-sm text-muted-foreground mt-1">Average Salary Range (India)</p>
                </div>
              )}
              {jobGrowth && (
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-foreground">{jobGrowth}</p>
                  <p className="text-sm text-muted-foreground mt-1">Job Growth Rate</p>
                </div>
              )}
            </div>
          )}

          {/* Opportunity Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity, index) => {
              const IconComponent = iconMap[opportunity.icon];
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        {opportunity.title}
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                      </h3>
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamOpportunities;
