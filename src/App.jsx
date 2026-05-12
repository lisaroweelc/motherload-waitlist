import { useState } from "react";

// ─── INLINE LOGO COMPONENT ────────────────────────────────────────────────────
// Embedded inline so it works everywhere — no file dependency
function LogoIcon({ size = 42, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 819.11 800.37" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path fill="#7D9E8C" d="M386.03,544.36c59.65,21.6,93.47,19.28,154.63,15.09,15.07-1.03,38.52-2.2,43.85,16.26,5.04,17.44-11.79,28.41-26.29,34.9-41.19,18.43-85.97,20.18-130.58,17.08-20.2-1.4-76.48-8.39-86.48,15.93,17.31-3.78,33.96-5.23,51.49-3.62l44.06,4.06c42.74,3.94,97.55-2.8,135.52-23.76,17.55-9.69,32.24-25.48,27.15-47.36,50.91-28.89,91.35-65.4,131.44-106.85,17.58-18.18,50.83-55.89,78.76-46.3,3.64,1.25,6.93,3.56,8.08,5.99,1.66,3.49,2.04,8.01.39,11.83-21.78,50.32-49.7,97.72-83.19,141.43-55.07,71.88-127.14,129.26-212.72,159.92-65.74,23.55-131.78,28.55-199.43,9.99l-54.26-14.88c-39.8-10.92-79.12-19.56-120.76-15.13-36.44,3.88-69.52,18.86-96.3,43.64-12.07,11.16-22.11,23.11-31.66,36.47-.28.4-.71.6-1.01,1.11-.36.6-.67-.15-.56-1.11,4.3-37.06,12.9-72.96,26.75-107.81,21.99-55.33,58.51-107.71,109.53-139.57,62.03-38.74,137.95-41.2,205.71-16.66l25.88,9.37Z"/>
      <path fill="#7D9E8C" d="M558.15,207.7l-43.5.13c-4.33.01-7.4,3.67-6.82,7.99l-.53,47.98-98.87-90.77-83.68,77.97-139.74,131.05c-.99,1.84-.73,3.36.36,4.49.82.85,2.56,1.84,4.47,1.85l40.69.28-.02,115.11c-20.29,3.56-39.43,8.56-58.29,17.36-28.15-24.16-54.37-49.95-78.34-78.48-22.68-27.09-42.42-55.27-58.35-86.82-43.55-86.27-53.27-191.54,6.33-272.62C78.01,34.04,133.47,3.89,194.47.42c90.24-5.14,172.32,48.84,214.02,128.29C443.94,61.54,508.9,11.8,583.36,2.06c91.82-13.14,180.3,37.63,215.15,123.43,11.97,29.45,17.44,60.94,16.39,93.4-2.35,72.62-30.22,138.64-75.86,194.42-43.25,52.41-95.86,95.79-153.56,133.01l-.13-157.78,41.21-.36c2.37-.02,4.4-1.6,5.26-2.77,1.03-1.39,1.94-4.56.22-6.19l-67.69-64.03-.06-100.23c0-3.68-2.15-6.49-6.15-7.26Z"/>
      <polygon fill="#C4785A" points="401.45 389.53 360.72 389.61 360.76 347.76 401.42 347.73 401.45 389.53"/>
      <polygon fill="#C4785A" points="456.56 389.48 415.63 389.61 415.55 347.69 456.49 347.71 456.56 389.48"/>
      <polygon fill="#C4785A" points="401.5 445.07 360.76 445.5 360.87 403.79 401.41 403.71 401.5 445.07"/>
      <polygon fill="#C4785A" points="456.56 445.16 415.76 445.41 415.98 403.73 456.52 403.76 456.56 445.16"/>
    </svg>
  )
}

// ─── CUSTOM SVG ICONS ─────────────────────────────────────────────────────────
// Phosphor-inspired duotone icons in brand colors
// Sage #7D9E8C (primary) + Terracotta #C4785A (accent)

