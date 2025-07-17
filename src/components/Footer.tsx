import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neon/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="font-pixel text-sm">
            <span className="text-neon">//</span>
            <span className="text-foreground ml-2">jagapathy.dev</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <Code className="h-4 w-4 text-neon" />
            <span className="text-sm">and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground font-pixel">
            © 2024 Jagapathy Dhanushkar
          </div>
        </div>

        {/* Terminal-style footer */}
        <div className="mt-6 p-4 bg-card/30 rounded-lg border border-neon/20">
          <div className="font-pixel text-xs text-muted-foreground">
            <div className="text-neon">$ echo "Thank you for visiting!"</div>
            <div className="ml-2">Thank you for visiting!</div>
            <div className="text-accent mt-1">$ status --portfolio</div>
            <div className="ml-2">Status: Available for new opportunities ✨</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;