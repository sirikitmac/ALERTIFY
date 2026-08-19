import { Shield } from 'lucide-react';

export function Footer() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Demo', href: '#demo' },
    { label: 'Impact', href: '#impact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-[#64747F] text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-gray-200">
          
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#12304A] text-white flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#F28C28]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-[#12304A]">
                Alertify
              </span>
            </div>
            <p className="text-xs sm:text-sm font-serif italic text-[#64747F]">
              &ldquo;A clearer picture when it matters most.&rdquo;
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-semibold text-[#64747F]">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#168AAD] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Credits, SDGs & Civic Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Global Goals SDG Badges */}
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold text-[#64747F] uppercase tracking-[0.2em]">
              Global Goals:
            </span>
            <div className="flex gap-1.5 items-center">
              <div className="w-5 h-5 bg-[#F59E0B] rounded-xs flex items-center justify-center text-[9px] font-bold text-white shadow-xs" title="SDG 11: Sustainable Cities">
                11
              </div>
              <div className="w-5 h-5 bg-[#3F6231] rounded-xs flex items-center justify-center text-[9px] font-bold text-white shadow-xs" title="SDG 13: Climate Action">
                13
              </div>
              <div className="w-5 h-5 bg-[#00689D] rounded-xs flex items-center justify-center text-[9px] font-bold text-white shadow-xs" title="SDG 16: Strong Institutions">
                16
              </div>
            </div>
          </div>

          <div className="text-[11px] font-serif italic text-[#64747F]">
            Resilient Communities Initiative
          </div>

          <div className="text-[10px] uppercase font-bold tracking-widest text-[#12304A]">
            Alertify &copy; {new Date().getFullYear()}
          </div>

        </div>

      </div>
    </footer>
  );
}

