import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '../config.js';

const SLIDER_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  /* ── Backdrop ─────────────────────────── */
  .iq-backdrop {
    position: fixed;
    inset: 0;
    z-index: 99998;           /* sits above gem modal (9999) */
    background: rgba(8, 7, 6, 0.45);
    backdrop-filter: blur(6px);
    animation: iqFadeIn 0.3s ease both;
  }
  @keyframes iqFadeIn { from { opacity: 0; } to { opacity: 1; } }

  /* ── Panel ────────────────────────────── */
  .iq-panel {
    position: fixed;
    top: 12px;
    right: 12px;
    bottom: 12px;
    z-index: 99999;           /* always on top */
    width: 100%;
    max-width: 440px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 40px 80px rgba(8,7,6,0.35);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* slide animation */
    transform: translateX(calc(100% + 20px));
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .iq-panel.open {
    transform: translateX(0);
  }

  /* ── Header ───────────────────────────── */
  .iq-header {
    flex-shrink: 0;
    padding: 24px 24px 20px;
    border-bottom: 1px solid rgba(107,101,96,0.12);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }
  .iq-header-title {
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 22px;
    font-weight: 300;
    color: #1A1814;
    margin: 0 0 4px;
    line-height: 1.15;
  }
  .iq-header-title em {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-style: italic;
    font-weight: 400;
  }
  .iq-header-sub {
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 12px;
    color: #6B6560;
    margin: 0;
    font-weight: 300;
  }
  .iq-close {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #F4F2EF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    margin-top: 2px;
  }
  .iq-close:hover { background: #E8E4DE; transform: scale(1.08); }

  /* ── Gem tag ──────────────────────────── */
  .iq-gem-tag {
    margin: 0 24px;
    padding: 10px 14px;
    background: rgba(184,150,90,0.09);
    border: 1px solid rgba(184,150,90,0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .iq-gem-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #B8965A;
    flex-shrink: 0;
  }
  .iq-gem-label {
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 12px;
    color: #6B6560;
    font-weight: 300;
  }
  .iq-gem-name {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 14px;
    font-style: italic;
    color: #1A1814;
    font-weight: 400;
  }

  /* ── Scrollable body ──────────────────── */
  .iq-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px 24px 28px;
  }
  .iq-body::-webkit-scrollbar { width: 3px; }
  .iq-body::-webkit-scrollbar-thumb { background: rgba(107,101,96,0.2); border-radius: 2px; }

  /* ── Status banners ───────────────────── */
  .iq-status {
    border-radius: 8px;
    padding: 12px 14px;
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 13px;
    margin-bottom: 18px;
    line-height: 1.55;
    animation: iqSlideDown 0.3s ease both;
  }
  @keyframes iqSlideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
  .iq-status.success {
    background: #F0FBF4;
    border: 1px solid #86EFAC;
    color: #166534;
  }
  .iq-status.error {
    background: #FEF2F2;
    border: 1px solid #FCA5A5;
    color: #991B1B;
  }
  .iq-status-title {
    font-weight: 500;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* ── Form ─────────────────────────────── */
  .iq-form { display: flex; flex-direction: column; gap: 14px; }

  .iq-field-label {
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #6B6560;
    font-weight: 500;
    margin-bottom: 6px;
    display: block;
  }

  .iq-input,
  .iq-textarea {
    width: 100%;
    padding: 11px 14px;
    border: 1px solid rgba(107,101,96,0.20);
    border-radius: 8px;
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 14px;
    color: #1A1814;
    background: #fff;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  .iq-input::placeholder,
  .iq-textarea::placeholder { color: #A8A29E; font-weight: 300; }
  .iq-input:focus,
  .iq-textarea:focus {
    border-color: #B8965A;
    box-shadow: 0 0 0 3px rgba(184,150,90,0.10);
  }
  .iq-input:disabled,
  .iq-textarea:disabled { opacity: 0.55; cursor: not-allowed; }

  .iq-textarea { resize: none; line-height: 1.6; }

  /* ── Submit ───────────────────────────── */
  .iq-submit {
    width: 100%;
    padding: 13px 24px;
    background: #1A1814;
    color: #fff;
    border: none;
    border-radius: 100px;
    font-family: 'Jost', system-ui, sans-serif;
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.25s, transform 0.2s, opacity 0.2s;
    margin-top: 6px;
  }
  .iq-submit:hover:not(:disabled) { background: #2c2924; transform: translateY(-1px); }
  .iq-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

  /* ── Spinner inside button ────────────── */
  .iq-spinner {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1.5px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: iqSpin 0.7s linear infinite;
    margin-right: 8px;
    vertical-align: middle;
  }
  @keyframes iqSpin { to { transform: rotate(360deg); } }

  /* ── Mobile full-width ────────────────── */
  @media (max-width: 480px) {
    .iq-panel { top: 0; right: 0; bottom: 0; border-radius: 0; max-width: 100%; }
  }
`;

function InquirySliderModal({ isOpen, onClose, gemstoneName = '' }) {
    const [mounted, setMounted] = useState(false);   // controls DOM presence
    const [panelOpen, setPanelOpen] = useState(false);   // controls CSS slide class
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    /* ── Sync open state with two-step mount ── */
    useEffect(() => {
        if (isOpen) {
            // 1. mount DOM
            setMounted(true);
            // 2. on next tick trigger slide-in CSS class
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setPanelOpen(true));
            });
            // pre-fill subject/message when a gemstone name is provided
            setFormData({
                name: '',
                email: '',
                subject: gemstoneName ? `Inquiry about ${gemstoneName}` : '',
                message: gemstoneName ? `I am interested in learning more about the ${gemstoneName}.` : '',
            });
            setSubmitStatus(null);
        } else {
            // slide out, then unmount
            setPanelOpen(false);
            const t = setTimeout(() => setMounted(false), 580);
            return () => clearTimeout(t);
        }
    }, [isOpen, gemstoneName]);

    /* ── Body scroll lock ── */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    /* ── EmailJS init ── */
    useEffect(() => {
        if (config?.emailjs?.publicKey) {
            emailjs.init(config.emailjs.publicKey);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (submitStatus) setSubmitStatus(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                config.emailjs.serviceId,
                config.emailjs.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'sk0005i@icloud.com',
                },
                config.emailjs.publicKey
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => { setSubmitStatus(null); onClose(); }, 3000);

        } catch (err) {
            console.error('EmailJS error:', err);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    return (
        <>
            <style>{SLIDER_CSS}</style>

            {/* Backdrop */}
            <div className="iq-backdrop" onClick={onClose} />

            {/* Sliding panel */}
            <div className={`iq-panel${panelOpen ? ' open' : ''}`}>

                {/* Header */}
                <div className="iq-header">
                    <div>
                        <h2 className="iq-header-title">
                            Inquiry <em>Form</em>
                        </h2>
                        <p className="iq-header-sub">We'll respond within two business days</p>
                    </div>
                    <button className="iq-close" onClick={onClose} aria-label="Close inquiry form">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M1 1l11 11M12 1L1 12" stroke="#1A1814" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Gemstone tag (if name provided) */}
                {gemstoneName && (
                    <div className="iq-gem-tag" style={{ marginTop: 16, marginBottom: 4 }}>
                        <div className="iq-gem-dot" />
                        <span className="iq-gem-label">Inquiring about&nbsp;</span>
                        <span className="iq-gem-name">{gemstoneName}</span>
                    </div>
                )}

                {/* Scrollable body */}
                <div className="iq-body">
                    {/* Status banners */}
                    {submitStatus === 'success' && (
                        <div className="iq-status success">
                            <div className="iq-status-title">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7l4 4 6-6" stroke="#166534" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Inquiry sent successfully
                            </div>
                            Your message has been sent to Blue Hues. We will be in touch within two business days.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="iq-status error">
                            <div className="iq-status-title">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M7 4v4M7 10h.01" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                Something went wrong
                            </div>
                            Please try again, or contact us directly by email.
                        </div>
                    )}

                    {/* Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="iq-form">
                        <div>
                            <label className="iq-field-label" htmlFor="iq-name">Full name</label>
                            <input
                                id="iq-name"
                                className="iq-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="iq-field-label" htmlFor="iq-email">Email address</label>
                            <input
                                id="iq-email"
                                className="iq-input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="iq-field-label" htmlFor="iq-subject">Subject</label>
                            <input
                                id="iq-subject"
                                className="iq-input"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What are you inquiring about?"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label className="iq-field-label" htmlFor="iq-message">Message</label>
                            <textarea
                                id="iq-message"
                                className="iq-textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us more about what you're looking for…"
                                rows={5}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <button
                            type="submit"
                            className="iq-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting && <span className="iq-spinner" />}
                            {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InquirySliderModal;