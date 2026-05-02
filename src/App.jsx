import { useState } from "react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,300;1,9..144,400;1,9..144,600;1,9..144,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #FAF8F5; color: #2D2D2D; overflow-x: hidden; }
  .f { font-family: 'Fraunces', serif; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
  @keyframes tickerL  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
  @keyframes tickerR  { from { transform:translateX(-50%); } to { transform:translateX(0); } }
  @keyframes float    { 0%,100% { transform:translateY(0) rotate(-1.5deg); } 50% { transform:translateY(-10px) rotate(-1.5deg); } }
  @keyframes pulse    { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.75); } }
  @keyframes shimmer  { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
  @keyframes agentPop { 0% { opacity:0; transform:scale(0.85) translateY(10px); } 100% { opacity:1; transform:scale(1) translateY(0); } }

  .anim-1 { animation: fadeUp 0.75s ease both; }
  .anim-2 { animation: fadeUp 0.75s ease 0.12s both; }
  .anim-3 { animation: fadeUp 0.75s ease 0.24s both; }
  .anim-4 { animation: fadeUp 0.75s ease 0.36s both; }
  .anim-5 { animation: fadeUp 0.75s ease 0.48s both; }

  .ticker-l  { display:flex; width:max-content; animation: tickerL 45s linear infinite; }
  .ticker-r  { display:flex; width:max-content; animation: tickerR 38s linear infinite; }
  .float-card{ animation: float 6s ease-in-out infinite; }
  .pulse-dot { animation: pulse 2s ease-in-out infinite; }

  .shimmer {
    background: linear-gradient(90deg,#C9A84C 0%,#F0D070 35%,#C9A84C 65%,#A07828 100%);
    background-size:200% auto;
    -webkit-background-clip:text; background-clip:text;
    -webkit-text-fill-color:transparent;
    animation: shimmer 3.5s linear infinite;
  }

  .card { transition:transform 0.22s ease,box-shadow 0.22s ease; }
  .card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(0,0,0,0.09); }

  .agent-card { transition:transform 0.22s ease,box-shadow 0.22s ease,border-color 0.22s ease; cursor:default; }
  .agent-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(0,0,0,0.10); border-color:rgba(125,158,140,0.4) !important; }

  .btn { transition:transform 0.15s ease,box-shadow 0.15s ease; cursor:pointer; border:none; font-family:'DM Sans',sans-serif; font-weight:600; }
  .btn:hover  { transform:translateY(-2px); box-shadow:0 8px 28px rgba(196,120,90,0.38); }
  .btn:active { transform:translateY(0); }

  .inp { font-family:'DM Sans',sans-serif; border:1.5px solid #E4DDD4; background:white; outline:none; transition:border-color 0.2s,box-shadow 0.2s; }
  .inp:focus { border-color:#7D9E8C; box-shadow:0 0 0 3px rgba(125,158,140,0.14); }

  nav { backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); }

  @media (max-width:640px) {
    .hero-flex  { flex-direction:column !important; }
    .hide-sm    { display:none !important; }
    .form-row   { flex-direction:column !important; }
    .agents-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

const ROW1 = ["permission slips","dentist appointments","birthday RSVPs","what's for dinner","school newsletters","soccer cleats","Halloween costumes","class parties","field trip forms","gymnastics grips","grocery lists","teacher emails","holiday crafts","pediatrician checkups","school picture day","snack day signup"];
const ROW2 = ["spirit week outfits","library books","piano recitals","back to school shopping","birthday party gifts","summer camp deadlines","volunteer sign-ups","sick day emails","early release days","allergy forms","lunch box notes","reading logs","science fair projects","snow day childcare","RSVP deadlines","coat weather"];

const FEATURES = [
  { emoji:"🍳", title:"Meal Planning & Grocery",  bg:"#FFF5F0", desc:"Weekly meals drafted around your schedule and what's on sale at your store. Grocery list built automatically. Frozen chicken thawed before you remember." },
  { emoji:"📚", title:"School Intelligence",       bg:"#F0F5F2", desc:"Every newsletter, ParentSquare email, and permission slip parsed automatically. Action items extracted. Deadlines never missed." },
  { emoji:"🤖", title:"Agents That Coordinate",   bg:"#F2F5FF", desc:"Six AI agents work together behind the scenes. The Kitchen Agent checks your calendar before planning meals. The Schedule Agent catches conflicts before they happen. They talk to each other so you don't have to." },
  { emoji:"🎃", title:"Holiday Magic",             bg:"#FFF5F0", desc:"Countdowns, age-appropriate crafts, prep reminders, and a traditions tracker that makes every holiday feel intentional — not like another thing to manage." },
  { emoji:"🎂", title:"Birthday & Social",         bg:"#F0F5F2", desc:"RSVP tracking, gift suggestions that remember what you already gave, and reminders so nothing slips through." },
  { emoji:"📷", title:"Scan Anything",             bg:"#FDFBF0", desc:"Point your camera at a paper schedule, party invite, or school flyer. Dates and action items flow into the right place automatically." },
];

const AGENTS = [
  { emoji:"🍳", name:"Kitchen Agent",   color:"#C4785A", desc:"Plans meals, builds grocery lists, checks what's on sale, sets freezer reminders." },
  { emoji:"📅", name:"Schedule Agent",  color:"#7D9E8C", desc:"Syncs your calendar, tracks activities, flags conflicts, sends pickup reminders." },
  { emoji:"📚", name:"School Agent",    color:"#9B7BB5", desc:"Parses school emails, extracts deadlines, drafts replies, tracks permission slips." },
  { emoji:"👗", name:"Wardrobe Agent",  color:"#C4785A", desc:"Tracks clothing sizes, monitors sales at your favorite stores, plans seasonal needs." },
  { emoji:"✈️", name:"Travel Agent",    color:"#7D9E8C", desc:"Finds open windows in your calendar, plans trips, monitors deals for your destinations." },
  { emoji:"🎉", name:"Holiday Agent",   color:"#C9A84C", desc:"Manages holiday countdowns, craft ideas, prep reminders, and your family traditions." },
];

const STEPS = [
  { n:"01", c:"#7D9E8C", title:"Tell it about your family",  desc:"Add your kids' ages, schools, activities, and clothing sizes. Connect Google Calendar and Gmail. About 10 minutes." },
  { n:"02", c:"#C4785A", title:"Agents start working",       desc:"School emails get parsed. Grocery lists get drafted around this week's sales. Appointment reminders get set. Agents share context so every output is smarter." },
  { n:"03", c:"#C9A84C", title:"You approve, it does",       desc:"Everything is a draft first. Review meals, approve the grocery list, confirm the calendar event. You're always in control — the agents just do the legwork." },
];

function WaitlistForm() {
  const [val, setVal]   = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!val.includes("@")) return;
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: val })
      });
    } catch(err) { console.log(err); }
    setDone(true);
  };

  if (done) return (
    <div style={{ background:"rgba(125,158,140,0.12)", border:"1.5px solid rgba(125,158,140,0.3)", borderRadius:16, padding:"20px 28px", display:"inline-flex", alignItems:"center", gap:12 }}>
      <span style={{ fontSize:24 }}>✨</span>
      <div>
        <p style={{ fontWeight:600, fontSize:16, color:"#2D2D2D" }}>You're on the list.</p>
        <p style={{ fontSize:14, color:"#7D9E8C", marginTop:2 }}>We'll be in touch the moment The MotherLoad launches.</p>
      </div>
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div className="form-row" style={{ display:"flex", gap:10, flexWrap:"wrap", maxWidth:500 }}>
        <input className="inp" type="email" placeholder="Your email address" value={val}
          onChange={e => setVal(e.target.value)}
          style={{ flex:1, minWidth:210, padding:"14px 22px", borderRadius:100, fontSize:15, color:"#2D2D2D" }} />
        <button className="btn" type="submit"
          style={{ background:"#C4785A", color:"white", borderRadius:100, padding:"14px 26px", fontSize:15, whiteSpace:"nowrap" }}>
          Join the MotherLoad →
        </button>
      </div>
      <p style={{ marginTop:12, fontSize:13, color:"#BBA898", fontStyle:"italic" }}>
        No spam, ever · Free to join · Be first to launch
      </p>
    </form>
  );
}