const IconMeals = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="20" width="26" height="16" rx="5" fill="#7D9E8C" fillOpacity="0.15" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <rect x="7" y="17" width="30" height="5" rx="2.5" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.6"/>
    <rect x="18" y="13" width="8" height="5" rx="1.5" fill="#7D9E8C" fillOpacity="0.3" stroke="#7D9E8C" strokeWidth="1.6"/>
    <path d="M9 22 C5.5 22 4 20 4 18.5 C4 17 5.5 17 7 17" stroke="#7D9E8C" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M35 22 C38.5 22 40 20 40 18.5 C40 17 38.5 17 37 17" stroke="#7D9E8C" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M16 13 C16 11 17.5 11 17.5 9 C17.5 7 16 7 16 5" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M22 13 C22 11 23.5 11 23.5 9 C23.5 7 22 7 22 5" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M28 13 C28 11 29.5 11 29.5 9 C29.5 7 28 7 28 5" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
)

const IconSchool = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10 h12 a2 2 0 0 1 2 2 v22 a2 2 0 0 1-2 2 H8 a2 2 0 0 1-2-2 V12 a2 2 0 0 1 2-2 z" fill="#7D9E8C" fillOpacity="0.12" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M22 14 h14 a2 2 0 0 1 2 2 v18 a2 2 0 0 1-2 2 H22" fill="#7D9E8C" fillOpacity="0.08" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M22 14 v22" stroke="#7D9E8C" strokeWidth="1.6"/>
    <path d="M11 16 h6" stroke="#7D9E8C" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M11 20 h6" stroke="#7D9E8C" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M11 24 h4" stroke="#7D9E8C" strokeWidth="1.4" strokeLinecap="round"/>
    <circle cx="34" cy="13" r="5" fill="#C4785A" fillOpacity="0.15" stroke="#C4785A" strokeWidth="1.5"/>
    <path d="M34 10.5 v1.5 l1 1" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="34" cy="13" r="1" fill="#C4785A"/>
  </svg>
)

const IconAgents = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="10" r="5" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.6"/>
    <circle cx="9" cy="32" r="5" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.6"/>
    <circle cx="35" cy="32" r="5" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.6"/>
    <path d="M22 15 L9 27" stroke="#7D9E8C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M22 15 L35 27" stroke="#7D9E8C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 32 L30 32" stroke="#7D9E8C" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="22" cy="10" r="2" fill="#C4785A"/>
    <circle cx="9" cy="32" r="2" fill="#C4785A"/>
    <circle cx="35" cy="32" r="2" fill="#C4785A"/>
  </svg>
)

const IconHoliday = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6 L24.5 16 L34 13 L27 20 L34 27 L24.5 24 L22 34 L19.5 24 L10 27 L17 20 L10 13 L19.5 16 Z" fill="#7D9E8C" fillOpacity="0.15" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="22" cy="20" r="3" fill="#7D9E8C" fillOpacity="0.3"/>
    <circle cx="8" cy="8" r="2" fill="#C4785A" fillOpacity="0.6"/>
    <circle cx="36" cy="8" r="1.5" fill="#C4785A" fillOpacity="0.5"/>
    <circle cx="36" cy="36" r="2" fill="#C4785A" fillOpacity="0.6"/>
    <circle cx="8" cy="36" r="1.5" fill="#C4785A" fillOpacity="0.5"/>
    <path d="M5 20 L7 20" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M37 20 L39 20" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M22 5 L22 3" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M22 41 L22 39" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const IconBirthday = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="22" width="30" height="16" rx="4" fill="#7D9E8C" fillOpacity="0.12" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M7 28 h30" stroke="#7D9E8C" strokeWidth="1.4"/>
    <path d="M22 22 v16" stroke="#7D9E8C" strokeWidth="1.4"/>
    <path d="M22 22 C22 18 14 18 14 14 C14 10 22 10 22 14 C22 10 30 10 30 14 C30 18 22 18 22 22 Z" fill="#C4785A" fillOpacity="0.15" stroke="#C4785A" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M14 9 C14 7 16 6 16 4" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M22 9 C22 7 24 6 24 4" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M30 9 C30 7 32 6 32 4" stroke="#C4785A" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const IconScan = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="20" height="16" rx="3" fill="#7D9E8C" fillOpacity="0.12" stroke="#7D9E8C" strokeWidth="1.6" strokeLinejoin="round"/>
    <circle cx="22" cy="22" r="4" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.4"/>
    <circle cx="22" cy="22" r="1.5" fill="#7D9E8C"/>
    <path d="M18 14 v-2 a1 1 0 0 0-1-1 h-2" stroke="#7D9E8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26 14 v-2 a1 1 0 0 1 1-1 h2" stroke="#7D9E8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 15 L5 9 a2 2 0 0 1 2-2 h6" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39 15 L39 9 a2 2 0 0 0-2-2 h-6" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 29 L5 35 a2 2 0 0 0 2 2 h6" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39 29 L39 35 a2 2 0 0 1-2 2 h-6" stroke="#C4785A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 22 h32" stroke="#C4785A" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3"/>
  </svg>
)

