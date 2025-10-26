/**
 * Response Form Component
 * Form for preparing response to complaint
 */

'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { FileUpload } from './FileUpload';

export interface ResponseFormProps {
  onSubmit: (data: ResponseFormData) => void;
}

export interface ResponseFormData {
  factsAgree: string;
  factsDisagree: string;
  supportingDocs: File | null;
  otherProceedings: boolean;
  mediationResponse: 'agree-tribunal-date' | 'agree-new-date' | 'disagree' | null;
}

export function ResponseForm({ onSubmit }: ResponseFormProps) {
  const [factsAgree, setFactsAgree] = useState('');
  const [factsDisagree, setFactsDisagree] = useState('');
  const [supportingDocs, setSupportingDocs] = useState<File | null>(null);
  const [otherProceedings, setOtherProceedings] = useState(false);
  const [mediationResponse, setMediationResponse] = useState<'agree-tribunal-date' | 'agree-new-date' | 'disagree' | null>(null);

  const handleSubmit = () => {
    onSubmit({
      factsAgree,
      factsDisagree,
      supportingDocs,
      otherProceedings,
      mediationResponse,
    });
  };

  const isFormValid = factsAgree && factsDisagree && mediationResponse;

  return (
    <div className="space-y-6">
      {/* Facts Agree */}
      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-2">
          Facts from Complainant you agree with
        </label>
        <textarea
          value={factsAgree}
          onChange={(e) => setFactsAgree(e.target.value)}
          placeholder="e.g., dates & background of employment, termination letter"
          className="w-full px-4 py-3 border-2 border-primary-dark/20 rounded-xl focus:border-primary-dark focus:outline-none transition-colors resize-vertical min-h-[100px]"
        />
      </div>

      {/* Facts Disagree */}
      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-2">
          Facts from Complainant you disagree with & rationale
        </label>
        <textarea
          value={factsDisagree}
          onChange={(e) => setFactsDisagree(e.target.value)}
          placeholder="e.g., Appendix A - provide detailed rationale"
          className="w-full px-4 py-3 border-2 border-primary-dark/20 rounded-xl focus:border-primary-dark focus:outline-none transition-colors resize-vertical min-h-[100px]"
        />
      </div>

      {/* Supporting Documentation */}
      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-2">
          Supporting Documentation (Optional)
        </label>
        <FileUpload
          onFileSelect={(file) => setSupportingDocs(file)}
          accept=".pdf,.doc,.docx"
        />
      </div>

      {/* Other Proceedings */}
      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-3">
          Other related proceedings?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={otherProceedings}
              onChange={(e) => setOtherProceedings(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-primary-dark/30 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
            />
            <span className="text-primary-dark">Yes</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={!otherProceedings}
              onChange={(e) => setOtherProceedings(!e.target.checked)}
              className="w-5 h-5 rounded border-2 border-primary-dark/30 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
            />
            <span className="text-primary-dark">No</span>
          </label>
        </div>
      </div>

      {/* Mediation Response */}
      <div>
        <label className="block text-sm font-semibold text-primary-dark mb-3">
          Mediation Response
        </label>
        <div className="space-y-2">
          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-secondary-cream transition-colors">
            <input
              type="radio"
              name="mediation"
              checked={mediationResponse === 'agree-tribunal-date'}
              onChange={() => setMediationResponse('agree-tribunal-date')}
              className="w-5 h-5 mt-0.5 border-2 border-primary-dark/30 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
            />
            <span className="text-primary-dark">Agree to mediation, can make date Tribunal set</span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-secondary-cream transition-colors">
            <input
              type="radio"
              name="mediation"
              checked={mediationResponse === 'agree-new-date'}
              onChange={() => setMediationResponse('agree-new-date')}
              className="w-5 h-5 mt-0.5 border-2 border-primary-dark/30 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
            />
            <span className="text-primary-dark">Agree to mediation, need new date</span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-secondary-cream transition-colors">
            <input
              type="radio"
              name="mediation"
              checked={mediationResponse === 'disagree'}
              onChange={() => setMediationResponse('disagree')}
              className="w-5 h-5 mt-0.5 border-2 border-primary-dark/30 text-primary-dark focus:ring-2 focus:ring-primary-dark cursor-pointer"
            />
            <span className="text-primary-dark">Disagree to mediation</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 pt-4">
        <Button
          size="large"
          onClick={handleSubmit}
          className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Draft response form
        </Button>
      </div>
    </div>
  );
}
