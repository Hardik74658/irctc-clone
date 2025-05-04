
// This file contains generic icons used across the application
import React from "react";

export const PersonaIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="4" fill="currentColor" />
    <path 
      d="M5.5 21C5.5 17.134 8.35786 14 12 14C15.6421 14 18.5 17.134 18.5 21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

export function TrainIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 17c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4z" />
      <path d="M10 17v4" />
      <path d="M14 17v4" />
      <path d="M4 9h16" />
      <path d="M4 13h16" />
      <path d="M20 5l-4 8" />
      <path d="M8 5L4 13" />
    </svg>
  );
}

export function HelpCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
}

export function MessageCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function Train({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="3" width="16" height="16" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="M8 19l-2 3" />
      <path d="M16 19l2 3" />
      <circle cx="8" cy="15" r="1" />
      <circle cx="16" cy="15" r="1" />
    </svg>
  );
}