// Agent mini icons (smaller, used in the agent grid)
const AgentIconKitchen = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill={color}>
    <path d="M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-48,96H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Zm-8-56H170.25l5.51-22.06a8,8,0,0,0-15.52-3.88L153.75,152H136V128a8,8,0,0,0-16,0v24H102.25l-6.49-25.94a8,8,0,1,0-15.52,3.88L85.75,152H72a40,40,0,0,1,0-80l.58,0A55.21,55.21,0,0,0,72,80a8,8,0,0,0,16,0,40,40,0,0,1,80,0,8,8,0,0,0,16,0,55.21,55.21,0,0,0-.58-8l.58,0a40,40,0,0,1,0,80Z"/>
  </svg>
)

const AgentIconSchedule = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill={color}>
    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V208ZM152,88a31.91,31.91,0,0,0-24,10.86A32,32,0,0,0,72,120c0,36.52,50.28,62.08,52.42,63.16a8,8,0,0,0,7.16,0C133.72,182.08,184,156.52,184,120A32,32,0,0,0,152,88Zm-24,78.93c-13.79-7.79-40-26.75-40-46.93a16,16,0,0,1,32,0,8,8,0,0,0,16,0,16,16,0,0,1,32,0C168,140.19,141.79,159.15,128,166.93Z"/>
  </svg>
)

const AgentIconSchool = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill={color}>
    <path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z"/>
  </svg>
)

const AgentIconWardrobe = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3 C10 3 8 5 5 6 L3 7 L5 9 L7 8 v9 a1 1 0 0 0 1 1 h4 a1 1 0 0 0 1-1 v-9 l2 1 L17 7 L15 6 C12 5 10 3 10 3 Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="10" cy="3" r="1.5" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1.2"/>
  </svg>
)

const AgentIconTravel = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill={color}>
    <path d="M208,96H147.32L101.66,50.34A8,8,0,0,0,96,48H88A16,16,0,0,0,72.83,69.06l9,26.94H59.32L37.66,74.34A8,8,0,0,0,32,72H24A16,16,0,0,0,8.69,92.6l14.07,46.89A39.75,39.75,0,0,0,61.07,168H240a8,8,0,0,0,8-8V136A40,40,0,0,0,208,96Zm24,56H61.07a23.85,23.85,0,0,1-23-17.1L24,88h4.68l21.66,21.66A8,8,0,0,0,56,112h36.9a8,8,0,0,0,7.59-10.53L88,64h4.68l45.66,45.66A8,8,0,0,0,144,112h64a24,24,0,0,1,24,24Zm-8,48a16,16,0,1,1-16-16A16,16,0,0,1,224,200Zm-96,0a16,16,0,1,1-16-16A16,16,0,0,1,128,200Z"/>
  </svg>
)

const AgentIconHoliday = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2 L11.5 8 L17.5 6 L13 10 L17.5 14 L11.5 12 L10 18 L8.5 12 L2.5 14 L7 10 L2.5 6 L8.5 8 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="2" fill={color} fillOpacity="0.4"/>
  </svg>
)

const FEATURE_ICONS = [IconMeals, IconSchool, IconAgents, IconHoliday, IconBirthday, IconScan]

const AGENT_ICONS = [AgentIconKitchen, AgentIconSchedule, AgentIconSchool, AgentIconWardrobe, AgentIconTravel, AgentIconHoliday]

