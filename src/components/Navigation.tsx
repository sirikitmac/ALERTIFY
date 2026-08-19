import { useState, useEffect } from 'react';
import { Shield, ArrowRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  onOpenExplorer: () => void;
}

type NavCategory = 'overview' | 'incidents' | 'map' | 'reports' | 'analytics';

export function Navigation({ onOpenExplorer }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<NavCategory>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navCategories: { id: NavCategory; label: string; href: string }[] = [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'incidents', label: 'Incidents', href: '#incidents' },
    { id: 'map', label: 'Map', href: '#map' },
    { id: 'reports', label: 'Reports', href: '#reports' },
    { id: 'analytics', label: 'Analytics', href: '#analytics' },
  ];

  // Scroll detection and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navCategories.map((cat) => ({
        id: cat.id,
        el: document.getElementById(cat.id),
      }));

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el) {
          const top = section.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveCategory(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: NavCategory, href: string) => {
    setActiveCategory(id);
    setMobileMenuOpen(false);

    if (id === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F7F8]/90 backdrop-blur-md border-b border-[#12304A]/10 shadow-[0_4px_20px_rgba(18,48,74,0.04)] py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo & Name */}
        <div className="flex items-center">
          <a
            id="nav-brand-logo"
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('overview', '#overview');
            }}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168AAD] rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-[#12304A] text-white flex items-center justify-center shadow-xs group-hover:bg-[#168AAD] transition-colors duration-200">
              <Shield className="w-4 h-4 text-[#F28C28]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#12304A] leading-none">
                Alertify
              </span>
              <span className="text-[9px] font-mono font-medium tracking-wider text-[#64747F] uppercase mt-0.5">
                Civic Triage
              </span>
            </div>
          </a>
        </div>

        {/* Center: Subtle Rounded Pill Container for Main Categories */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center bg-white/90 backdrop-blur-md border border-[#12304A]/10 shadow-[0_2px_12px_rgba(18,48,74,0.05)] rounded-full p-1.5 gap-1"
        >
          {navCategories.map((item) => {
            const isActive = activeCategory === item.id;
            return (
              <button
                key={item.id}
                id={`nav-pill-${item.id}`}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#12304A] text-white shadow-xs'
                    : 'text-[#64747F] hover:text-[#12304A] hover:bg-[#12304A]/5'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD] shrink-0" />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Secondary Action / Explorer Trigger */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-cta-explore-btn"
            onClick={onOpenExplorer}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#168AAD] text-white text-xs font-semibold rounded-full shadow-md shadow-[#168AAD25] hover:bg-[#12304A] active:scale-[0.98] transition-all duration-200 cursor-pointer group"
          >
            <span>Live Triage</span>
            <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#12304A] hover:text-[#168AAD] rounded-full bg-white/90 border border-[#12304A]/10 shadow-xs focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with Clean Pill Navigation Categories */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden mt-2 mx-4 bg-white/95 backdrop-blur-lg border border-[#12304A]/10 rounded-2xl p-4 shadow-xl animate-in slide-in-from-top-2 duration-200 space-y-3"
        >
          <div className="flex flex-col space-y-1">
            {navCategories.map((item) => {
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[#12304A] text-white shadow-xs'
                      : 'text-[#12304A] hover:bg-[#12304A]/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#168AAD]" />}
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-current opacity-60">
                    #{item.id}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#12304A]/10">
            <button
              id="mobile-nav-cta-explore-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExplorer();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#168AAD] hover:bg-[#12304A] rounded-full shadow-md shadow-[#168AAD25] transition-colors"
            >
              <span>Launch Live Triage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
