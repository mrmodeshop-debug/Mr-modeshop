export default function Footer() {
    return (
        <footer
            className="bg-luxury-dark text-white pt-20 pb-10 border-t border-luxury-gold/20"
            dir="rtl"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-luxury-gold tracking-widest">
                        MR. MODE
                    </h3>

                    <p className="font-sans text-xs leading-relaxed text-gray-400 max-w-xs">
                        من قلب الدار البيضاء، نصيغ أناقة الرجل المغربي بجودة استثنائية
                        وتصاميم خالدة تجمع بين الفخامة والراحة.
                    </p>

                    <p className="text-[10px] tracking-[0.3em] text-luxury-gold/50">
                        SINCE 2026
                    </p>

                    <div className="flex gap-4 pt-2 text-gray-500">
                        <a
                            href="https://instagram.com/mrmode"
                            aria-label="Instagram"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            IG
                        </a>
                        <a
                            href="https://facebook.com/mrmode"
                            aria-label="Facebook"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            FB
                        </a>
                    </div>
                </div>

                {/* Customer Care */}
                <nav className="space-y-4">
                    <h4 className="font-serif text-sm tracking-widest border-b border-luxury-gold/30 pb-2 w-fit">
                        المساعدة
                    </h4>

                    <ul className="font-sans text-xs space-y-3 text-gray-400">
                        <li>
                            <a href="/track-order" className="hover:text-luxury-gold transition">
                                تتبع طلبك
                            </a>
                        </li>
                        <li>
                            <a href="/returns" className="hover:text-luxury-gold transition">
                                سياسة الإرجاع
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-luxury-gold transition">
                                الأسئلة الشائعة
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-luxury-gold transition">
                                اتصل بنا
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* About */}
                <nav className="space-y-4">
                    <h4 className="font-serif text-sm tracking-widest border-b border-luxury-gold/30 pb-2 w-fit">
                        عن المتجر
                    </h4>

                    <ul className="font-sans text-xs space-y-3 text-gray-400">
                        <li>
                            <a href="/about" className="hover:text-luxury-gold transition">
                                من نحن
                            </a>
                        </li>
                        <li>
                            <a href="/locations" className="hover:text-luxury-gold transition">
                                فروعنا
                            </a>
                        </li>
                        <li>
                            <a href="/careers" className="hover:text-luxury-gold transition">
                                الوظائف
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="font-serif text-sm tracking-widest border-b border-luxury-gold/30 pb-2 w-fit">
                        اتصل بنا
                    </h4>

                    <div className="font-sans text-xs text-gray-400 space-y-3 leading-relaxed">
                        <address className="not-italic flex gap-2">
                            <span role="img" aria-label="الموقع">📍</span>
                            <span>درب التعاون، زنقة 71، الحي الحسني، الدار البيضاء</span>
                        </address>

                        <p className="flex gap-2 items-center">
                            <span role="img" aria-label="الهاتف">📞</span>
                            <a
                                href="tel:+212653421432"
                                className="hover:text-luxury-gold transition ltr"
                            >
                                +212 653 421 432
                            </a>
                        </p>

                        <p className="flex gap-2 items-center">
                            <span role="img" aria-label="البريد الإلكتروني">✉️</span>
                            <a
                                href="mailto:mr.modeshop@gmail.com"
                                className="hover:text-luxury-gold transition"
                            >
                                mr.modeshop@gmail.com
                            </a>
                        </p>

                        <p className="text-[10px] text-luxury-gold/60 pt-2">
                            السبت – الخميس: 10h – 23h <br />
                            الجمعة: 15h – 23h
                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="mt-20 pt-8 border-t border-white/5 text-center">
                <p className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                    ©️ 2026 MR. MODE — Crafted with Moroccan Elegance, Casablanca
                </p>
            </div>
        </footer>
    );
}