export default function App() {
  return (
    <>
      <style>{STYLES}</style>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, height:66, background:"rgba(250,248,245,0.92)", borderBottom:"1px solid rgba(0,0,0,0.06)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 28px" }}>
        <span className="f" style={{ fontSize:19, fontWeight:600, letterSpacing:"-0.3px", color:"#2D2D2D" }}>The MotherLoad</span>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div className="hide-sm" style={{ display:"flex", alignItems:"center", gap:6 }}>
            <div className="pulse-dot" style={{ width:7, height:7, borderRadius:"50%", background:"#7D9E8C" }} />
            <span style={{ fontSize:13, color:"#999", fontFamily:"'DM Sans',sans-serif" }}>Waitlist open</span>
          </div>
          <a href="#waitlist" style={{ background:"#C4785A", color:"white", borderRadius:100, padding:"9px 20px", fontSize:14, fontWeight:600, textDecoration:"none", fontFamily:"'DM Sans',sans-serif" }}>
            Join the waitlist
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ position:"relative", paddingTop:148, paddingBottom:88, background:"#FAF8F5", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:40, right:"-100px", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(125,158,140,0.13) 0%,transparent 68%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:"-80px", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(196,120,90,0.09) 0%,transparent 65%)", pointerEvents:"none" }} />

        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 28px", position:"relative", zIndex:1 }}>
          <div className="hero-flex" style={{ display:"flex", gap:60, alignItems:"flex-start", justifyContent:"space-between" }}>

            {/* Left — copy */}
            <div style={{ maxWidth:620, flex:1 }}>
              <div className="anim-1" style={{ marginBottom:28 }}>
                <span style={{ background:"rgba(125,158,140,0.13)", color:"#4F7A68", border:"1px solid rgba(125,158,140,0.28)", borderRadius:100, padding:"5px 16px", fontSize:13, fontWeight:500, letterSpacing:"0.3px", fontFamily:"'DM Sans',sans-serif" }}>
                  Coming Soon · Agentic AI Family Assistant
                </span>
              </div>

              <div className="anim-2">
                <h1 className="f" style={{ fontSize:"clamp(58px,9vw,100px)", fontWeight:700, lineHeight:1.0, letterSpacing:"-3px", color:"#2D2D2D" }}>Finally.</h1>
                <h1 className="f" style={{ fontSize:"clamp(58px,9vw,100px)", fontWeight:300, fontStyle:"italic", lineHeight:1.0, letterSpacing:"-3px", color:"#7D9E8C" }}>Someone</h1>
                <h1 className="f" style={{ fontSize:"clamp(58px,9vw,100px)", fontWeight:700, lineHeight:1.0, letterSpacing:"-3px", color:"#2D2D2D", marginBottom:32 }}>built this.</h1>
              </div>

              <p className="anim-3" style={{ fontSize:"clamp(16px,2vw,19px)", lineHeight:1.68, color:"#6A625A", maxWidth:520, marginBottom:36, fontFamily:"'DM Sans',sans-serif" }}>
                The MotherLoad runs a team of AI agents in the background — each one specialized, all of them coordinating — so your week is planned, your groceries are priced, your school emails are parsed, and your family calendar is managed. Without you lifting a finger.
              </p>

              <div className="anim-4">
                <WaitlistForm />
              </div>
            </div>

            {/* Right — floating app preview */}
            <div className="hide-sm float-card anim-5" style={{ flexShrink:0, width:288 }}>
              <div style={{ background:"white", borderRadius:24, boxShadow:"0 28px 80px rgba(0,0,0,0.13)", overflow:"hidden" }}>
                <div style={{ background:"#2D2D2D", padding:"12px 16px", display:"flex", alignItems:"center", gap:6 }}>
                  {["#FF5F57","#FFBD2E","#28C840"].map((c,i) => <div key={i} style={{ width:9, height:9, borderRadius:"50%", background:c }} />)}
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)", marginLeft:10, fontFamily:"'DM Sans',sans-serif" }}>joinmotherload.com</span>
                </div>
                <div style={{ padding:20 }}>
                  <p style={{ fontSize:11, color:"#AAA", textTransform:"uppercase", letterSpacing:"0.8px", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>Good morning ✨</p>
                  <p className="f" style={{ fontSize:20, fontWeight:700, color:"#2D2D2D", marginBottom:18 }}>Tuesday, May 6</p>
                  {[
                    { e:"🤸", t:"Gymnastics pickup — Ella + Maya, 4pm" },
                    { e:"🎂", t:"Emma's party RSVP due today" },
                    { e:"🧊", t:"Pull chicken from freezer tonight" },
                  ].map((x,i) => (
                    <div key={i} style={{ display:"flex", gap:10, padding:"9px 0", borderBottom:i<2?"1px solid #F2EDE7":"none" }}>
                      <span style={{ fontSize:15, marginTop:1 }}>{x.e}</span>
                      <span style={{ fontSize:12.5, color:"#3D3D3D", lineHeight:1.45, fontFamily:"'DM Sans',sans-serif" }}>{x.t}</span>
                    </div>
                  ))}
                  <div style={{ marginTop:14, background:"#FFF8F5", border:"1.5px solid #F0D5C8", borderRadius:12, padding:"10px 14px" }}>
                    <p style={{ fontSize:11, color:"#C4785A", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.6px", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>Needs your approval</p>
                    <p style={{ fontSize:12, color:"#3D3D3D", fontFamily:"'DM Sans',sans-serif" }}>📋 Week's meal plan is ready</p>
                  </div>
                  <div style={{ marginTop:12, background:"rgba(201,168,76,0.1)", borderRadius:10, padding:"9px 14px", display:"flex", alignItems:"center", gap:6 }}>
                    <span style={{ fontSize:13 }}>✨</span>
                    <span style={{ fontSize:12, color:"#9A7820", fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>Saved this month: $147</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────── */}
      <section style={{ background:"#242E27", padding:"64px 0", overflow:"hidden" }}>
        <div style={{ textAlign:"center", padding:"0 24px", marginBottom:36 }}>
          <p className="f" style={{ fontSize:"clamp(24px,4vw,44px)", color:"rgba(255,255,255,0.93)", fontStyle:"italic", fontWeight:400, letterSpacing:"-0.5px" }}>
            "The list in your head never ends."
          </p>
          <p style={{ fontSize:16, color:"#7D9E8C", fontWeight:600, marginTop:10, fontFamily:"'DM Sans',sans-serif" }}>Until now.</p>
        </div>
        <div style={{ overflow:"hidden", marginBottom:10 }}>
          <div className="ticker-l">
            {[...ROW1,...ROW1].map((t,i) => (
              <span key={i} style={{ display:"inline-block", whiteSpace:"nowrap", padding:"7px 18px", margin:"0 5px", borderRadius:100, fontSize:13.5, color:"rgba(255,255,255,0.78)", fontFamily:"'DM Sans',sans-serif", background:i%3===0?"rgba(125,158,140,0.22)":i%3===1?"rgba(196,120,90,0.18)":"rgba(255,255,255,0.07)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div style={{ overflow:"hidden" }}>
          <div className="ticker-r">
            {[...ROW2,...ROW2].map((t,i) => (
              <span key={i} style={{ display:"inline-block", whiteSpace:"nowrap", padding:"7px 18px", margin:"0 5px", borderRadius:100, fontSize:13.5, color:"rgba(255,255,255,0.72)", fontFamily:"'DM Sans',sans-serif", background:i%3===0?"rgba(201,168,76,0.18)":i%3===1?"rgba(125,158,140,0.22)":"rgba(255,255,255,0.07)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section style={{ background:"white", padding:"clamp(64px,8vw,108px) 28px" }}>
        <div style={{ maxWidth:920, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <h2 className="f" style={{ fontSize:"clamp(30px,5vw,52px)", fontWeight:700, letterSpacing:"-1.2px", color:"#2D2D2D", marginBottom:14 }}>
              Your family. Fully covered.
            </h2>
            <p style={{ fontSize:17, color:"#7A7470", maxWidth:460, margin:"0 auto", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>
              A team of AI agents works in the background so the details never fall through the cracks.
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(255px,1fr))", gap:15 }}>
            {FEATURES.map((f,i) => (
              <div key={i} className="card" style={{ background:f.bg, borderRadius:22, padding:28, border:"1px solid rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:34, marginBottom:14 }}>{f.emoji}</div>
                <h3 className="f" style={{ fontSize:20, fontWeight:700, letterSpacing:"-0.3px", color:"#2D2D2D", marginBottom:8 }}>{f.title}</h3>
                <p style={{ fontSize:14, color:"#6A6460", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENT TEAM ──────────────────────────────────────── */}
      <section style={{ background:"#FAF8F5", padding:"clamp(64px,8vw,108px) 28px", borderTop:"1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth:960, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ background:"rgba(125,158,140,0.13)", color:"#4F7A68", border:"1px solid rgba(125,158,140,0.28)", borderRadius:100, padding:"5px 16px", fontSize:13, fontWeight:500, letterSpacing:"0.3px", fontFamily:"'DM Sans',sans-serif", display:"inline-block", marginBottom:20 }}>
              Meet the team
            </span>
            <h2 className="f" style={{ fontSize:"clamp(28px,5vw,52px)", fontWeight:700, letterSpacing:"-1.2px", color:"#2D2D2D", marginBottom:16 }}>
              Six agents. One mission.
            </h2>
            <p style={{ fontSize:17, color:"#7A7470", maxWidth:520, margin:"0 auto", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>
              Each agent is a specialist. Together they coordinate in real time — sharing context, catching conflicts, and handling the details before you even notice them.
            </p>
          </div>

          {/* Agent coordination diagram */}
          <div style={{ background:"white", borderRadius:28, padding:"40px 36px", marginBottom:32, border:"1px solid rgba(0,0,0,0.05)", boxShadow:"0 8px 40px rgba(0,0,0,0.06)" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#242E27", borderRadius:100, padding:"10px 24px" }}>
                <span style={{ fontSize:16 }}>🧠</span>
                <span className="f" style={{ color:"white", fontSize:15, fontWeight:600 }}>Orchestrator</span>
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.45)", fontFamily:"'DM Sans',sans-serif" }}>coordinates everything</span>
              </div>
            </div>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
              <div style={{ width:1, height:24, background:"#E0D8D0" }} />
            </div>
            <div className="agents-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
              {AGENTS.map((a,i) => (
                <div key={i} className="agent-card" style={{ background:"#FAF8F5", borderRadius:16, padding:"18px 20px", border:"1.5px solid rgba(0,0,0,0.06)", position:"relative" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                    <div style={{ width:34, height:34, borderRadius:"50%", background:a.color + "22", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>
                      {a.emoji}
                    </div>
                    <span className="f" style={{ fontSize:14, fontWeight:700, color:"#2D2D2D" }}>{a.name}</span>
                  </div>
                  <p style={{ fontSize:12.5, color:"#7A7470", lineHeight:1.55, fontFamily:"'DM Sans',sans-serif" }}>{a.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop:24, padding:"16px 20px", background:"rgba(125,158,140,0.08)", borderRadius:12, border:"1px solid rgba(125,158,140,0.15)" }}>
              <p style={{ fontSize:13, color:"#4F7A68", lineHeight:1.6, fontFamily:"'DM Sans',sans-serif", textAlign:"center" }}>
                <strong>Example:</strong> The Kitchen Agent checks your calendar before planning meals. If Tuesday has gymnastics at 4pm and a school event at 7pm, it plans a 15-minute dinner — automatically. No input needed from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section style={{ background:"white", padding:"clamp(64px,8vw,108px) 28px", borderTop:"1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth:720, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <h2 className="f" style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:700, letterSpacing:"-1px", color:"#2D2D2D", marginBottom:14 }}>
              Set it up once. It works forever.
            </h2>
            <p style={{ fontSize:16, color:"#7A7470", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>
              Connect your Google Calendar and Gmail, tell it about your family — then let the agents handle it.
            </p>
          </div>
          {STEPS.map((s,i) => (
            <div key={i} style={{ display:"flex", gap:24, padding:"32px 0", borderBottom:i<2?"1px solid #EAE4DC":"none" }}>
              <div style={{ width:50, height:50, borderRadius:"50%", background:s.c, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span className="f" style={{ color:"white", fontSize:15, fontWeight:700 }}>{s.n}</span>
              </div>
              <div>
                <h3 className="f" style={{ fontSize:22, fontWeight:700, letterSpacing:"-0.3px", color:"#2D2D2D", marginBottom:7 }}>{s.title}</h3>
                <p style={{ fontSize:15, color:"#7A7470", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SAVINGS ─────────────────────────────────────────── */}
      <section style={{ background:"#1E2A22", padding:"clamp(64px,8vw,108px) 28px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:420, height:420, borderRadius:"50%", background:"rgba(125,158,140,0.12)", pointerEvents:"none" }} />
        <div style={{ maxWidth:720, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:44 }}>
            <p style={{ fontSize:12, color:"#7D9E8C", textTransform:"uppercase", letterSpacing:"2px", fontWeight:700, marginBottom:16, fontFamily:"'DM Sans',sans-serif" }}>The MotherLoad Score</p>
            <h2 className="f" style={{ fontSize:"clamp(30px,5vw,52px)", fontWeight:700, letterSpacing:"-1px", color:"white", marginBottom:16, lineHeight:1.15 }}>
              It pays for itself.<br /><span className="shimmer">Then some.</span>
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.65, maxWidth:440, margin:"0 auto", fontFamily:"'DM Sans',sans-serif" }}>
              Every dollar saved on groceries, clothing, and travel is tracked and celebrated. The app monitors sales at your favorite stores and builds your week around what's cheapest — automatically.
            </p>
          </div>
          <div style={{ background:"rgba(255,255,255,0.055)", borderRadius:22, border:"1px solid rgba(255,255,255,0.09)", padding:30, maxWidth:520, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:26 }}>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:6, fontFamily:"'DM Sans',sans-serif" }}>This year you've saved</p>
              <p className="f" style={{ fontSize:56, fontWeight:700, color:"#C9A84C", letterSpacing:"-2px", lineHeight:1 }}>$1,247</p>
            </div>
            {[
              { l:"Groceries", a:"$612", p:65, c:"#7D9E8C" },
              { l:"Clothing",  a:"$389", p:42, c:"#C4785A" },
              { l:"Household", a:"$164", p:22, c:"#C9A84C" },
              { l:"Travel",    a:"$82",  p:12, c:"#A0B8AC" },
            ].map((r,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:12, marginBottom:i<3?11:0 }}>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.55)", width:76, flexShrink:0, fontFamily:"'DM Sans',sans-serif" }}>{r.l}</span>
                <div style={{ flex:1, height:6, background:"rgba(255,255,255,0.1)", borderRadius:3 }}>
                  <div style={{ width:`${r.p}%`, height:"100%", background:r.c, borderRadius:3 }} />
                </div>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.75)", width:38, textAlign:"right", fontFamily:"'DM Sans',sans-serif" }}>{r.a}</span>
              </div>
            ))}
            <div style={{ marginTop:20, paddingTop:20, borderTop:"1px solid rgba(255,255,255,0.07)", textAlign:"center" }}>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.38)", fontStyle:"italic", fontFamily:"'DM Sans',sans-serif" }}>
                "That's 12 months of subscription covered in savings. 🎉"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ──────────────────────────────────────── */}
      <section style={{ background:"white", padding:"clamp(64px,8vw,100px) 28px" }}>
        <div style={{ maxWidth:660, margin:"0 auto", textAlign:"center" }}>
          <p className="f" style={{ fontSize:"clamp(20px,3.5vw,32px)", fontStyle:"italic", color:"#2D2D2D", lineHeight:1.55, letterSpacing:"-0.3px", marginBottom:22 }}>
            "I remember everyone's dentist appointment. I know when the permission slip is due. I thaw the chicken. I plan the birthday. I buy the Halloween candy. Who carries all of this?"
          </p>
          <p style={{ fontSize:16, color:"#7D9E8C", fontWeight:600, fontFamily:"'DM Sans',sans-serif" }}>Every mom, everywhere.</p>
          <p style={{ fontSize:14, color:"#C4B8A8", marginTop:6, fontFamily:"'DM Sans',sans-serif" }}>Not anymore.</p>
        </div>
      </section>

      {/* ── FOUNDER STORY ───────────────────────────────────── */}
      <section style={{ background:"#FAF8F5", padding:"clamp(64px,8vw,100px) 28px", borderTop:"1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <div style={{ background:"white", borderRadius:28, padding:"clamp(32px,5vw,52px)", boxShadow:"0 8px 40px rgba(0,0,0,0.06)", border:"1px solid rgba(0,0,0,0.04)", position:"relative" }}>
            {/* Quote mark */}
            <div className="f" style={{ fontSize:120, lineHeight:0.7, color:"#F0EBE4", position:"absolute", top:32, left:36, userSelect:"none" }}>"</div>
            <div style={{ position:"relative", zIndex:1 }}>
              <p style={{ fontSize:"clamp(16px,2vw,19px)", lineHeight:1.75, color:"#3D3530", fontFamily:"'DM Sans',sans-serif", marginBottom:28 }}>
                I'm Lisa — a mom of three kids. For a long time I thought staying on top of everything <em>was</em> the job. The permission slips, the grocery lists, the dentist appointments, the dinner planning — all of it living in my head, all the time.
              </p>
              <p style={{ fontSize:"clamp(16px,2vw,19px)", lineHeight:1.75, color:"#3D3530", fontFamily:"'DM Sans',sans-serif", marginBottom:28 }}>
                Then I realized I was so busy managing our life that I was missing it. I built The MotherLoad to carry the load so I could carry the memories instead.
              </p>
              <div style={{ display:"flex", alignItems:"center", gap:16, paddingTop:20, borderTop:"1px solid #F0EBE4" }}>
                <div style={{ width:48, height:48, borderRadius:"50%", background:"linear-gradient(135deg,#7D9E8C,#C4785A)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <span className="f" style={{ color:"white", fontSize:20, fontWeight:700 }}>L</span>
                </div>
                <div>
                  <p className="f" style={{ fontSize:16, fontWeight:700, color:"#2D2D2D" }}>Lisa</p>
                  <p style={{ fontSize:13, color:"#9A8E86", fontFamily:"'DM Sans',sans-serif" }}>Founder, The MotherLoad · Mom of 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section id="waitlist" style={{ position:"relative", background:"#FAF8F5", padding:"clamp(80px,10vw,120px) 28px", overflow:"hidden", borderTop:"1px solid rgba(0,0,0,0.05)" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:640, height:640, borderRadius:"50%", background:"radial-gradient(circle,rgba(125,158,140,0.09) 0%,transparent 62%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:580, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
          <h2 className="f" style={{ fontSize:"clamp(38px,7vw,72px)", fontWeight:700, letterSpacing:"-2px", lineHeight:1.0, color:"#2D2D2D", marginBottom:10 }}>
            Take a deep breath.
          </h2>
          <h2 className="f" style={{ fontSize:"clamp(38px,7vw,72px)", fontWeight:300, fontStyle:"italic", letterSpacing:"-2px", lineHeight:1.05, color:"#7D9E8C", marginBottom:28 }}>
            We've got this.
          </h2>
          <p style={{ fontSize:17, color:"#7A7470", lineHeight:1.68, maxWidth:460, margin:"0 auto 36px", fontFamily:"'DM Sans',sans-serif" }}>
            The MotherLoad is coming. Join the waitlist and be first to know when we launch — plus get early access and founding member pricing.
          </p>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background:"#242E27", padding:"40px 28px", textAlign:"center" }}>
        <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
          <span className="f" style={{ fontSize:18, color:"rgba(255,255,255,0.85)", fontWeight:600, letterSpacing:"-0.3px" }}>The MotherLoad</span>
        </div>
        <p style={{ fontSize:13, color:"rgba(255,255,255,0.3)", fontFamily:"'DM Sans',sans-serif" }}>
          We carry the load. You carry the love. · © 2026 · joinmotherload.com
        </p>
      </footer>
    </>
  );
}
