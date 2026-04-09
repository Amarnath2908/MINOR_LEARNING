// DARK BLUE THEME — EduPredict v2.0
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, LineChart, ShieldCheck, Sparkles,
  ArrowRight, CheckCircle, BarChart2, Target, Zap
} from 'lucide-react';
import { AuthContext } from '../App';

const features = [
  {
    icon: BrainCircuit,
    color: '#60a5fa',
    bg: 'rgba(26,111,245,0.12)',
    title: 'AI-Powered Prediction',
    desc: 'Our ensemble ML model (Random Forest + XGBoost) analyzes 15 behavioral metrics to predict your exact learning outcome with high accuracy.',
  },
  {
    icon: BarChart2,
    color: '#60a5fa',
    bg: 'rgba(96,165,250,0.1)',
    title: 'Analytical Dashboard',
    desc: 'Visualize your learning profile with radar charts, bar graphs, gauges, and performance tables — all in one rich analytics report.',
  },
  {
    icon: ShieldCheck,
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)',
    title: 'Risk Assessment',
    desc: 'Identify high-risk behavioral patterns before they impact your grades — procrastination, attendance gaps, and assignment backlogs detected early.',
  },
  {
    icon: Sparkles,
    color: '#c4b5fd',
    bg: 'rgba(124,58,237,0.12)',
    title: 'Personalized AI Recommendations',
    desc: 'Get structured, actionable improvement plans categorized by priority — from a 7-day action plan to 30-day expected improvements.',
  },
  {
    icon: LineChart,
    color: '#fcd34d',
    bg: 'rgba(245,158,11,0.12)',
    title: 'Progress Tracking',
    desc: 'Track your learning health score, risk level, and key metrics over time with a searchable, filterable analysis history.',
  },
  {
    icon: Target,
    color: '#fca5a5',
    bg: 'rgba(239,68,68,0.12)',
    title: 'Goal Benchmarking',
    desc: 'Compare your metrics against ideal academic targets and see precisely where you stand in a clear performance vs. target visualization.',
  },
];

const stats = [
  { value: '15',   label: 'Behavioral Metrics Analyzed' },
  { value: '95%+', label: 'Prediction Accuracy' },
  { value: '11',   label: 'Recommendation Categories' },
  { value: '7',    label: 'Analytics Chart Types' },
];

const benefits = [
  'Multi-step structured input form',
  'Learning Health Score (0–100)',
  'Feature importance explanation',
  'Exportable PDF report',
  'Secure per-user history',
  'Mobile-responsive design',
];

export default function LandingPage() {
  const { user } = useContext(AuthContext);
  return (
    <div className="animate-fade-in">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="landing-hero" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #0d2158 0%, #030b1a 70%)' }}>
        {/* Floating orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="landing-eyebrow">
          <Sparkles size={13} />
          EduPredict v2.0
        </div>

        <h1>
          Predict Your Learning Outcome with{' '}
          <span className="text-gradient">AI-Powered Analytics</span>
        </h1>

        <p>
          EduPredict analyzes your study habits, digital engagement, and
          behavioral patterns to build a complete academic health profile —
          then gives you a personalized roadmap to improve.
        </p>

        <div className="hero-cta-group">
          {user ? (
            <Link to="/dashboard" className="btn btn-primary btn-lg glow-pulse">
              Go to Dashboard <ArrowRight size={18} />
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary btn-lg glow-pulse">
                Start Your Free Assessment <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="btn btn-secondary btn-lg"
              >
                Sign In to Dashboard
              </Link>
            </>
          )}
        </div>

        {/* Stats Band */}
        <div className="stats-band animate-fade-in-delay-1">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="stat-item-value">{s.value}</div>
              <div className="stat-item-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Features ──────────────────────────────────────────── */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>Platform Capabilities</div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Everything you need to understand your learning
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', fontSize: '0.95rem' }}>
            A complete student analytics platform built for academic insight — not just a prediction tool.
          </p>
        </div>

        <div className="features-grid animate-fade-in-delay-2">
          {features.map((f, i) => (
            <div key={i} className="feature-card card-hover">
              <div className="feature-icon" style={{ background: f.bg }}>
                <f.icon size={22} style={{ color: f.color }} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Benefits Strip ────────────────────────────────────── */}
      <div
        className="animate-fade-in-delay-3"
        style={{
          background: 'linear-gradient(135deg, #0d2158 0%, #1a0b3d 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.5rem',
          marginBottom: '4rem',
          color: 'white',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 0 60px rgba(26,111,245,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.7)', marginBottom: '0.75rem' }}>
            Why EduPredict?
          </div>
          <h2 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '1rem', fontFamily: "'Space Grotesk', sans-serif" }}>
            Built for real academic impact
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontSize: '0.9rem' }}>
            Unlike generic study apps, EduPredict uses a trained machine learning model
            on 10,000+ student records to give you statistically grounded predictions
            and recommendations that actually change outcomes.
          </p>
          <Link to="/register" className="btn btn-lg" style={{ marginTop: '1.75rem', background: 'var(--accent-bright)', color: '#030b1a', fontWeight: 700 }}>
            Try It Now — It's Free <ArrowRight size={18} />
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', position: 'relative', zIndex: 1 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle size={18} style={{ color: '#6ee7b7', flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', padding: '2rem 0 1rem', borderTop: '1px solid var(--border-subtle)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          EduPredict · Student Learning Behavior Analysis System
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.5rem' }}>
          Built with React · Flask · scikit-learn · Recharts · Lucide React
        </p>
      </div>
    </div>
  );
}
