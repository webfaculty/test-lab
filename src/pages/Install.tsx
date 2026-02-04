import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Download, Smartphone, Check, Share, MoreVertical, Plus } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect device type
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for successful install
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const features = [
    { icon: Smartphone, title: "Works Offline", description: "Access your dashboard even without internet" },
    { icon: Download, title: "Instant Loading", description: "Lightning-fast app experience" },
    { icon: Check, title: "Push Notifications", description: "Get updates on your applications" },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-background via-background to-secondary/20 py-12 md:py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 mb-6">
              <Download className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Install IN10SIP App
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the full app experience on your device. Quick access, offline support, and instant updates.
            </p>
          </div>

          {isInstalled ? (
            <Card className="max-w-md mx-auto text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Already Installed!</CardTitle>
                <CardDescription>
                  You're all set. IN10SIP is installed on your device.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <>
              {/* Install Button for supported browsers */}
              {deferredPrompt && (
                <div className="flex justify-center mb-8">
                  <Button
                    size="lg"
                    variant="cta"
                    onClick={handleInstallClick}
                    className="text-lg px-8 py-6"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Install Now
                  </Button>
                </div>
              )}

              {/* iOS Instructions */}
              {isIOS && !deferredPrompt && (
                <Card className="max-w-md mx-auto mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Share className="h-5 w-5" />
                      Install on iPhone/iPad
                    </CardTitle>
                    <CardDescription>Follow these simple steps</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">1</div>
                      <div>
                        <p className="font-medium">Tap the Share button</p>
                        <p className="text-sm text-muted-foreground">Find it at the bottom of Safari</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">2</div>
                      <div>
                        <p className="font-medium">Scroll and tap "Add to Home Screen"</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          Look for the <Plus className="h-4 w-4" /> icon
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">3</div>
                      <div>
                        <p className="font-medium">Tap "Add" to confirm</p>
                        <p className="text-sm text-muted-foreground">The app icon will appear on your home screen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Android Instructions */}
              {isAndroid && !deferredPrompt && (
                <Card className="max-w-md mx-auto mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MoreVertical className="h-5 w-5" />
                      Install on Android
                    </CardTitle>
                    <CardDescription>Follow these simple steps</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">1</div>
                      <div>
                        <p className="font-medium">Tap the menu button</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          Look for <MoreVertical className="h-4 w-4" /> in the browser
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">2</div>
                      <div>
                        <p className="font-medium">Tap "Install app" or "Add to Home Screen"</p>
                        <p className="text-sm text-muted-foreground">The option may vary by browser</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">3</div>
                      <div>
                        <p className="font-medium">Tap "Install" to confirm</p>
                        <p className="text-sm text-muted-foreground">The app will be added to your home screen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Desktop Instructions */}
              {!isIOS && !isAndroid && !deferredPrompt && (
                <Card className="max-w-md mx-auto mb-8">
                  <CardHeader>
                    <CardTitle>Install on Desktop</CardTitle>
                    <CardDescription>Use Chrome, Edge, or another supported browser</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Look for the install icon in your browser's address bar, or check the browser menu for "Install IN10SIP".
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Features */}
              <div className="grid gap-6 md:grid-cols-3 mt-12">
                {features.map((feature) => (
                  <Card key={feature.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Install;
