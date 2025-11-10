import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroChatMockup from "@/assets/hero-chat-mockup.png";
import characterSelectionGrid from "@/assets/character-selection-grid.png";
import chatInterfaceDetail from "@/assets/chat-interface-detail.png";
import memoryTimeline from "@/assets/memory-timeline.png";
import generatedImageExample from "@/assets/generated-image-example.png";

interface Asset {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "mockup" | "banner" | "screenshot";
}

const assets: Asset[] = [
  {
    id: "hero-chat",
    title: "Chat Interface Mockup",
    description: "Hero section chat mockup showing meaningful conversation",
    image: heroChatMockup,
    category: "mockup",
  },
  {
    id: "character-grid",
    title: "Character Selection Banner",
    description: "Grid layout of diverse AI companion cards",
    image: characterSelectionGrid,
    category: "banner",
  },
  {
    id: "chat-detail",
    title: "Chat Interface Screenshot",
    description: "Detailed chat with text and voice messages",
    image: chatInterfaceDetail,
    category: "screenshot",
  },
  {
    id: "memory-timeline",
    title: "Memory Timeline Visual",
    description: "Relationship milestones and memories interface",
    image: memoryTimeline,
    category: "screenshot",
  },
  {
    id: "ai-generation",
    title: "AI Image Generation Example",
    description: "Chat showing AI-generated image capability",
    image: generatedImageExample,
    category: "screenshot",
  },
];

const Assets = () => {
  const navigate = useNavigate();

  const downloadAsset = (asset: Asset) => {
    const link = document.createElement("a");
    link.href = asset.image;
    link.download = `${asset.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    assets.forEach((asset, index) => {
      setTimeout(() => downloadAsset(asset), index * 300);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div>
              <h1 className="text-xl font-heading font-bold">Marketing Assets</h1>
              <p className="text-sm text-muted-foreground">View and export mockups, banners & screenshots</p>
            </div>
          </div>
          <Button onClick={downloadAll} className="gap-2">
            <Download className="h-4 w-4" />
            Download All
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <Card key={asset.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-square bg-muted overflow-hidden">
                <img
                  src={asset.image}
                  alt={asset.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => downloadAsset(asset)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{asset.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {asset.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{asset.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assets;