// ─── STYLES ───────────────────────────────────────────────────────────────────
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
  { title:"Meal Planning & Grocery",  bg:"#FFF5F0", desc:"Weekly meals drafted around your schedule and what's on sale at your store. Grocery list built automatically. Frozen chicken thawed before you remember." },
  { title:"School Intelligence",       bg:"#F0F5F2", desc:"Every newsletter, ParentSquare email, and permission slip parsed automatically. Action items extracted. Deadlines never missed." },
  { title:"Agents That Coordinate",   bg:"#F2F5FF", desc:"Six AI agents work together behind the scenes. The Kitchen Agent checks your calendar before planning meals. The Schedule Agent catches conflicts before they happen." },
  { title:"Holiday Magic",             bg:"#FFF5F0", desc:"Countdowns, age-appropriate crafts, prep reminders, and a traditions tracker that makes every holiday feel intentional — not like another thing to manage." },
  { title:"Birthday & Social",         bg:"#F0F5F2", desc:"RSVP tracking, gift suggestions that remember what you already gave, and reminders so nothing slips through." },
  { title:"Scan Anything",             bg:"#FDFBF0", desc:"Point your camera at a paper schedule, party invite, or school flyer. Dates and action items flow into the right place automatically." },
];

const AGENTS = [
  { name:"Kitchen Agent",   color:"#C4785A", desc:"Plans meals, builds grocery lists, checks what's on sale, sets freezer reminders." },
  { name:"Schedule Agent",  color:"#7D9E8C", desc:"Syncs your calendar, tracks activities, flags conflicts, sends pickup reminders." },
  { name:"School Agent",    color:"#C9A84C", desc:"Parses school emails, extracts deadlines, drafts replies, tracks permission slips." },
  { name:"Wardrobe Agent",  color:"#C4785A", desc:"Tracks clothing sizes, monitors sales at your favorite stores, plans seasonal needs." },
  { name:"Travel Agent",    color:"#7D9E8C", desc:"Finds open windows in your calendar, plans trips, monitors deals for your destinations." },
  { name:"Holiday Agent",   color:"#C9A84C", desc:"Manages holiday countdowns, craft ideas, prep reminders, and your family traditions." },
];

const STEPS = [
  { n:"01", c:"#7D9E8C", title:"Tell it about your family",  desc:"Add your kids' ages, schools, activities, and clothing sizes. Connect Google Calendar and Gmail. About 10 minutes." },
  { n:"02", c:"#C4785A", title:"Agents start working",       desc:"School emails get parsed. Grocery lists get drafted around this week's sales. Appointment reminders get set. Agents share context so every output is smarter." },
  { n:"03", c:"#C9A84C", title:"You approve, it does",       desc:"Everything is a draft first. Review meals, approve the grocery list, confirm the calendar event. You're always in control — the agents just do the legwork." },
];

