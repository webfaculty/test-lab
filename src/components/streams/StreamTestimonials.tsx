import { Star, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  videoUrl?: string;
}

interface StreamTestimonialsProps {
  testimonials: Testimonial[];
  streamName: string;
}

const StreamTestimonials = ({ testimonials, streamName }: StreamTestimonialsProps) => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from students who transformed their careers through {streamName}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 relative"
              >
                <Quote className="h-8 w-8 text-accent/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-accent">
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                </div>

                {/* Video placeholder */}
                {testimonial.videoUrl && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <a 
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline flex items-center gap-2"
                    >
                      Watch video testimonial →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamTestimonials;
