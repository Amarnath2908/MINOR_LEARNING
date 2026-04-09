import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../lib/animations';
import { Brain, Sparkles, BarChart2, Lightbulb, CheckCircle } from 'lucide-react';

const STEPS = [
  { icon: Brain,       text: 'Analyzing your learning patterns…'    },
  { icon: BarChart2,   text: 'Evaluating academic engagement…'       },
  { icon: Sparkles,    text: 'Running prediction models…'            },
  { icon: Lightbulb,  text: 'Generating personalized insights…'     },
  { icon: CheckCircle, text: 'Preparing your report…'                },
];

// ── Shimmer skeleton block ─────────────────────────────────────
function ShimmerBlock({ height = 80, style = {} }) {
  return (
    <motion.div
      style={{
        height,
        borderRadius: 12,
        background: 'linear-gradient(90deg, #0a1628 25%, #112347 50%, #0a1628 75%)',
        backgroundSize: '200% auto',
        ...style,
      }}
      animate={{ backgroundPosition: ['0% center', '200% center'] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export default function LoadingAnalysisScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'flex-start', padding: '3rem 1rem', maxWidth: 700, margin: '0 auto',
      }}
    >
      {/* Pulsing icon */}
      <motion.div
        style={{
          width: 80, height: 80, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(26,111,245,0.2), rgba(124,58,237,0.2))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1.5rem',
          border: '1px solid rgba(26,111,245,0.3)',
          boxShadow: '0 0 0 0 rgba(26,111,245,0.4)',
        }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(26,111,245,0.4)',
            '0 0 0 18px rgba(26,111,245,0)',
            '0 0 0 0 rgba(26,111,245,0)',
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Brain size={36} style={{ color: 'var(--accent-bright)' }} />
      </motion.div>

      <div className="section-label" style={{ marginBottom: '0.5rem' }}>AI Analysis in Progress</div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>
        Generating Your Learning Report
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center' }}>
        Our models are analysing 15 behavioural indicators to predict your learning outcome.
      </p>

      {/* Staggered status steps */}
      <motion.div
        style={{ width: '100%', marginBottom: '2rem' }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={i}
              variants={staggerItem}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                padding: '0.75rem 1rem', borderRadius: 10, marginBottom: '0.5rem',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <motion.div
                style={{
                  width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--primary-mid)',
                }}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Icon size={16} style={{ color: 'var(--accent-bright)' }} />
              </motion.div>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {step.text}
              </span>
              {/* Animated dots */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                {[0, 1, 2].map(d => (
                  <motion.div
                    key={d}
                    style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent-bright)', opacity: 0.6 }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 1, delay: i * 0.15 + d * 0.2, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Shimmer skeleton cards */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {[...Array(4)].map((_, i) => <ShimmerBlock key={i} height={76} />)}
        </div>
        <ShimmerBlock height={120} />
        <ShimmerBlock height={200} />
      </div>
    </motion.div>
  );
}
