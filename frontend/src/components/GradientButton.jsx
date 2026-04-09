import React from 'react';
import { motion } from 'framer-motion';

/**
 * GradientButton
 * Premium CTA button with animated gradient, hover glow, press scale, loading state.
 *
 * Props:
 *   onClick, disabled, loading, children, variant ('primary'|'secondary'|'ghost'), size ('sm'|'md'|'lg'), className, style
 */
export default function GradientButton({
  onClick,
  disabled = false,
  loading = false,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
  type = 'button',
  as: Tag = 'button',
}) {
  const sizeMap = {
    sm: { padding: '0.4rem 0.875rem', fontSize: '0.8rem' },
    md: { padding: '0.625rem 1.25rem', fontSize: '0.9rem' },
    lg: { padding: '0.875rem 1.75rem', fontSize: '1rem', borderRadius: '16px' },
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: '10px',
    fontFamily: 'inherit',
    fontWeight: 600,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    border: 'none',
    outline: 'none',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    ...sizeMap[size],
    ...(variant === 'primary' && {
      background: 'linear-gradient(135deg, #1a6ff5, #2563eb)',
      color: '#fff',
      boxShadow: '0 0 20px rgba(26,111,245,0.4)',
    }),
    ...(variant === 'secondary' && {
      background: 'var(--bg-elevated)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
    }),
    ...(variant === 'ghost' && {
      background: 'transparent',
      color: 'var(--accent-bright)',
      border: '1px solid transparent',
    }),
    ...(disabled || loading ? { opacity: 0.55 } : {}),
    ...style,
  };

  return (
    <motion.button
      type={type}
      onClick={!disabled && !loading ? onClick : undefined}
      style={baseStyle}
      className={className}
      whileHover={!disabled && !loading ? {
        y: -2,
        boxShadow: variant === 'primary'
          ? '0 0 35px rgba(26,111,245,0.65)'
          : '0 6px 20px rgba(0,0,0,0.3)',
        ...(variant === 'primary' && {
          background: 'linear-gradient(135deg, #2979ff, #1a6ff5)',
        }),
      } : {}}
      whileTap={!disabled && !loading ? { scale: 0.96 } : {}}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
    >
      {/* Shimmer overlay on hover for primary */}
      {variant === 'primary' && (
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
          initial={{ backgroundPosition: '-200% center' }}
          whileHover={{ backgroundPosition: '200% center' }}
          transition={{ duration: 0.6 }}
        />
      )}

      {loading ? (
        <>
          <motion.div
            style={{
              width: 14, height: 14, border: '2px solid rgba(255,255,255,0.35)',
              borderTop: '2px solid white', borderRadius: '50%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          <span style={{ position: 'relative' }}>Processing…</span>
        </>
      ) : (
        <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          {children}
        </span>
      )}
    </motion.button>
  );
}
