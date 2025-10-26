/**
 * File Upload Component
 * Drag-and-drop file upload following DESIGN_GUIDE.md specifications
 */

'use client';

import React, { useState, useRef } from 'react';

export interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
}

export function FileUpload({ onFileSelect, accept = '.pdf' }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className="border-4 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200"
        style={{
          borderColor: isDragging ? 'var(--primary-bubble-text)' : 'rgba(42, 46, 48, 0.3)',
          backgroundColor: isDragging ? 'rgba(212, 237, 244, 0.3)' : 'transparent'
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4">
          {selectedFile ? (
            <>
              <div className="text-2xl font-semibold" style={{ color: 'var(--primary-bubble-text)' }}>
                {selectedFile.name}
              </div>
              <div className="text-sm" style={{ color: 'var(--primary-bubble-text)', opacity: 0.6 }}>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </div>
              <div className="text-4xl text-green-600">✓</div>
            </>
          ) : (
            <>
              <div className="text-xl font-medium" style={{ color: 'var(--primary-bubble-text)' }}>
                {isDragging ? 'Drop your file here' : 'Drag & drop your notice letter'}
              </div>
              <div className="text-sm" style={{ color: 'var(--primary-bubble-text)', opacity: 0.6 }}>
                or click to browse
              </div>
              <div className="text-xs" style={{ color: 'var(--primary-bubble-text)', opacity: 0.5 }}>
                PDF files only
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
