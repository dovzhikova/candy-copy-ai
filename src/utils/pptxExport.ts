import pptxgen from "pptxgenjs";

export const exportToPPTX = () => {
  const pptx = new pptxgen();
  
  // Set presentation properties
  pptx.author = "PriviaAI";
  pptx.company = "PriviaAI";
  pptx.title = "PriviaAI Pitch Deck";
  pptx.subject = "Pre-Seed Investment Opportunity";

  // Slide 1: Title
  const slide1 = pptx.addSlide();
  slide1.background = { color: "0F172A" };
  slide1.addText("PriviaAI", {
    x: 1,
    y: 2,
    w: 8,
    h: 1,
    fontSize: 60,
    bold: true,
    color: "8B5CF6",
    align: "center"
  });
  slide1.addText("AI That Remembers.", {
    x: 1,
    y: 3.2,
    w: 8,
    h: 0.8,
    fontSize: 36,
    color: "E2E8F0",
    align: "center"
  });
  slide1.addText("Pre-Seed Investment Opportunity", {
    x: 1,
    y: 4.2,
    w: 8,
    h: 0.5,
    fontSize: 18,
    color: "8B5CF6",
    align: "center"
  });
  slide1.addText("Daria Dovzhikova, Founder", {
    x: 2,
    y: 5.5,
    w: 3,
    h: 0.4,
    fontSize: 14,
    color: "CBD5E1",
    align: "center"
  });
  slide1.addText("Live Platform | Characters by Pro Screenwriters", {
    x: 5.5,
    y: 5.5,
    w: 3.5,
    h: 0.4,
    fontSize: 14,
    color: "CBD5E1",
    align: "center"
  });

  // Slide 2: The Problem
  const slide2 = pptx.addSlide();
  slide2.background = { color: "0F172A" };
  slide2.addText("The Problem", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide2.addText("Digital Connection Lacks Depth.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide2.addText([
    { text: "Existing AI chatbots are ", options: { color: "E2E8F0" } },
    { text: "robotic and forgetful", options: { color: "8B5CF6", bold: true } },
    { text: ".\nSocial media is ", options: { color: "E2E8F0" } },
    { text: "performative, not personal", options: { color: "8B5CF6", bold: true } },
    { text: ".\nThere is no available solution that combines memory, personality, and professional storytelling.", options: { color: "E2E8F0" } }
  ], {
    x: 0.8,
    y: 2.2,
    w: 8.4,
    h: 2,
    fontSize: 18,
    valign: "top"
  });
  slide2.addText("This creates a gap for users who want a meaningful, judgment-free connection that remembers and evolves with them.", {
    x: 0.8,
    y: 4.5,
    w: 8.4,
    h: 0.8,
    fontSize: 16,
    color: "CBD5E1",
    italic: true
  });

  // Slide 3: The Solution
  const slide3 = pptx.addSlide();
  slide3.background = { color: "0F172A" };
  slide3.addText("The Solution", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide3.addText("AI Companions with Narrative Depth.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide3.addText("PriviaAI is a platform for AI companions crafted by professional screenwriters. Our AIs remember, speak, create images, and evolve.", {
    x: 0.8,
    y: 2,
    w: 8.4,
    h: 0.8,
    fontSize: 16,
    color: "E2E8F0"
  });
  
  const features = [
    "1. Characters by Screenwriters - Deep, engaging personalities, like an interactive HBO series.",
    "2. Perfect Memory - Remembers user preferences, past conversations, and emotional context.",
    "3. Multi-modal Communication - Text, voice, and images in a single, natural flow.",
    "4. User Customization - Users can also create and share their own AI companions."
  ];
  slide3.addText(features.join("\n\n"), {
    x: 0.8,
    y: 3.2,
    w: 8.4,
    h: 2.5,
    fontSize: 14,
    color: "CBD5E1",
    bullet: false
  });

  // Slide 4: The Market
  const slide4 = pptx.addSlide();
  slide4.background = { color: "0F172A" };
  slide4.addText("The Market", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide4.addText("A $900M Market Growing 64% YoY.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  // TAM box
  slide4.addText("TAM\n$10.8B\n50M users × $18/mo ARPU", {
    x: 1,
    y: 2.2,
    w: 2.5,
    h: 1.5,
    fontSize: 16,
    color: "E2E8F0",
    align: "center",
    valign: "middle",
    fill: { color: "1E293B" }
  });
  
  // SAM box
  slide4.addText("SAM\n$900M\nAI companion market", {
    x: 3.8,
    y: 2.2,
    w: 2.5,
    h: 1.5,
    fontSize: 16,
    color: "E2E8F0",
    align: "center",
    valign: "middle",
    fill: { color: "1E293B" }
  });
  
  // SOM box
  slide4.addText("SOM\n$9M ARR\nOur initial target (1%)", {
    x: 6.6,
    y: 2.2,
    w: 2.5,
    h: 1.5,
    fontSize: 16,
    color: "E2E8F0",
    align: "center",
    valign: "middle",
    fill: { color: "1E293B" }
  });
  
  slide4.addText("Why Now", {
    x: 0.8,
    y: 4.2,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "8B5CF6"
  });
  
  const whyNow = [
    "• Loneliness is a growing problem: 47% of Americans feel alone 3+ days per week.",
    "• LLMs are powerful enough: Modern AI enables natural, context-aware conversations.",
    "• Users demand quality: The market is saturated with generic content; users will pay for premium experiences."
  ];
  slide4.addText(whyNow.join("\n"), {
    x: 0.8,
    y: 4.7,
    w: 8.4,
    h: 1.2,
    fontSize: 14,
    color: "CBD5E1"
  });

  // Slide 5: Product & Tech
  const slide5 = pptx.addSlide();
  slide5.background = { color: "0F172A" };
  slide5.addText("Product & Tech", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide5.addText("Production-Ready & Scalable.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  slide5.addText("Tech Stack", {
    x: 0.8,
    y: 2,
    w: 8.4,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "8B5CF6"
  });
  
  const techStack = [
    "Frontend: React 18, TypeScript, TailwindCSS",
    "Backend: Node.js, Express, TypeScript",
    "Database: PostgreSQL with pgvector",
    "AI/ML: OpenAI GPT-4, DALL-E 3, Whisper, ElevenLabs"
  ];
  slide5.addText(techStack.join("\n"), {
    x: 0.8,
    y: 2.5,
    w: 8.4,
    h: 1.2,
    fontSize: 14,
    color: "E2E8F0"
  });
  
  slide5.addText("Key Achievements", {
    x: 0.8,
    y: 4,
    w: 8.4,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "8B5CF6"
  });
  
  const achievements = [
    "• Personality System: Character Bible for deep, multi-faceted personas",
    "• Memory Engine: Vector embeddings with temporal weighting",
    "• Multi-Modal Integration: Seamless text, voice, and image generation"
  ];
  slide5.addText(achievements.join("\n"), {
    x: 0.8,
    y: 4.5,
    w: 8.4,
    h: 1.2,
    fontSize: 14,
    color: "CBD5E1"
  });

  // Slide 6: Progress
  const slide6 = pptx.addSlide();
  slide6.background = { color: "0F172A" };
  slide6.addText("Progress", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide6.addText("From Idea to Live Product in 10 Months.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide6.addText("High-velocity execution: complex platform with zero outside funding.", {
    x: 0.8,
    y: 2,
    w: 8.4,
    h: 0.5,
    fontSize: 18,
    color: "E2E8F0",
    align: "center"
  });
  
  const progress = [
    "✓ Launched MVP - January 2025",
    "✓ Shipped 10+ Major Features - Voice, images, vector memory",
    "✓ Monetization Live - PayPal, Paddle, NOWPayments",
    "✓ Platform Stable - 99.9% uptime since launch"
  ];
  slide6.addText(progress.join("\n\n"), {
    x: 1.5,
    y: 3,
    w: 7,
    h: 2.5,
    fontSize: 16,
    color: "CBD5E1"
  });

  // Slide 7: Business Model
  const slide7 = pptx.addSlide();
  slide7.background = { color: "0F172A" };
  slide7.addText("Business Model", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide7.addText("Freemium SaaS with a Content Upsell.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide7.addText("Acquire users with free tier, convert with premium professionally written characters.", {
    x: 0.8,
    y: 1.8,
    w: 8.4,
    h: 0.4,
    fontSize: 16,
    color: "E2E8F0",
    align: "center"
  });
  
  // Free tier
  slide7.addText("Free\n$0\n• Limited messaging\n• Community-created AIs", {
    x: 1,
    y: 2.8,
    w: 2.5,
    h: 2,
    fontSize: 14,
    color: "E2E8F0",
    align: "center",
    fill: { color: "1E293B" }
  });
  
  // Basic tier
  slide7.addText("Basic\n$9.99/mo\n• Unlimited messaging\n• Create custom AIs", {
    x: 3.8,
    y: 2.8,
    w: 2.5,
    h: 2,
    fontSize: 14,
    color: "E2E8F0",
    align: "center",
    fill: { color: "1E293B" }
  });
  
  // Premium tier
  slide7.addText("Premium\n$19.99/mo\n• Screenwriter-crafted AIs\n• Voice & images", {
    x: 6.6,
    y: 2.8,
    w: 2.5,
    h: 2,
    fontSize: 14,
    color: "E2E8F0",
    align: "center",
    fill: { color: "1E293B" },
    line: { color: "8B5CF6", width: 2 }
  });
  
  slide7.addText("Why it works: Clear Value Prop + High Switching Costs", {
    x: 0.8,
    y: 5.2,
    w: 8.4,
    h: 0.5,
    fontSize: 14,
    color: "8B5CF6",
    italic: true,
    align: "center"
  });

  // Slide 8: Go-to-Market
  const slide8 = pptx.addSlide();
  slide8.background = { color: "0F172A" };
  slide8.addText("Go-to-Market", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide8.addText("Validate Organically, Then Scale.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  const gtm = [
    "Phase 1 (Current) - Organic Validation",
    "  • Channels: Reddit, Twitter, Discord",
    "  • Goal: Acquire first 1,000 users, gather feedback",
    "",
    "Phase 2 (Post-Funding) - Find Repeatable Channels",
    "  • Experiments: Influencer marketing, paid social (TikTok, Reddit)",
    "",
    "Phase 3 (Series A) - Scale",
    "  • Double down on channels with the best LTV/CAC ratio"
  ];
  slide8.addText(gtm.join("\n"), {
    x: 0.8,
    y: 2.2,
    w: 8.4,
    h: 3.5,
    fontSize: 16,
    color: "E2E8F0"
  });

  // Slide 9: Competition
  const slide9 = pptx.addSlide();
  slide9.background = { color: "0F172A" };
  slide9.addText("Competition", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide9.addText("Our Moat is Content Quality.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide9.addText("Competitors focus on quantity of user-generated content. We focus on quality.", {
    x: 0.8,
    y: 1.8,
    w: 8.4,
    h: 0.4,
    fontSize: 16,
    color: "E2E8F0",
    align: "center"
  });
  
  const competitors = [
    "Character.AI - User-Generated - Inconsistent quality, shallow",
    "Replika - AI-Generated - Generic, outdated tech",
    "Chai - User-Generated - Basic features, high churn"
  ];
  slide9.addText(competitors.join("\n\n"), {
    x: 0.8,
    y: 2.5,
    w: 8.4,
    h: 1.8,
    fontSize: 14,
    color: "CBD5E1"
  });
  
  slide9.addText("Our Defensible Advantages", {
    x: 0.8,
    y: 4.5,
    w: 8.4,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "8B5CF6"
  });
  
  const advantages = [
    "• Content Moat: Characters crafted by professional screenwriters",
    "• Execution Speed: Feature-complete platform in 10 months",
    "• Technical Depth: Integrated system, not just a wrapper"
  ];
  slide9.addText(advantages.join("\n"), {
    x: 0.8,
    y: 5,
    w: 8.4,
    h: 1,
    fontSize: 14,
    color: "CBD5E1"
  });

  // Slide 10: Team
  const slide10 = pptx.addSlide();
  slide10.background = { color: "0F172A" };
  slide10.addText("Team", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide10.addText("Tech, Growth, and Storytelling.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  slide10.addText("Daria Dovzhikova - Founder", {
    x: 0.8,
    y: 2,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "8B5CF6"
  });
  
  const dariaExp = [
    "• AI & Product: Led product for AI and consumer apps (OpenAI, Claude, Hugging Face)",
    "• Growth: Grew DAU by 20% at Bitcoin.com; increased conversion 15-30% at Odigos",
    "• Tech: Full-stack (React/Node), proficient in data stack (Mixpanel, SQL)"
  ];
  slide10.addText(dariaExp.join("\n"), {
    x: 0.8,
    y: 2.5,
    w: 8.4,
    h: 1.2,
    fontSize: 13,
    color: "E2E8F0"
  });
  
  slide10.addText("Nigina Sayfullaeva - Screenwriting Consultant", {
    x: 0.8,
    y: 4,
    w: 8.4,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: "8B5CF6"
  });
  
  const niginaExp = [
    "• Award-winning film director and screenwriter",
    "• Advising on character development and interactive storytelling"
  ];
  slide10.addText(niginaExp.join("\n"), {
    x: 0.8,
    y: 4.5,
    w: 8.4,
    h: 0.8,
    fontSize: 13,
    color: "E2E8F0"
  });

  // Slide 11: Vision
  const slide11 = pptx.addSlide();
  slide11.background = { color: "0F172A" };
  slide11.addText("The Vision", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide11.addText("From AI Companions to a Relationship Ecosystem.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  const vision = [
    "Years 1-2: Lead the Premium Companion Market",
    "  • Perfect the one-on-one AI companion experience",
    "  • Launch a creator marketplace for writers",
    "",
    "Years 3-4: Become an Interactive Storytelling Platform",
    "  • Launch multi-character group conversations",
    "  • Introduce real-time voice and video calls",
    "",
    "Year 5+: Become the Relationship Layer API",
    "  • License our personality engine to gaming, mental health, education",
    "  • Allow developers to integrate our AIs"
  ];
  slide11.addText(vision.join("\n"), {
    x: 0.8,
    y: 2.2,
    w: 8.4,
    h: 3.5,
    fontSize: 15,
    color: "E2E8F0"
  });

  // Slide 12: The Plan
  const slide12 = pptx.addSlide();
  slide12.background = { color: "0F172A" };
  slide12.addText("The Plan", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide12.addText("The 18-Month Roadmap to Seed.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  slide12.addText("Use this pre-seed round to get seed-round ready.", {
    x: 0.8,
    y: 1.8,
    w: 8.4,
    h: 0.4,
    fontSize: 18,
    color: "E2E8F0",
    align: "center"
  });
  
  const plan = [
    "Phase 1 (Months 1-6)",
    "  • Focus: Find repeatable acquisition channels, optimize retention",
    "  • Hire: Founding Engineer",
    "",
    "Phase 2 (Months 7-12)",
    "  • Focus: Double down on the 1-2 best-performing channels",
    "  • Hire: Community Lead",
    "",
    "Phase 3 (Months 13-18)",
    "  • Focus: With proven metrics, raise a $2-3M seed round to scale"
  ];
  slide12.addText(plan.join("\n"), {
    x: 0.8,
    y: 2.5,
    w: 8.4,
    h: 3,
    fontSize: 15,
    color: "E2E8F0"
  });

  // Slide 13: The Ask
  const slide13 = pptx.addSlide();
  slide13.background = { color: "0F172A" };
  slide13.addText("The Ask", {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.6,
    fontSize: 40,
    bold: true,
    color: "8B5CF6"
  });
  slide13.addText("$500k Pre-Seed.", {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 0.4,
    fontSize: 24,
    color: "CBD5E1"
  });
  
  slide13.addText("$500k Pre-Seed", {
    x: 0.5,
    y: 2,
    w: 9,
    h: 0.8,
    fontSize: 48,
    bold: true,
    color: "8B5CF6",
    align: "center"
  });
  
  slide13.addText("To find a repeatable growth engine and scale the team.", {
    x: 0.5,
    y: 2.9,
    w: 9,
    h: 0.5,
    fontSize: 20,
    color: "E2E8F0",
    align: "center"
  });
  
  slide13.addText("Use of Funds (18-Month Runway)", {
    x: 0.8,
    y: 3.7,
    w: 8.4,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: "8B5CF6"
  });
  
  const funds = [
    "50% - Team: Founder salaries & one key engineering hire",
    "30% - Infrastructure: API usage and server costs",
    "20% - GTM Experiments: Test paid channels to find profitable unit economics"
  ];
  slide13.addText(funds.join("\n\n"), {
    x: 0.8,
    y: 4.2,
    w: 8.4,
    h: 1.5,
    fontSize: 14,
    color: "E2E8F0"
  });
  
  slide13.addText("Contact: dovzhikova@gmail.com\nprivia-production.up.railway.app", {
    x: 0.8,
    y: 6,
    w: 8.4,
    h: 0.5,
    fontSize: 14,
    color: "8B5CF6",
    align: "center"
  });

  // Save the presentation
  pptx.writeFile({ fileName: "PriviaAI_Pitch_Deck.pptx" });
};
