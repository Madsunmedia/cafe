

export function Footer() {
  return (
    <footer className="w-full bg-black-matte border-t border-white/5 py-12 px-4 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif text-cream-white mb-2">Cafe Cinematic</h2>
          <p className="text-cafe-400 text-sm">Where every cup tells a story.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cafe-300 hover:text-orange-glow hover:bg-white/10 hover:border-orange-glow/50 transition-all shadow-[0_0_0_rgba(230,126,34,0)] hover:shadow-[0_0_15px_rgba(230,126,34,0.3)]">
            IG
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cafe-300 hover:text-orange-glow hover:bg-white/10 hover:border-orange-glow/50 transition-all shadow-[0_0_0_rgba(230,126,34,0)] hover:shadow-[0_0_15px_rgba(230,126,34,0.3)]">
            TW
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cafe-300 hover:text-orange-glow hover:bg-white/10 hover:border-orange-glow/50 transition-all shadow-[0_0_0_rgba(230,126,34,0)] hover:shadow-[0_0_15px_rgba(230,126,34,0.3)]">
            FB
          </a>
        </div>

      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-cafe-500">
        <p>&copy; {new Date().getFullYear()} Cafe Cinematic. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-cafe-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cafe-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
