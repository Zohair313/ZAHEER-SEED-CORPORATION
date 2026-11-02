import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Star, 
  Search, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  ShieldCheck, 
  Sprout, 
  Truck, 
  CheckCircle2, 
  Award, 
  Smartphone, 
  Quote, 
  BadgeCheck,
  Building2,
  FileCheck,
  Globe,
  SlidersHorizontal,
  DownloadCloud
} from 'lucide-react';

const IMAGES = {
  heroMain: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  heroSeeds: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80", 
  heroFarmer: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80", 
  heroMill: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80", 
  avatar1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  avatar2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  avatar3: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  rice: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80", 
  wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80", 
  maize: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80", 
  fodder: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", 
  processing: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80", 
  farmerTestimonial: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", 
  fieldCheck: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80", 
  blog1: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80", 
  blog2: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80", 
  blog3: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80", 
  blog4: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80", 
};

const PRODUCTS = [
  {
    id: 1,
    name: "Super Basmati Elite 515",
    type: "Certified Paddy Seed",
    category: "Rice",
    urdu: "سپر باسمتی ۵۱۵ ایلیٹ",
    price: "₨ 7,850",
    unit: "/ 40kg Bag",
    image: IMAGES.rice,
    germination: "94% Germination",
    purity: "99.2% Purity",
    yield: "68-72 Maunds/Acre",
    badge: "Kasur Top Seller"
  },
  {
    id: 2,
    name: "Akbar Gold 2025 Certified",
    type: "High Yield Wheat Seed",
    category: "Wheat",
    urdu: "اکبر گولڈ تصدیق شدہ گندم",
    price: "₨ 6,400",
    unit: "/ 50kg Bag",
    image: IMAGES.wheat,
    germination: "96% Germination",
    purity: "99.5% Purity",
    yield: "58-64 Maunds/Acre",
    badge: "Rust Resistant"
  },
  {
    id: 3,
    name: "Hybrid Maize ZS-800 Turbo",
    type: "Double Cob Corn Seed",
    category: "Maize",
    urdu: "ہائبرڈ مکئی زیڈ ایس ۸۰۰",
    price: "₨ 11,200",
    unit: "/ Pack (Grain/Silage)",
    image: IMAGES.maize,
    germination: "95% Germination",
    purity: "99.8% Purity",
    yield: "115-125 Maunds/Acre",
    badge: "High Starch & Yield"
  },
  {
    id: 4,
    name: "SSG Jumbo Sweet Fodder",
    type: "Multi-Cut Dairy Grass",
    category: "Fodder",
    urdu: "سپر سویٹ جنتر ملٹی کٹ چارہ",
    price: "₨ 4,800",
    unit: "/ Bag",
    image: IMAGES.fodder,
    germination: "91% Germination",
    purity: "98.8% Purity",
    yield: "Multi-Harvest 4 Cuts",
    badge: "Dairy Preferred"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Chaudhry Rauf Warraich",
      role: "Licensed Seed Distributor & Progressive Grower",
      location: "Steel Bagh / Chunian Bypass, Kasur",
      stars: 5,
      review: "Zaheer Seed Corporation has consistently met Punjab Seed Council quality parameters. We dispatched 450 bags of Super Basmati 515 across our grower network with zero lodging reports and over 94% lab germination.",
      image: IMAGES.farmerTestimonial,
      lot: "Batch No. ZSC-KSR-2026/A"
    },
    {
      name: "Haji Muhammad Aslam",
      role: "Agricultural Input Wholesaler",
      location: "Pattoki Mandi, District Kasur",
      stars: 5,
      review: "The direct dealer booking capability and authenticated lot test tags have streamlined our procurement cycle. Their mechanical grading guarantees that our farmers receive weed-free, fungicide-treated seeds.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      lot: "Batch No. ZSC-WHT-901/B"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Basmati Rice Germination in Punjab Soils",
      category: "Technical Advisory",
      date: "Nov 2026",
      readTime: "4 min read",
      image: IMAGES.blog1,
      action: "Read Protocol"
    },
    {
      id: 2,
      title: "Chemical Fungicide Treatment & Grain Storage Protocols",
      category: "Quality Control",
      date: "Oct 2026",
      readTime: "5 min read",
      image: IMAGES.blog2,
      action: "Read Protocol"
    },
    {
      id: 3,
      title: "How Kasur Seed Dealers Transitioned to Digital Pre-Booking",
      category: "Industry Report",
      date: "Oct 2026",
      readTime: "3 min read",
      image: IMAGES.blog3,
      action: "Read Report"
    },
    {
      id: 4,
      title: "Maximizing Tillers and Grain Weight in Rabi Wheat",
      category: "Agronomy Advisory",
      date: "Sep 2026",
      readTime: "6 min read",
      image: IMAGES.blog4,
      action: "Read Protocol"
    }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeTab === 'All' || p.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      
      {/* 1. TOP CORPORATE UTILITY BAR */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        fontSize: '12px', 
        color: '#64748b', 
        padding: '0 8px 12px 8px',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0f172a', fontWeight: '600' }}>
            <Building2 size={13} color="#059669" /> Kasur Registered Office: Shareef Plaza, Steel Bagh Chowk
          </span>
          <span style={{ color: '#cbd5e1' }}>|</span>
          <span>Seed Breeding, Processing & Distribution</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#0f172a', fontWeight: '700' }}>
            <FileCheck size={13} color="#059669" /> Certified Lab Batches
          </span>
          <span style={{ color: '#cbd5e1' }}>|</span>
          <a href="tel:+923006579784" style={{ color: '#047857', fontWeight: '700' }}>
            Direct Hotline: +92 300 6579784
          </a>
        </div>
      </div>

      {/* 2. CORPORATE HEADER / NAV */}
      <header style={{ 
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px', 
        padding: '4px 8px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, #065f46 0%, #042f2e 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#ffffff',
            boxShadow: '0 6px 16px rgba(6, 95, 70, 0.25)',
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            <Sprout size={26} />
          </div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '20px', color: '#0f172a', letterSpacing: '-0.4px', lineHeight: '1.2' }}>
              ZAHEER SEED CORPORATION
            </div>
            <div style={{ fontSize: '11px', fontWeight: '700', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              DISTRICT KASUR • OFFICIAL SEED BREEDING & RESEARCH
            </div>
          </div>
        </div>

        {/* Navigation links & action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a 
            href="#catalog"
            style={{ 
              fontSize: '13px', 
              fontWeight: '700', 
              color: '#334155', 
              padding: '8px 16px', 
              borderRadius: '8px' 
            }}>
            Seed Varieties
          </a>
          <a 
            href="#dealer-steps"
            style={{ 
              fontSize: '13px', 
              fontWeight: '700', 
              color: '#334155', 
              padding: '8px 16px', 
              borderRadius: '8px' 
            }}>
            Dealer Allocation
          </a>
          <a 
            href="tel:+923006579784" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '13px', 
              fontWeight: '700', 
              color: '#0f172a', 
              backgroundColor: '#ffffff', 
              padding: '9px 18px', 
              borderRadius: '50px', 
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}>
            <Phone size={14} color="#059669" />
            <span>Call Mill Desk</span>
          </a>
          <a 
            href="https://wa.me/923006579784?text=Salam%20Zaheer%20Seed%20Corporation,%20I%20am%20inquiring%20about%20seed%20rates%20and%20dealer%20distribution." 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '13px', 
              fontWeight: '700', 
              color: '#ffffff', 
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
              padding: '10px 22px', 
              borderRadius: '50px',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)' 
            }}>
            <MessageCircle size={15} />
            <span>WhatsApp Badge</span>
          </a>
        </div>
      </header>

      {/* 3. HERO SECTION - REFINED CORPORATE ARCHITECTURE */}
      <div className="responsive-hero pattern-hero-grid" style={{
        width: '100%',
        color: '#ffffff',
        borderRadius: '30px',
        padding: '52px 46px',
        marginBottom: '26px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '44px',
        alignItems: 'center',
        boxShadow: '0 20px 50px -10px rgba(7, 25, 16, 0.5)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(16, 185, 129, 0.25)'
      }}>
        {/* Left Column Content */}
        <div style={{ zIndex: 2 }}>
          {/* Top verified corporate pill */}
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: 'rgba(255, 255, 255, 0.08)', 
            backdropFilter: 'blur(10px)', 
            padding: '6px 14px', 
            borderRadius: '50px', 
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '20px' 
          }}>
            <span style={{ 
              display: 'inline-block', 
              width: '7px', 
              height: '7px', 
              borderRadius: '50%', 
              backgroundColor: '#10b981' 
            }} className="live-dot" />
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#a7f3d0', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              DISTRICT KASUR SEED HUB
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#fef08a', fontWeight: '700' }}>
              <Star size={12} fill="#eab308" color="#eab308" /> 4.0 ★ (Verified Merchant)
            </span>
          </div>

          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '800', 
            lineHeight: '1.15', 
            marginBottom: '18px', 
            letterSpacing: '-1.2px',
            color: '#ffffff'
          }}>
            Certified Seed Breeding & Distribution <span style={{ 
              background: 'linear-gradient(90deg, #34d399 0%, #10b981 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              display: 'inline'
            }}>Across Punjab.</span>
          </h1>

          <p style={{ 
            fontSize: '15px', 
            color: '#cbd5e1', 
            lineHeight: '1.65', 
            marginBottom: '26px', 
            maxWidth: '600px' 
          }}>
            Zaheer Seed Corporation supplies high-germination certified seed varieties to registered dealers and commercial farms. Processed with advanced mechanical grading and tested to Punjab agricultural standards.
          </p>

          {/* Social Proof Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={IMAGES.avatar1} alt="Dealer" style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #071910', objectFit: 'cover' }} />
              <img src={IMAGES.avatar2} alt="Dealer" style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #071910', marginLeft: '-8px', objectFit: 'cover' }} />
              <img src={IMAGES.avatar3} alt="Dealer" style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid #071910', marginLeft: '-8px', objectFit: 'cover' }} />
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#059669', color: '#ffffff', fontSize: '11px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #071910', marginLeft: '-8px' }}>
                +850
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>
              <strong style={{ color: '#ffffff' }}>850+ Registered Dealers</strong> & growers across Punjab
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '34px' }}>
            <a 
              href="#catalog"
              style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                color: '#ffffff', 
                fontWeight: '800', 
                fontSize: '14px', 
                padding: '14px 30px', 
                borderRadius: '50px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                boxShadow: '0 4px 18px rgba(16, 185, 129, 0.4)'
              }}>
              Browse Certified Listing <ArrowRight size={16} />
            </a>

            <a 
              href="#dealer-steps"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.08)', 
                color: '#ffffff', 
                fontWeight: '700', 
                fontSize: '14px', 
                padding: '13px 26px', 
                borderRadius: '50px', 
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backdropFilter: 'blur(8px)'
              }}>
              <Smartphone size={15} color="#34d399" /> Dealer Booking App
            </a>
          </div>

          {/* Key Metric Indicators */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '16px', 
            paddingTop: '20px', 
            borderTop: '1px solid rgba(255,255,255,0.12)' 
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#34d399', letterSpacing: '-0.5px' }}>94%+</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>Lab Germination</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#34d399', letterSpacing: '-0.5px' }}>99.2%</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>Physical Purity</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#34d399', letterSpacing: '-0.5px' }}>24h</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>Punjab Dispatch</div>
            </div>
          </div>
        </div>

        {/* Right Column Visual Gallery */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          {/* Top Badge */}
          <div 
            style={{
              position: 'absolute',
              top: '-12px',
              right: '16px',
              zIndex: 10,
              backgroundColor: '#ffffff',
              color: '#0f172a',
              padding: '8px 16px',
              borderRadius: '50px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: '800'
            }}>
            <BadgeCheck size={16} color="#059669" />
            <span>100% Sealed Lot Tags</span>
          </div>

          {/* Main Visual Display */}
          <div style={{ 
            width: '100%', 
            height: '330px', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            position: 'relative',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
            border: '2px solid rgba(255,255,255,0.15)',
            marginBottom: '14px',
            backgroundColor: '#071910'
          }}>
            <img 
              src={IMAGES.heroMain} 
              alt="Zaheer Seed Corporation Agricultural Fields" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(7, 25, 16, 0.9) 0%, rgba(7, 25, 16, 0.2) 60%, transparent 100%)' 
            }} />

            {/* Bottom Glass Coordinates Card */}
            <div style={{ 
              position: 'absolute', 
              bottom: '14px', 
              left: '14px', 
              right: '14px', 
              backgroundColor: 'rgba(255, 255, 255, 0.96)', 
              backdropFilter: 'blur(10px)', 
              padding: '12px 16px', 
              borderRadius: '16px', 
              color: '#0f172a',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: '800', color: '#059669', textTransform: 'uppercase' }}>
                  <MapPin size={12} /> Head Office & Mill Depot
                </div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginTop: '1px' }}>
                  Steel Bagh Chowk, Kasur
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600' }}>WhatsApp Booking</div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#059669' }}>+92 300 6579784</div>
              </div>
            </div>
          </div>

          {/* 3 Secondary Image Tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ height: '90px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src={IMAGES.heroSeeds} alt="Tested Seed Strains" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '3px 6px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', fontSize: '10px', fontWeight: '700', color: '#ffffff' }}>
                Tested Strains
              </div>
            </div>

            <div style={{ height: '90px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src={IMAGES.heroFarmer} alt="Farmer Harvest Yield" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '3px 6px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', fontSize: '10px', fontWeight: '700', color: '#ffffff' }}>
                Commercial Yield
              </div>
            </div>

            <div style={{ height: '90px', borderRadius: '14px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src={IMAGES.heroMill} alt="Grading and Processing Mill" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, insetInline: 0, padding: '3px 6px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', fontSize: '10px', fontWeight: '700', color: '#ffffff' }}>
                Mechanical Mill
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. THREE PILL SUMMARY CARDS */}
      <div className="responsive-three-cols" style={{ 
        width: '100%',
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px', 
        marginBottom: '26px' 
      }}>
        <div className="hover-lift" style={{ 
          backgroundColor: '#ffffff', 
          padding: '24px 26px', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: 0 }}>99.2% Genetic Purity</h4>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '3px 0 0 0' }}>Rigorous screening removes shriveled and weed seeds</p>
          </div>
        </div>

        <div className="hover-lift" style={{ 
          backgroundColor: '#ffffff', 
          padding: '24px 26px', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb', flexShrink: 0 }}>
            <Truck size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: 0 }}>Punjab Bulk Logistics</h4>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '3px 0 0 0' }}>Daily direct supply to Kasur, Okara, Lahore Mandis</p>
          </div>
        </div>

        <div className="hover-lift" style={{ 
          backgroundColor: '#ffffff', 
          padding: '24px 26px', 
          borderRadius: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}>
            <Award size={24} />
          </div>
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: 0 }}>High Tillering Vigor</h4>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '3px 0 0 0' }}>Maximized bushel weight & verified harvest yield</p>
          </div>
        </div>
      </div>

      {/* 5. CERTIFIED SEED CATALOG */}
      <div id="catalog" className="section-card pattern-subtle-grid">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              OFFICIAL PRODUCTION BATCHES
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', margin: '4px 0 0 0' }}>
              Certified Seed Varieties & Allocation
            </h2>
          </div>

          {/* Filtering & Search Controls */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '6px', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '10px' }}>
              {['All', 'Rice', 'Wheat', 'Maize', 'Fodder'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '700',
                    backgroundColor: activeTab === cat ? '#0f172a' : 'transparent',
                    color: activeTab === cat ? '#ffffff' : '#475569'
                  }}>
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '8px 14px', borderRadius: '10px', minWidth: '220px' }}>
              <Search size={15} color="#64748b" />
              <input 
                type="text" 
                placeholder="Search seed varieties..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '12px', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="responsive-three-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginBottom: '24px' }}>
          {filteredProducts.slice(0, 3).map((seed) => (
            <div 
              key={seed.id}
              className="hover-lift"
              style={{ 
                borderRadius: '20px', 
                border: '1px solid #e2e8f0', 
                overflow: 'hidden', 
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <div style={{ position: 'relative', height: '210px', overflow: 'hidden', backgroundColor: '#071910' }}>
                <img 
                  src={seed.image} 
                  alt={seed.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '12px', 
                  backgroundColor: 'rgba(7, 25, 16, 0.9)', 
                  color: '#ffffff', 
                  fontSize: '10px', 
                  fontWeight: '800', 
                  padding: '4px 10px', 
                  borderRadius: '6px',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  {seed.badge}
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>{seed.type}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '3px 0 1px 0' }}>
                    {seed.name}
                  </h3>
                  <div className="font-urdu" style={{ fontSize: '14px', color: '#059669', fontWeight: '700', marginBottom: '12px' }}>
                    {seed.urdu}
                  </div>

                  {/* Spec Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px', backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f1f5f9' }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Germination</span>
                      <strong style={{ fontSize: '13px', color: '#059669' }}>{seed.germination}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Purity</span>
                      <strong style={{ fontSize: '13px', color: '#0f172a' }}>{seed.purity}</strong>
                    </div>
                    <div style={{ gridColumn: 'span 2', borderTop: '1px solid #e2e8f0', paddingTop: '6px' }}>
                      <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Yield Potential</span>
                      <strong style={{ fontSize: '12px', color: '#b45309' }}>{seed.yield}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  paddingTop: '14px', 
                  borderTop: '1px solid #f1f5f9' 
                }}>
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>
                      {seed.price}
                    </div>
                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>{seed.unit}</div>
                  </div>
                  <a 
                    href={`https://wa.me/923006579784?text=Salam%20Zaheer%20Seed,%20I%20want%20to%20reserve%20quota%20for%20${encodeURIComponent(seed.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ 
                      backgroundColor: '#0f172a', 
                      color: '#ffffff', 
                      padding: '10px 18px', 
                      borderRadius: '8px', 
                      fontSize: '12px', 
                      fontWeight: '700',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                    Book Quota
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status notice */}
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#64748b', paddingTop: '8px' }}>
          * Quota bookings are reserved on a first-come, first-served basis from the Kasur processing depot.
        </div>
      </div>

      {/* 6. USER GUIDE & DEALER PROCUREMENT STEPS */}
      <div id="dealer-steps" className="section-card">
        <div className="responsive-split" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '44px', alignItems: 'center' }}>
          <div>
            <div style={{ 
              width: '46px', 
              height: '46px', 
              borderRadius: '12px', 
              backgroundColor: '#ecfdf5', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#059669',
              marginBottom: '18px'
            }}>
              <Quote size={24} />
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', lineHeight: '1.2', color: '#0f172a', marginBottom: '14px' }}>
              Standardized Procurement Guide for Licensed Dealers
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', marginBottom: '22px' }}>
              Establish direct institutional procurement terms with Zaheer Seed Corporation Kasur. Eliminate middleman markups and secure official lot testing verification certificates.
            </p>
            <a 
              href="https://wa.me/923006579784?text=Please%20send%20the%20dealer%20onboarding%20guide%20and%20contract%20details."
              target="_blank"
              rel="noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                padding: '12px 24px', 
                borderRadius: '8px', 
                fontWeight: '700', 
                fontSize: '13px' 
              }}>
              <Smartphone size={16} /> Open Mobile Dealer Desk
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderLeft: '3px solid #059669', paddingLeft: '18px', backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '0 12px 12px 0' }}>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>
                Stage 1: Variety Selection & Acreage Calculation
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Filter certified rice, wheat, corn or forage varieties formulated for specific soil conditions.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid #cbd5e1', paddingLeft: '18px', backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '0 12px 12px 0' }}>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>
                Stage 2: Batch Test Certificate Verification
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Review certified germination rates and physical seed purity parameters before payment dispatch.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid #cbd5e1', paddingLeft: '18px', backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '0 12px 12px 0' }}>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>
                Stage 3: Dealer Quota Allocation on WhatsApp
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Submit bulk bag requests directly to Director Zaheer Attari for priority allocation and price locking.
              </p>
            </div>

            <div style={{ borderLeft: '3px solid #cbd5e1', paddingLeft: '18px', backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '0 12px 12px 0' }}>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', marginBottom: '2px' }}>
                Stage 4: Dispatch From Steel Bagh Depot
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Sealed, mechanically stitched bags with anti-tamper lot tags dispatched directly to your warehouse.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. SATISFIED CLIENTS SPEAKS */}
      <div className="section-card pattern-subtle-grid">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            TESTIMONIALS & REPUTATION
          </span>
          <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a', margin: '4px 0 0 0' }}>
            Verified Grower & Distributor Feedback
          </h2>
        </div>

        <div className="responsive-split" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: '36px', alignItems: 'center' }}>
          <div style={{ position: 'relative', height: '300px' }}>
            <div style={{ 
              width: '78%', 
              height: '240px', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              position: 'absolute', 
              top: '0', 
              left: '0',
              border: '4px solid #ffffff',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              backgroundColor: '#071910'
            }}>
              <img 
                src={IMAGES.fieldCheck} 
                alt="Agricultural field check" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ 
              width: '75%', 
              height: '220px', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              position: 'absolute', 
              bottom: '0', 
              right: '0',
              border: '4px solid #ffffff',
              boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
              backgroundColor: '#071910'
            }}>
              <img 
                src={IMAGES.processing} 
                alt="Seed processing warehouse" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div style={{ 
            backgroundColor: '#ffffff', 
            padding: '34px', 
            borderRadius: '20px', 
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 18px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img 
                src={testimonials[activeTestimonial].image} 
                alt={testimonials[activeTestimonial].name} 
                style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #059669' }}
              />
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
                  {testimonials[activeTestimonial].name}
                </h4>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                </div>
                <div style={{ display: 'flex', gap: '2px', marginTop: '3px' }}>
                  {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                    <Star key={i} size={13} fill="#eab308" color="#eab308" />
                  ))}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '22px' }}>
              "{testimonials[activeTestimonial].review}"
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#059669', backgroundColor: '#ecfdf5', padding: '5px 12px', borderRadius: '6px', border: '1px solid #a7f3d0' }}>
                {testimonials[activeTestimonial].lot}
              </span>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? 1 : 0))}
                  style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev === 1 ? 0 : 1))}
                  style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8. METRICS & TRANSFORMATION (10+ MILLION ACRES) */}
      <div className="section-card">
        <div className="responsive-three-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', letterSpacing: '-1px' }}>
                10+ Million
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
                Acres Cultivated in Punjab
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Across Kasur, Okara, Sahiwal, and central agricultural districts of Punjab.
              </p>
            </div>

            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', letterSpacing: '-1px' }}>
                8x More
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
                Germination Uniformity
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Achieved via multi-tier gravity separators removing shriveled seeds.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', letterSpacing: '-1px' }}>
                1+ Million
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', marginBottom: '4px' }}>
                Certified Bags Dispatched
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                Directly distributed to licensed fertilizer and seed dealers.
              </p>
            </div>
          </div>

          <div style={{ height: '340px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', backgroundColor: '#071910' }}>
            <img 
              src={IMAGES.processing} 
              alt="Zaheer Seed Corporation Warehouse & Grading" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              KASUR AGRIBUSINESS LEADERSHIP
            </span>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginTop: '6px', marginBottom: '14px', lineHeight: '1.3' }}>
              Kasur, Pakistan: The Modern Transformation Of Crop Breeding.
            </h3>
            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
              By merging advanced grain cleaning equipment with authentic local breeding pedigrees, Zaheer Seed Corporation has eliminated adulterated batches, providing dealers and growers with verifiable yield confidence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>
              <CheckCircle2 size={16} color="#059669" /> Verified ISO & Punjab Seed Council Specifications
            </div>
          </div>
        </div>
      </div>

      {/* 9. BLOG & AGRONOMY INSIGHTS */}
      <div className="section-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '26px' }}>
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', margin: 0 }}>
              Agronomy Bulletins & Technical Guidance
            </h2>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '3px 0 0 0' }}>
              Published advisories from certified agronomists and crop breeders
            </p>
          </div>
          <a 
            href="#catalog"
            style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}>
            All Publications <ChevronRight size={15} />
          </a>
        </div>

        <div className="responsive-four-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="hover-lift"
              style={{ 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0', 
                overflow: 'hidden', 
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column'
              }}>
              <div style={{ height: '150px', overflow: 'hidden', backgroundColor: '#071910' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginBottom: '6px' }}>
                    <span style={{ color: '#059669', fontWeight: '800' }}>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', lineHeight: '1.4', margin: '0 0 10px 0' }}>
                    {post.title}
                  </h4>
                </div>
                <a 
                  href="https://wa.me/923006579784?text=I%20would%20like%20to%20read%20more%20advisory%20details%20from%20Zaheer%20Seed." 
                  target="_blank"
                  rel="noreferrer"
                  style={{ 
                    fontSize: '12px', 
                    fontWeight: '700', 
                    color: '#059669', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px' 
                  }}>
                  {post.action} <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 10. SERVICES SECTION (01, 02, 03) */}
      <div className="section-card">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            OPERATIONAL SPECIALIZATION
          </span>
          <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#0f172a', marginTop: '4px' }}>
            Seed Breeding, Processing & Dealer Services
          </h2>
        </div>

        <div className="responsive-three-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
          {/* Card 01 - Dark Highlight */}
          <div className="pattern-blueprint hover-lift" style={{ 
            color: '#ffffff', 
            borderRadius: '20px', 
            padding: '34px 26px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: '0 12px 28px rgba(7, 25, 16, 0.25)',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                  <Sprout size={22} />
                </div>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#34d399' }}>01</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>
                Selective Breeding & Seed Multiplication
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Breeding true-to-type certified germplasm for Basmati paddy, high-yielding wheat, and fodder adapted to Kasur's weather cycles.
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '11px', color: '#34d399', fontWeight: '800' }}>• High Genetic Potency</span>
            </div>
          </div>

          {/* Card 02 */}
          <div className="hover-lift" style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '20px', 
            padding: '34px 26px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                  <ShieldCheck size={22} />
                </div>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#94a3b8' }}>02</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                Mechanical Cleaning & Seed Dressing
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                Rotary screens, destoners, and chemical fungicides guarantee pathogen-free seeds with zero weed seed contamination.
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '11px', color: '#059669', fontWeight: '800' }}>• Laboratory Graded</span>
            </div>
          </div>

          {/* Card 03 */}
          <div className="hover-lift" style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '20px', 
            padding: '34px 26px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                  <Smartphone size={22} />
                </div>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#94a3b8' }}>03</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>
                Dealer App & Direct Quota Allocation
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>
                Digital order bookings for registered seed stores, avoiding middlemen and guaranteeing authentic lot receipts.
              </p>
            </div>
            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '11px', color: '#2563eb', fontWeight: '800' }}>• 24h WhatsApp Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* 11. LOCATION & DIRECT HEADQUARTERS BADGE */}
      <div style={{ 
        width: '100%',
        backgroundColor: '#0a2316', 
        borderRadius: '24px', 
        padding: '36px 40px', 
        color: '#ffffff', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '24px',
        marginBottom: '24px',
        border: '1px solid rgba(16, 185, 129, 0.25)',
        boxShadow: '0 15px 35px rgba(10, 35, 22, 0.35)'
      }}>
        <div>
          <span style={{ fontSize: '11px', color: '#6ee7b7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            KASUR HEAD OFFICE & DIRECT DISPATCH
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '4px 0' }}>
            Office No. 12, Shareef Plaza, Steel Bagh Chowk, Kasur, Punjab
          </h3>
          <p style={{ fontSize: '13px', color: '#cbd5e1', margin: 0 }}>
            Processing depot and grower consultation desk open Monday through Saturday (8:00 AM – 8:00 PM)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a 
            href="tel:+923006579784"
            style={{ 
              backgroundColor: '#ffffff', 
              color: '#0a2316', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: '800', 
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
            <Phone size={15} /> Call +92 300 6579784
          </a>
          <a 
            href="https://wa.me/923006579784"
            target="_blank"
            rel="noreferrer"
            style={{ 
              backgroundColor: '#10b981', 
              color: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: '800', 
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
            }}>
            <MessageCircle size={15} /> WhatsApp Breeder Desk
          </a>
        </div>
      </div>

      {/* 12. CORPORATE FOOTER */}
      <footer style={{ 
        width: '100%', 
        borderTop: '1px solid #e2e8f0', 
        padding: '30px 8px 36px 8px', 
        fontSize: '12px', 
        color: '#64748b' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <strong>Zaheer Seed Corporation</strong> • Crop Seed Breeding, Mechanical Processing & Certified Distribution. Kasur, Pakistan.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Steel Bagh Chowk, Kasur</span>
            <span>+92 300 6579784</span>
            <span>Google Rating: 4.0 ★</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
