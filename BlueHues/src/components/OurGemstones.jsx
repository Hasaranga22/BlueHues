import React, { useEffect, useRef, useState } from 'react';
import { gemstonesList } from '../components/Gemstone ';
import InquirySliderModal from './InquirySliderModal';

/* ─────────────────────────────────────────────
   GLOBAL STYLES  (injected once via <style>)
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

  :root {
    --gem-serif:  'Cormorant Garamond', Georgia, serif;
    --gem-sans:   'Jost', system-ui, sans-serif;
    --gem-cream:  #F9F7F4;
    --gem-stone:  #1A1814;
    --gem-mid:    #6B6560;
    --gem-border: rgba(107,101,96,0.15);
    --gem-gold:   #B8965A;
    --gem-gold-bg: rgba(184,150,90,0.10);
    --ease-expo:  cubic-bezier(0.16, 1, 0.3, 1);
    --card-r:     14px;
    --modal-r:    20px;
  }

  /* scrollbar */
  .gem-scroll::-webkit-scrollbar { width: 4px; }
  .gem-scroll::-webkit-scrollbar-track { background: transparent; }
  .gem-scroll::-webkit-scrollbar-thumb { background: var(--gem-border); border-radius: 2px; }

  /* ── SECTION ────────────────────────────── */
  .gem-section {
    padding: 96px 24px 112px;
    background: var(--gem-cream);
  }
  .gem-inner { max-width: 1280px; margin: 0 auto; }

  /* ── HEADER ─────────────────────────────── */
  .gem-header {
    text-align: center;
    margin-bottom: 64px;
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.9s var(--ease-expo), transform 0.9s var(--ease-expo);
  }
  .gem-header.in { opacity: 1; transform: translateY(0); }
  .gem-eyebrow {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gem-gold);
    margin: 0 0 16px;
  }
  .gem-title {
    font-family: var(--gem-serif);
    font-size: clamp(42px, 6vw, 70px);
    font-weight: 300;
    color: var(--gem-stone);
    line-height: 1.05;
    margin: 0 0 22px;
  }
  .gem-title em { font-style: italic; }
  .gem-rule {
    width: 36px;
    height: 1px;
    background: var(--gem-gold);
    margin: 0 auto 20px;
  }
  .gem-subtitle {
    font-family: var(--gem-sans);
    font-size: 15px;
    font-weight: 300;
    color: var(--gem-mid);
    line-height: 1.7;
    max-width: 460px;
    margin: 0 auto;
  }

  /* ── GRID ───────────────────────────────── */
  .gem-grid {
    display: grid;
    gap: 22px;
    grid-template-columns: 1fr;
  }
  @media (min-width: 480px)  { .gem-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 860px)  { .gem-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1180px) { .gem-grid { grid-template-columns: repeat(4, 1fr); } }

  /* ── CARD ───────────────────────────────── */
  .gem-card {
    background: #fff;
    border-radius: var(--card-r);
    border: 1px solid var(--gem-border);
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 0.55s var(--ease-expo),
      transform 0.55s var(--ease-expo),
      box-shadow 0.4s var(--ease-expo),
      border-color 0.3s;
  }
  .gem-card.in { opacity: 1; transform: translateY(0); }
  .gem-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 52px rgba(26,24,20,0.11);
    border-color: rgba(184,150,90,0.5);
  }
  .gem-card:focus-visible {
    outline: 2px solid var(--gem-gold);
    outline-offset: 3px;
  }

  /* card image */
  .gem-card-img {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    background: #ede9e3;
  }
  .gem-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s var(--ease-expo);
  }
  .gem-card:hover .gem-card-img img { transform: scale(1.07); }
  .gem-card-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(26,24,20,0.52) 0%, transparent 55%);
    opacity: 0;
    transition: opacity 0.4s;
    display: flex;
    align-items: flex-end;
    padding: 18px;
  }
  .gem-card:hover .gem-card-img-overlay { opacity: 1; }
  .gem-pill {
    font-family: var(--gem-sans);
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.45);
    border-radius: 100px;
    padding: 6px 16px;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(6px);
  }

  /* card body */
  .gem-card-body { padding: 18px 20px 20px; }
  .gem-card-name {
    font-family: var(--gem-serif);
    font-size: 21px;
    font-weight: 400;
    color: var(--gem-stone);
    margin: 0 0 7px;
    line-height: 1.15;
  }
  .gem-card-desc {
    font-family: var(--gem-sans);
    font-size: 13px;
    color: var(--gem-mid);
    line-height: 1.65;
    margin: 0;
    /* clamp to 2 lines */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .gem-card-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding-top: 14px;
    border-top: 1px solid var(--gem-border);
  }
  .gem-card-origin {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gem-mid);
  }
  .gem-arrow-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--gem-border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.25s, border-color 0.25s;
  }
  .gem-card:hover .gem-arrow-btn {
    background: var(--gem-stone);
    border-color: var(--gem-stone);
  }
  .gem-arrow-btn svg { transition: stroke 0.25s; }
  .gem-card:hover .gem-arrow-btn svg { stroke: #fff !important; }

  /* ── OVERLAY ────────────────────────────── */
  .gem-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(8, 7, 6, 0.84);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    animation: ovIn 0.3s var(--ease-expo) both;
  }
  @keyframes ovIn { from { opacity: 0; } to { opacity: 1; } }

  /* ── MODAL ──────────────────────────────── */
  .gem-modal {
    position: relative;
    background: #fff;
    border-radius: var(--modal-r);
    width: 100%;
    max-width: 960px;
    max-height: 92vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: mdIn 0.45s var(--ease-expo) both;
    box-shadow: 0 48px 96px rgba(8,7,6,0.50);
  }
  @keyframes mdIn {
    from { opacity: 0; transform: scale(0.93) translateY(24px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* ── MODAL VIDEO ZONE ───────────────────── */
  .gem-vid-zone {
    position: relative;
    flex-shrink: 0;
    height: 340px;
    background: #0d0c0a;
    overflow: hidden;
  }
  @media (min-width: 600px) { .gem-vid-zone { height: 400px; } }

  .gem-vid-grid {
    display: grid;
    height: 100%;
    width: 100%;
  }
  .gem-vid-grid.single { grid-template-columns: 1fr; }
  .gem-vid-grid.dual   { grid-template-columns: 1fr 1fr; }

  /* thin divider between dual videos */
  .gem-vid-sep {
    position: absolute;
    top: 0; bottom: 0;
    left: 50%;
    width: 1px;
    background: rgba(255,255,255,0.07);
    z-index: 10;
    pointer-events: none;
  }

  .gem-vid-panel {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gem-vid-panel video {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gem-vid-glow {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }
  .gem-vid-fade {
    position: absolute;
    inset: 0;
    z-index: 3;
    background: linear-gradient(to bottom, transparent 28%, rgba(8,7,6,0.55) 100%);
    pointer-events: none;
  }

  /* view labels (dual) */
  .gem-view-label {
    position: absolute;
    bottom: 14px;
    z-index: 20;
    font-family: var(--gem-sans);
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.42);
    pointer-events: none;
  }

  /* name bar */
  .gem-namebar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    z-index: 15;
    padding: 18px 26px 22px;
    background: linear-gradient(to top, rgba(8,7,6,0.78) 0%, transparent 100%);
    pointer-events: none;
  }
  .gem-namebar-eye {
    font-family: var(--gem-sans);
    font-size: 9px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gem-gold);
    margin-bottom: 4px;
  }
  .gem-namebar-title {
    font-family: var(--gem-serif);
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 300;
    font-style: italic;
    color: #fff;
    margin: 0;
    line-height: 1.1;
    text-shadow: 0 2px 14px rgba(0,0,0,0.35);
  }

  /* close button */
  .gem-close {
    position: absolute;
    top: 14px; right: 14px;
    z-index: 50;
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(8,7,6,0.52);
    border: 1px solid rgba(255,255,255,0.16);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .gem-close:hover { background: rgba(8,7,6,0.88); transform: scale(1.08); }

  /* ── MODAL BODY ─────────────────────────── */
  .gem-body {
    flex: 1;
    overflow-y: auto;
    padding: 28px 26px 36px;
  }
  @media (min-width: 600px) { .gem-body { padding: 32px 36px 44px; } }

  .gem-body-grid {
    display: grid;
    gap: 32px;
  }
  @media (min-width: 580px) { .gem-body-grid { grid-template-columns: 1fr 1fr; gap: 44px; } }

  /* ── LEFT COLUMN ────────────────────────── */
  .gem-meas-label {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--gem-mid);
    margin: 0 0 8px;
    font-weight: 500;
  }
  .gem-meas-val {
    font-family: var(--gem-serif);
    font-size: 42px;
    font-weight: 300;
    color: var(--gem-stone);
    line-height: 1;
    margin: 0;
  }
  .gem-rule-sm {
    height: 1px;
    background: var(--gem-border);
    margin: 22px 0;
  }
  .gem-about-label {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--gem-mid);
    margin: 0 0 10px;
    font-weight: 500;
  }
  .gem-about-text {
    font-family: var(--gem-sans);
    font-size: 14px;
    color: #4a4642;
    line-height: 1.78;
    margin: 0;
  }

  /* certificate */
  .gem-cert {
    margin-top: 22px;
    border: 1px solid var(--gem-border);
    border-radius: 10px;
    overflow: hidden;
  }
  .gem-cert-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 15px;
    background: var(--gem-gold-bg);
    border-bottom: 1px solid var(--gem-border);
  }
  .gem-cert-badge {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: var(--gem-gold);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .gem-cert-name {
    font-family: var(--gem-sans);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gem-stone);
  }
  .gem-cert-img { padding: 12px 15px; }
  .gem-cert-img img {
    width: 100%;
    height: auto;
    max-height: 170px;
    object-fit: contain;
    border-radius: 6px;
    border: 1px solid var(--gem-border);
    display: block;
  }
  .gem-cert-link {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0 15px 14px;
    padding: 8px 14px;
    background: #fff;
    border: 1px solid var(--gem-border);
    border-radius: 7px;
    font-family: var(--gem-sans);
    font-size: 12px;
    color: var(--gem-stone);
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
    font-weight: 400;
  }
  .gem-cert-link:hover { background: var(--gem-cream); border-color: var(--gem-gold); }

  /* ── RIGHT COLUMN ───────────────────────── */
  .gem-specs-head {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    color: var(--gem-mid);
    margin: 0 0 18px;
    font-weight: 500;
  }
  .gem-specs {
    display: flex;
    flex-direction: column;
  }
  .gem-spec-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    padding: 13px 0;
    border-bottom: 1px solid var(--gem-border);
  }
  .gem-spec-row:first-child { padding-top: 0; }
  .gem-spec-row:last-child { border-bottom: none; padding-bottom: 0; }
  .gem-spec-k {
    font-family: var(--gem-sans);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gem-mid);
    min-width: 84px;
    flex-shrink: 0;
    font-weight: 500;
  }
  .gem-spec-v {
    font-family: var(--gem-sans);
    font-size: 14px;
    color: var(--gem-stone);
    line-height: 1.45;
  }

  /* CTA */
  .gem-cta-wrap { margin-top: 28px; }
  .gem-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 30px;
    background: var(--gem-stone);
    color: #fff;
    border: none;
    border-radius: 100px;
    font-family: var(--gem-sans);
    font-size: 11px;
    letter-spacing: 0.20em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s;
    white-space: nowrap;
  }
  .gem-cta:hover { background: #2c2924; transform: translateY(-2px); }
  .gem-cta-note {
    font-family: var(--gem-sans);
    font-size: 11px;
    color: var(--gem-mid);
    margin-top: 10px;
  }

  /* ── RESPONSIVE: stack on mobile ───────── */
  @media (max-width: 499px) {
    .gem-vid-grid.dual {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .gem-vid-sep { top: 50%; left: 0; right: 0; bottom: auto; width: 100%; height: 1px; }
    .gem-vid-zone { height: 460px; }
    .gem-view-label { display: none; }
  }
`;

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function getGlowColor(name = '') {
    const n = name.toLowerCase();
    if (n.includes('rhodolite') || n.includes('garnet')) return ['#f472b6', '#be185d'];
    if (n.includes('ruby'))      return ['#f87171', '#991b1b'];
    if (n.includes('sapphire'))  return ['#60a5fa', '#1e3a8a'];
    if (n.includes('emerald'))   return ['#34d399', '#064e3b'];
    if (n.includes('amethyst'))  return ['#c084fc', '#581c87'];
    if (n.includes('topaz'))     return ['#fbbf24', '#78350f'];
    if (n.includes('aqua'))      return ['#22d3ee', '#0e7490'];
    return ['#a78bfa', '#3730a3'];
}

function formatMeasurement(m = '') {
    const parts = m.match(/([0-9.\s×x]+)(.*)/);
    if (parts)
        return <>{parts[1].trim()}<sup style={{ fontSize: '0.52em', letterSpacing: 0, marginLeft: 1 }}>{parts[2].trim()}</sup></>;
    return m;
}

/* ─────────────────────────────────────────────
   VideoPanel
───────────────────────────────────────────── */
function VideoPanel({ src, gemName, isImage = false }) {
    const [c1, c2] = getGlowColor(gemName);
    return (
        <div className="gem-vid-panel">
            <div
                className="gem-vid-glow"
                style={{ background: `radial-gradient(ellipse at 50% 65%, ${c1}50 0%, ${c2}1a 55%, transparent 80%)` }}
            />
            {isImage ? (
                <img
                    src={src}
                    alt={`${gemName} — natural Sri Lankan gemstone`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative',
                        zIndex: 2
                    }}
                />
            ) : (
                <video autoPlay loop muted playsInline>
                    <source src={src} type="video/mp4" />
                </video>
            )}
            <div className="gem-vid-fade" />
        </div>
    );
}

/* ─────────────────────────────────────────────
   GemstoneModal
───────────────────────────────────────────── */
function GemstoneModal({ gemstone, isOpen, onClose }) {
    const [contactOpen, setContactOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const fn = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, [onClose]);

    if (!isOpen || !gemstone) return null;

    const dual    = Boolean(gemstone.video2);
    const hasCert = Boolean(gemstone.clarity?.toLowerCase().includes('certified') || gemstone.clarity?.toLowerCase().includes('ggtl'));
    
    // Check if gemstone should show image instead of video
    const isImageGem = [22, 23, 24, 25, 26].includes(gemstone.id);

    // build spec rows (only defined values)
    const specs = [
        { k: 'Origin',    v: gemstone.origin },
        { k: 'Color',     v: gemstone.color },
        { k: 'Treatment', v: gemstone.treatment },
        !hasCert && gemstone.clarity ? { k: 'Clarity', v: gemstone.clarity } : null,
        gemstone.carat ? { k: 'Carat',   v: gemstone.carat } : null,
        gemstone.shape ? { k: 'Shape',   v: gemstone.shape } : null,
    ].filter(Boolean);

    return (
        <>
            <div className="gem-overlay" onClick={onClose}>
                <div className="gem-modal" onClick={(e) => e.stopPropagation()}>

                    {/* ── Video zone ── */}
                    <div className="gem-vid-zone">
                        <div className={`gem-vid-grid ${dual ? 'dual' : 'single'}`}>
                            <VideoPanel 
                                src={isImageGem ? `/images/BlueHuesGemsCollection/${gemstone.image}` : `/videos/${gemstone.video}`} 
                                gemName={gemstone.name} 
                                isImage={isImageGem}
                            />
                            {dual && <VideoPanel 
                                src={isImageGem ? `/images/BlueHuesGemsCollection/${gemstone.image}` : `/videos/${gemstone.video2}`} 
                                gemName={gemstone.name} 
                                isImage={isImageGem}
                            />}
                        </div>

                        {dual && (
                            <div className="gem-vid-sep" />
                        )}

                        {/* name bar */}
                        <div className="gem-namebar">
                            <p className="gem-namebar-eye">Natural Gemstone · Sri Lanka</p>
                            <h2 className="gem-namebar-title">{gemstone.name}</h2>
                        </div>

                        {/* close */}
                        <button className="gem-close" onClick={onClose} aria-label="Close modal">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path d="M1 1l11 11M12 1L1 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* ── Body ── */}
                    <div className="gem-body gem-scroll">
                        <div className="gem-body-grid">

                            {/* LEFT */}
                            <div>
                                <p className="gem-meas-label">Measurement</p>
                                <p className="gem-meas-val">{formatMeasurement(gemstone.measurement)}</p>

                                <div className="gem-rule-sm" />

                                <p className="gem-about-label">About this stone</p>
                                <p className="gem-about-text">{gemstone.description}</p>

                                {hasCert && (
                                    <div className="gem-cert">
                                        <div className="gem-cert-head">
                                            <div className="gem-cert-badge">
                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                    <path d="M1.5 5.5l3 3 5-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="gem-cert-name">{gemstone.clarity}</span>
                                        </div>
                                        <div className="gem-cert-img">
                                            <img src={`/images/certificate/stone${gemstone.id}-certificate.png`} alt="Certificate" />
                                        </div>
                                        <button
                                            className="gem-cert-link"
                                            onClick={() => window.open(`/images/certificate/stone${gemstone.id}-certificate.png`, '_blank')}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M1 8.5v2h10v-2M6 1v7M3.5 5.5L6 8l2.5-2.5"
                                                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            View full certificate
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                                <div>
                                    <p className="gem-specs-head">Specifications</p>
                                    <div className="gem-specs">
                                        {specs.map(({ k, v }) => (
                                            <div className="gem-spec-row" key={k}>
                                                <span className="gem-spec-k">{k}</span>
                                                <span className="gem-spec-v">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="gem-cta-wrap">
                                    <button className="gem-cta" onClick={() => setContactOpen(true)}>
                                        Inquire About This Gemstone
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                            <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <p className="gem-cta-note">We respond within 24 hours</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <InquirySliderModal
                isOpen={contactOpen}
                onClose={() => setContactOpen(false)}
                gemstoneName={gemstone.name}
            />
        </>
    );
}

/* ─────────────────────────────────────────────
   GemstoneCard
───────────────────────────────────────────── */
function GemstoneCard({ gemstone, index, onCardClick }) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    // clamp description to ~14 words for card preview
    const preview = (() => {
        if (!gemstone.description) return '';
        const words = gemstone.description.split(' ');
        return words.length > 14
            ? words.slice(0, 14).join(' ') + '…'
            : gemstone.description;
    })();

    return (
        <div
            ref={ref}
            className={`gem-card${visible ? ' in' : ''}`}
            style={{ transitionDelay: `${Math.min(index * 55, 330)}ms` }}
            onClick={() => onCardClick(gemstone)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onCardClick(gemstone)}
            aria-label={`View details for ${gemstone.name}`}
        >
            <div className="gem-card-img">
                <img
                    src={`/images/BlueHuesGemsCollection/${gemstone.image}`}
                    alt={`${gemstone.name} — natural Sri Lankan gemstone`}
                    loading="lazy"
                />
                <div className="gem-card-img-overlay">
                    <span className="gem-pill">View Details</span>
                </div>
            </div>

            <div className="gem-card-body">
                <h3 className="gem-card-name">{gemstone.name}</h3>
                <p className="gem-card-desc">{preview}</p>
                <div className="gem-card-foot">
                    <span className="gem-card-origin">{gemstone.origin || 'Sri Lanka'}</span>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   OurGemstones  — main export
───────────────────────────────────────────── */
function OurGemstones() {
    const [headerIn, setHeaderIn] = useState(false);
    const [selected, setSelected] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const hRef = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setHeaderIn(true); },
            { threshold: 0.15 }
        );
        if (hRef.current) obs.observe(hRef.current);
        return () => obs.disconnect();
    }, []);

    const openModal  = (gem) => { setSelected(gem); setModalOpen(true); };
    const closeModal = ()    => {
        setModalOpen(false);
        setTimeout(() => setSelected(null), 500);
    };

    return (
        <>
            <style>{GLOBAL_CSS}</style>

            <section id="gemstones" className="gem-section">
                <div className="gem-inner">

                    {/* header */}
                    <div ref={hRef} className={`gem-header${headerIn ? ' in' : ''}`}>
                        <p className="gem-eyebrow">Ethically Sourced · Ceylon Heritage</p>
                        <h2 className="gem-title">
                            Our <em>Gemstone</em><br />Collection
                        </h2>
                        <div className="gem-rule" />
                        <p className="gem-subtitle">
                            Each stone is hand-selected from the gem-rich mines of Sri Lanka —
                            natural, responsibly sourced, and certified where applicable.
                        </p>
                    </div>

                    {/* cards */}
                    <div className="gem-grid">
                        {gemstonesList.map((gem, i) => (
                            <GemstoneCard
                                key={gem.id}
                                gemstone={gem}
                                index={i}
                                onCardClick={openModal}
                            />
                        ))}
                    </div>

                </div>
            </section>

            <GemstoneModal
                gemstone={selected}
                isOpen={modalOpen}
                onClose={closeModal}
            />
        </>
    );
}

export default OurGemstones;