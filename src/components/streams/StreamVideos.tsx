import { Play, Clock, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface StreamVideo {
  title: string;
  description: string;
  duration: string;
  youtubeId?: string;
  thumbnailUrl?: string;
  category: "awareness" | "opportunity" | "testimonial" | "overview";
}

interface StreamVideosProps {
  videos: StreamVideo[];
  streamName: string;
}

const categoryLabels: Record<StreamVideo["category"], string> = {
  awareness: "Industry Awareness",
  opportunity: "Career Opportunities",
  testimonial: "Student Stories",
  overview: "Program Overview",
};

const StreamVideos = ({ videos, streamName }: StreamVideosProps) => {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Learn About {streamName}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Watch these videos to understand the stream, opportunities, and industry trends before you enroll.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    {video.youtubeId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Play className="h-7 w-7 text-accent" />
                          </div>
                          <p className="text-sm text-muted-foreground">Video coming soon</p>
                        </div>
                      </div>
                    )}
                  </AspectRatio>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    {categoryLabels[video.category]}
                  </span>

                  <h3 className="text-lg font-semibold text-foreground mt-3">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    {video.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </span>
                    <span className="text-xs text-accent font-medium">
                      Free to watch
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamVideos;
