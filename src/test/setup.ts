
import '@testing-library/jest-dom';

// Mock window.matchMedia
window.matchMedia = ((query: string) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: function() {},
    removeListener: function() {},
    addEventListener: function() {},
    removeEventListener: function() {},
    dispatchEvent: function() { return true; },
  };
}) as unknown as (query: string) => MediaQueryList;

// Mock IntersectionObserver
class MockIntersectionObserver implements Partial<IntersectionObserver> {
  constructor(callback: IntersectionObserverCallback) {}
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
  root = null;
  rootMargin = '';
  thresholds = [];
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
