/**
 * PDF Viewer Component
 * Displays an editable PDF with action buttons
 * Uses iframe with browser's native PDF viewer for form field editing
 */

'use client';

import React, { useRef } from 'react';
import { Button } from './Button';

export interface PDFViewerProps {
  pdfUrl: string;
  onSaveDraft: () => void;
  onApprove: () => void;
}

export function PDFViewer({ pdfUrl, onSaveDraft, onApprove }: PDFViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="flex flex-col h-full p-4">
      {/* PDF Viewer - Using iframe for native browser editing support */}
      <div className="flex-1 overflow-hidden mb-4 bg-gray-100 rounded">
        <iframe
          ref={iframeRef}
          src={pdfUrl}
          className="w-full h-full border-none"
          title="Response Form PDF"
          style={{ minHeight: '70vh' }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-4 border-t border-primary-dark/10 flex-shrink-0">
        <Button
          variant="secondary"
          size="large"
          onClick={onSaveDraft}
        >
          Save as draft
        </Button>
        <Button
          size="large"
          onClick={onApprove}
        >
          Approve
        </Button>
      </div>
    </div>
  );
}