function WaitlistForm() {
  const [val, setVal] = useState("");
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#7D9E8C" fillOpacity="0.2" stroke="#7D9E8C" strokeWidth="1.5"/><path d="M7 12 l3.5 3.5 L17 8" stroke="#7D9E8C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

// Digest item icons for the app preview card
const DigestIcon = ({ type }) => {
  const s = { width:16, height:16, flexShrink:0, marginTop:1 }
  if (type === "gym") return <svg {...s} viewBox="0 0 16 16" fill="none"><path d="M2 8 h2 v4 h2 V4 h2 v8 h2 V4 h2 v8 h2 V6 h2" stroke="#7D9E8C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
  if (type === "bday") return <svg {...s} viewBox="0 0 16 16" fill="none"><rect x="2" y="8" width="12" height="7" rx="2" stroke="#C4785A" strokeWidth="1.2"/><path d="M2 10 h12" stroke="#C4785A" strokeWidth="1"/><path d="M8 8 v7" stroke="#C4785A" strokeWidth="1"/><path d="M8 8 C8 6 5 6 5 4 C5 2 8 2 8 4 C8 2 11 2 11 4 C11 6 8 6 8 8 Z" stroke="#C4785A" strokeWidth="1.1" fill="none"/></svg>
  if (type === "freeze") return <svg {...s} viewBox="0 0 16 16" fill="none"><path d="M8 2 v12" stroke="#7D9E8C" strokeWidth="1.3" strokeLinecap="round"/><path d="M2 8 h12" stroke="#7D9E8C" strokeWidth="1.3" strokeLinecap="round"/><path d="M4 4 l8 8" stroke="#7D9E8C" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.5"/><path d="M12 4 l-8 8" stroke="#7D9E8C" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.5"/><circle cx="8" cy="8" r="2" fill="#7D9E8C" fillOpacity="0.3"/></svg>
  return null
}

export default function App() {
  return (
    <>
      <style>{STYLES}</style>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, height:66, background:"rgba(250,248,245,0.92)", borderBottom:"1px solid rgba(0,0,0,0.06)", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 28px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <LogoIcon size={42} />
          <span style={{ fontFamily:"'Fraunces',serif", fontWeight:700, fontSize:18, color:"#C4785A", letterSpacing:"-0.3px" }}>The MotherLoad</span>
        </div>
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
              <div className="anim-4"><WaitlistForm /></div>
            </div>

            {/* Floating app preview */}
            <div className="hide-sm float-card anim-5" style={{ flexShrink:0, width:288 }}>
              <div style={{ background:"white", borderRadius:24, boxShadow:"0 28px 80px rgba(0,0,0,0.13)", overflow:"hidden" }}>
                <div style={{ background:"#2D2D2D", padding:"12px 16px", display:"flex", alignItems:"center", gap:6 }}>
                  {["#FF5F57","#FFBD2E","#28C840"].map((c,i) => <div key={i} style={{ width:9, height:9, borderRadius:"50%", background:c }} />)}
                  <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)", marginLeft:10, fontFamily:"'DM Sans',sans-serif" }}>joinmotherload.com</span>
                </div>
                <div style={{ padding:20 }}>
                  {/* Logo in preview */}
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16, paddingBottom:12, borderBottom:"1px solid #F2EDE7" }}>
                    <LogoIcon size={24} />
                    <span style={{ fontFamily:"'Fraunces',serif", fontWeight:700, fontSize:12, color:"#C4785A" }}>The MotherLoad</span>
                  </div>
                  <p style={{ fontSize:11, color:"#AAA", textTransform:"uppercase", letterSpacing:"0.8px", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>Good morning ✨</p>
                  <p className="f" style={{ fontSize:20, fontWeight:700, color:"#2D2D2D", marginBottom:18 }}>Tuesday, May 6</p>
                  {[
                    { type:"gym",    t:"Gymnastics pickup — Ella + Maya, 4pm" },
                    { type:"bday",   t:"Emma's party RSVP due today" },
                    { type:"freeze", t:"Pull chicken from freezer tonight" },
                  ].map((x,i) => (
                    <div key={i} style={{ display:"flex", gap:10, padding:"9px 0", borderBottom:i<2?"1px solid #F2EDE7":"none", alignItems:"flex-start" }}>
                      <DigestIcon type={x.type} />
                      <span style={{ fontSize:12.5, color:"#3D3D3D", lineHeight:1.45, fontFamily:"'DM Sans',sans-serif" }}>{x.t}</span>
                    </div>
                  ))}
                  <div style={{ marginTop:14, background:"#FFF8F5", border:"1.5px solid #F0D5C8", borderRadius:12, padding:"10px 14px" }}>
                    <p style={{ fontSize:11, color:"#C4785A", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.6px", marginBottom:4, fontFamily:"'DM Sans',sans-serif" }}>Needs your approval</p>
                    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <IconMeals />
                      <p style={{ fontSize:12, color:"#3D3D3D", fontFamily:"'DM Sans',sans-serif" }}>Week's meal plan is ready</p>
                    </div>
                  </div>
                  <div style={{ marginTop:12, background:"rgba(201,168,76,0.1)", borderRadius:10, padding:"9px 14px", display:"flex", alignItems:"center", gap:6 }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1 L7.8 5 L12 5 L8.6 7.5 L9.9 11.5 L6.5 9 L3.1 11.5 L4.4 7.5 L1 5 L5.2 5 Z" fill="#C9A84C"/></svg>
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
            {FEATURES.map((f,i) => {
              const Icon = FEATURE_ICONS[i]
              return (
                <div key={i} className="card" style={{ background:f.bg, borderRadius:22, padding:28, border:"1px solid rgba(0,0,0,0.04)" }}>
                  <div style={{ marginBottom:16, display:"inline-flex", alignItems:"center", justifyContent:"center", width:56, height:56, borderRadius:16, background:"rgba(255,255,255,0.7)", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                    <Icon />
                  </div>
                  <h3 className="f" style={{ fontSize:20, fontWeight:700, letterSpacing:"-0.3px", color:"#2D2D2D", marginBottom:8 }}>{f.title}</h3>
                  <p style={{ fontSize:14, color:"#6A6460", lineHeight:1.65, fontFamily:"'DM Sans',sans-serif" }}>{f.desc}</p>
                </div>
              )
            })}
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

          <div style={{ background:"white", borderRadius:28, padding:"40px 36px", marginBottom:32, border:"1px solid rgba(0,0,0,0.05)", boxShadow:"0 8px 40px rgba(0,0,0,0.06)" }}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#242E27", borderRadius:100, padding:"10px 24px" }}>
                {/* Orchestrator icon */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7.5" fill="none" stroke="#7D9E8C" strokeWidth="1.3"/>
                  <circle cx="9" cy="9" r="3" fill="#7D9E8C" fillOpacity="0.4"/>
                  <path d="M9 1.5 v3" stroke="#C4785A" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M9 13.5 v3" stroke="#C4785A" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M1.5 9 h3" stroke="#C4785A" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M13.5 9 h3" stroke="#C4785A" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span className="f" style={{ color:"white", fontSize:15, fontWeight:600 }}>Orchestrator</span>
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.45)", fontFamily:"'DM Sans',sans-serif" }}>coordinates everything</span>
              </div>
            </div>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:8 }}>
              <div style={{ width:1, height:24, background:"#E0D8D0" }} />
            </div>
            <div className="agents-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
              {AGENTS.map((a,i) => {
                const AgIcon = AGENT_ICONS[i]
                return (
                  <div key={i} className="agent-card" style={{ background:"#FAF8F5", borderRadius:16, padding:"18px 20px", border:"1.5px solid rgba(0,0,0,0.06)" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                      <div style={{ width:34, height:34, borderRadius:"50%", background:a.color + "22", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <AgIcon color={a.color} />
                      </div>
                      <span className="f" style={{ fontSize:14, fontWeight:700, color:"#2D2D2D" }}>{a.name}</span>
                    </div>
                    <p style={{ fontSize:12.5, color:"#7A7470", lineHeight:1.55, fontFamily:"'DM Sans',sans-serif" }}>{a.desc}</p>
                  </div>
                )
              })}
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
                "That's 12 months of subscription covered in savings."
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
            <div className="f" style={{ fontSize:120, lineHeight:0.7, color:"#F0EBE4", position:"absolute", top:32, left:36, userSelect:"none" }}>"</div>
            <div style={{ position:"relative", zIndex:1 }}>
              <p style={{ fontSize:"clamp(16px,2vw,19px)", lineHeight:1.75, color:"#3D3530", fontFamily:"'DM Sans',sans-serif", marginBottom:28 }}>
                I'm Lisa — a mom of three kids under 7. For a long time I thought staying on top of everything <em>was</em> the job. The permission slips, the grocery lists, the dentist appointments, the dinner planning — all of it living in my head, all the time.
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
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:10, marginBottom:16 }}>
          <LogoIcon size={36} style={{ opacity:0.8, filter:"brightness(0) invert(1)" }} />
          <span className="f" style={{ fontSize:17, color:"rgba(255,255,255,0.8)", fontWeight:600 }}>The MotherLoad</span>
        </div>
        <p style={{ fontSize:13, color:"rgba(255,255,255,0.3)", fontFamily:"'DM Sans',sans-serif" }}>
          We carry the load. You carry the love. · © 2026 · joinmotherload.com
        </p>
      </footer>
    </>
  );
}
