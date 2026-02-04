import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";

const StreamDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Redirect to dedicated pages
  if (slug === "ux-ui-design") {
    return <Navigate to="/streams/ux-ui-design" replace />;
  }
  if (slug === "digital-marketing") {
    return <Navigate to="/streams/digital-marketing" replace />;
  }
  if (slug === "full-stack-development") {
    return <Navigate to="/streams/full-stack-development" replace />;
  }
  if (slug === "creative-video-design") {
    return <Navigate to="/streams/creative-video-design" replace />;
  }
  
  const title = slug || "Stream";

  return (
    <Layout>
      <section className="py-14 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Content coming soon. This page will detail the {title} internship stream, curriculum, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center cta-spacing">
              <Button variant="cta" asChild>
                <Link to="/join">Apply Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/streams">View All Streams</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StreamDetail;
