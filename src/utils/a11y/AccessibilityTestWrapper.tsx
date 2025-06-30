'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import * as axe from 'axe-core';

interface AccessibilityTestWrapperProps {
  children: React.ReactNode;
  runOnMount?: boolean;
}

export function AccessibilityTestWrapper({
  children,
  runOnMount = true,
}: AccessibilityTestWrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (runOnMount && typeof window !== 'undefined') {
      // Small delay to ensure the page is fully rendered
      const timer = setTimeout(() => {
        axe.run(document.body, (err, results) => {
          if (err) {
            console.error('A11y test failed:', err);
            return;
          }

          if (results.violations.length > 0) {
            console.group(
              `%cAccessibility Issues (${pathname || 'unknown'})`,
              'color: #e53e3e; font-weight: bold',
            );
            results.violations.forEach((violation) => {
              console.groupCollapsed(
                `%c${violation.impact?.toUpperCase()}: ${violation.help}`,
                'color: #e53e3e;',
              );
              console.log('Description:', violation.description);
              console.log('Help URL:', violation.helpUrl);
              console.log('Affected Nodes:', violation.nodes.length);
              violation.nodes.forEach((node, index) => {
                console.groupCollapsed(`Issue ${index + 1}:`, node.failureSummary);
                console.log('HTML:', node.html);
                console.log('Target:', node.target);
                console.groupEnd();
              });
              console.groupEnd();
            });
            console.groupEnd();
          } else {
            console.log(
              '%cNo accessibility violations detected!',
              'color: #38a169; font-weight: bold',
            );
          }
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [pathname, runOnMount]);

  return <>{children}</>;
}

// Utility function to manually trigger accessibility test
export function runAccessibilityTest(container: HTMLElement = document.body) {
  return new Promise<axe.AxeResults>((resolve, reject) => {
    axe.run(container, (err, results) => {
      if (err) return reject(err);
      if (results) {
        resolve(results);
      } else {
        reject(new Error('No results from axe.run()'));
      }
    });
  });
}
