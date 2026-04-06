import { Link } from "react-router";
import { ShipWheelIcon, MessageSquare, Video, Users, Globe, ArrowRight, Sparkles, Zap, Heart } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-100 font-sans selection:bg-primary selection:text-primary-content overflow-x-hidden" data-theme="forest">
      {/* NAVBAR */}
      <nav className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 border-b border-base-200">
        <div className="flex-1 gap-2 flex items-center">
          <div className="bg-primary/10 p-2 rounded-xl">
            <ShipWheelIcon className="size-7 text-primary" />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            TalkHub
          </span>
        </div>
        <div className="flex-none gap-2 md:gap-4">
          <Link to="/login" className="btn btn-ghost btn-sm md:btn-md font-bold hover:bg-primary/10">Log In</Link>
          <Link to="/signup" className="btn btn-primary btn-sm md:btn-md rounded-full px-6 shadow-md hover:shadow-primary/30">Get Started</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-24 pb-20 md:pb-32 px-4">
        {/* Animated background elements */}
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 border border-base-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="size-4 text-warning" />
            <span className="opacity-80">Connecting native speakers globally</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.05]">
            Learn Languages by <br />
            <span className="text-primary italic">Actually</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
              Talking
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl opacity-70 mb-12 leading-relaxed">
            Skip the boring drills. TalkHub connects you with real people around the world for authentic conversations, video calls, and cultural exchanges.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link 
              to="/signup" 
              className="btn btn-primary btn-lg rounded-full px-12 gap-3 group shadow-xl hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95 text-xl h-auto py-4"
            >
              Start for Free <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex -space-x-4 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="avatar border-4 border-base-100 rounded-full w-12 h-12">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="ps-6 text-sm font-semibold opacity-60">Join 10k+ learners</div>
            </div>
          </div>

          {/* APP PREVIEW */}
          <div className="mt-24 relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-50 -z-10 animate-pulse"></div>
            <div className="rounded-[2rem] border-[12px] border-base-300/50 overflow-hidden shadow-2xl relative group bg-base-200">
               <div className="absolute inset-x-0 top-0 h-12 bg-base-300/30 flex items-center px-6 gap-2 border-b border-white/5">
                 <div className="w-3 h-3 rounded-full bg-error/40"></div>
                 <div className="w-3 h-3 rounded-full bg-warning/40"></div>
                 <div className="w-3 h-3 rounded-full bg-success/40"></div>
                 <div className="flex-1 bg-base-100/50 rounded-lg h-6 mx-4"></div>
               </div>
               <div className="pt-12 px-2 pb-2">
                 <img 
                   src="/i.png" 
                   alt="TalkHub App Interface" 
                   className="w-full h-auto rounded-2xl shadow-inner transition-transform duration-700 group-hover:scale-[1.02]" 
                 />
               </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-10 -right-10 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 animate-bounce hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-success/20 p-2 rounded-full">
                  <Video className="size-5 text-success" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold opacity-60">LIVE CALL</div>
                  <div className="text-sm font-black italic">English & Spanish</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-base-100 p-4 rounded-2xl shadow-xl border border-base-200 animate-bounce delay-700 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Heart className="size-5 text-primary" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold opacity-60">NEW MATCH</div>
                  <div className="text-sm font-black italic">Yuki from Japan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-base-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">190+</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-secondary mb-2">50+</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">1M+</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-widest">Messages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-warning mb-2">4.9/5</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-widest">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6">Designed for <span className="text-primary underline decoration-wavy underline-offset-8">Conversations</span></h2>
              <p className="text-xl opacity-70 italic font-medium">Everything you need to master a language while making global friendships.</p>
            </div>
            <Link to="/signup" className="btn btn-outline btn-lg rounded-full px-8">View all features</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="size-8" />,
                title: "Smart Chat",
                desc: "Instant messaging with real-time translation and corrections. Never get stuck again.",
                color: "bg-primary/10 text-primary",
                border: "hover:border-primary/50"
              },
              {
                icon: <Video className="size-8" />,
                title: "Face-to-Face",
                desc: "High-quality video calls to practice pronunciation and pick up non-verbal cues.",
                color: "bg-secondary/10 text-secondary",
                border: "hover:border-secondary/50"
              },
              {
                icon: <Globe className="size-8" />,
                title: "Smart Matching",
                desc: "We match you with people who have similar interests and complementary language goals.",
                color: "bg-accent/10 text-accent",
                border: "hover:border-accent/50"
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className={`card bg-base-100 border border-base-300 ${feature.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group p-4`}
              >
                <div className="card-body">
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-2xl font-black mb-3">{feature.title}</h3>
                  <p className="opacity-70 text-lg leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[3rem] bg-neutral overflow-hidden px-8 py-20 md:p-24 text-neutral-content text-center shadow-3xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Don't just learn. <br />
                <span className="text-primary italic">Experience</span> it.
              </h2>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl opacity-80 mb-12 font-medium">
                Join the fastest growing language exchange community. Your first partner is waiting.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/signup" className="btn btn-primary btn-lg rounded-full px-12 shadow-xl hover:scale-105 active:scale-95 text-xl h-auto py-5">
                  Get Started Now
                </Link>
                <div className="flex items-center gap-2 justify-center group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Zap className="size-6 text-primary group-hover:text-primary-content" />
                  </div>
                  <span className="font-bold">Watch how it works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer footer-center p-16 bg-base-100 text-base-content border-t border-base-200 mt-20">
        <aside>
          <div className="bg-primary/5 p-3 rounded-2xl mb-4">
            <ShipWheelIcon className="size-12 text-primary" />
          </div>
          <p className="font-black text-3xl tracking-tighter">
            TalkHub 
          </p> 
          <p className="text-lg opacity-60 font-medium">Building bridges through authentic conversation.</p>
          <div className="mt-8 flex gap-6">
            <a className="link link-hover font-bold text-primary">Twitter</a>
            <a className="link link-hover font-bold text-primary">Instagram</a>
            <a className="link link-hover font-bold text-primary">LinkedIn</a>
          </div>
          <p className="mt-12 opacity-60 text-sm">
            © 2026 TalkHub. Developed By{" "}
            <a href="https://abidazam.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-bold">
              Abid Azam Khan
            </a>{" "}
            · CEO of{" "}
            <a href="https://unipixer.com" target="_blank" rel="noreferrer" className="text-primary hover:underline font-bold">
              Unipixer
            </a>
          </p>
        </aside> 
      </footer>
    </div>
  );
};

export default LandingPage;
