/**
 * Email Composer Component
 * Mock Gmail-style email interface
 */

'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export interface EmailComposerProps {
  to: string;
  subject: string;
  body: string;
  attachmentName: string;
  onSend: () => void;
  onClose: () => void;
}

export function EmailComposer({ to, subject, body, attachmentName, onSend, onClose }: EmailComposerProps) {
  const [emailBody, setEmailBody] = useState(body);

  return (
    <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-3xl">
        <h2 className="text-xl font-medium text-gray-800">New Message</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          ×
        </button>
      </div>

      {/* Email Fields */}
      <div className="flex-1 overflow-y-auto">
        {/* To Field */}
        <div className="flex items-center px-6 py-3 border-b border-gray-200">
          <label className="text-gray-600 text-sm w-20">To</label>
          <input
            type="text"
            value={to}
            readOnly
            className="flex-1 text-gray-800 outline-none bg-transparent"
          />
        </div>

        {/* Subject Field */}
        <div className="flex items-center px-6 py-3 border-b border-gray-200">
          <label className="text-gray-600 text-sm w-20">Subject</label>
          <input
            type="text"
            value={subject}
            readOnly
            className="flex-1 text-gray-800 outline-none bg-transparent"
          />
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <textarea
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
            className="w-full h-64 text-gray-800 outline-none resize-none font-sans"
            style={{ lineHeight: '1.6' }}
          />
        </div>

        {/* Attachment */}
        <div className="px-6 pb-4">
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" />
            </svg>
            <div className="flex-1">
              <div className="text-sm text-gray-800 font-medium">{attachmentName}</div>
              <div className="text-xs text-gray-500">PDF Document</div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer with Send Button */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center gap-4 rounded-b-3xl">
        <button
          onClick={onSend}
          className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center gap-2"
        >
          <span>Send</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
          </svg>
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex-1" />

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={onClose}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
