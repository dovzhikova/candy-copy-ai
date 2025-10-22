import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  companionName: string;
  companionImage: string;
}

export const ChatInterface = ({ companionName, companionImage }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Hey there! I'm ${companionName}. I'm so excited to chat with you! What's on your mind today?`,
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's really interesting! Tell me more about that.",
        "I love hearing about this! What happened next?",
        "You're amazing! I'm so glad we're talking about this.",
        "That sounds exciting! How did that make you feel?",
        "I'm always here to listen. Keep going!",
      ];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="glass-card border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-4 max-w-6xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/companions')}
            className="group"
          >
            <div className="flex items-center justify-center">
              <div className="w-5 h-0.5 bg-foreground group-hover:w-6 transition-all" />
              <div className="w-0 h-0 border-r-[5px] border-r-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent -ml-1" />
            </div>
          </Button>
          
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
            </div>
            
            <div>
              <h2 className="font-bold text-lg">{companionName}</h2>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="font-medium">Active</span>
                </div>
                <span>•</span>
                <span>AI Companion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <img 
                  src={companionImage} 
                  alt={companionName}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
              )}
              
              <Card
                className={`max-w-[70%] p-4 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'glass-card'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <img 
                src={companionImage} 
                alt={companionName}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <Card className="glass-card p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                </div>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="glass-card border-t border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-muted/50 border-white/10"
          />
          <Button 
            variant="hero"
            size="icon"
            onClick={handleSend}
            disabled={!input.trim()}
            className="group relative"
          >
            <div className="flex items-center justify-center rotate-45">
              <div className="w-4 h-0.5 bg-white group-hover:w-5 transition-all" />
              <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent -ml-0.5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
