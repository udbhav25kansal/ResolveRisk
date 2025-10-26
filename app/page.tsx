/**
 * Timeline Page - Process Timeline
 * Vertical timeline showing all phases of the HR complaint resolution process
 * Following APP_ARCHITECTURE.md phases
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Modal, FileUpload, ResponseForm, ResponseFormData, PDFViewer, EmailComposer } from '@/components/ui';

export default function Timeline() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isPhase1Complete, setIsPhase1Complete] = useState(false);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  const [isPhase2Complete, setIsPhase2Complete] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPhase3Complete, setIsPhase3Complete] = useState(false);
  const [isPhase4Complete, setIsPhase4Complete] = useState(false);
  const [isPhase5Complete, setIsPhase5Complete] = useState(false);
  const [mediationDate] = useState('25 Dec 2016');
  const [isMediationPrepModalOpen, setIsMediationPrepModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'bot', message: string }>>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isMediationNotesModalOpen, setIsMediationNotesModalOpen] = useState(false);
  const [mediationNotes, setMediationNotes] = useState(`Monetary:
- Agreed for Injury to Dignity: $5,000
- Wage Loss: $7,000

Audit:
- Completion internal review
- Policy & Dismissal review

Address:
- Obligation with duty to accommodate an employee's disability to the point of undue hardship under the Human Rights Code

Address Discrimination:
- Included language confirming that the alleged discrimination will stop and not be repeated in the future`);
  const [prepareSettlement, setPrepareSettlement] = useState<'yes' | 'no' | null>(null);
  const [isPhase6Complete, setIsPhase6Complete] = useState(false);
  const [settlementAccepted, setSettlementAccepted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [isSettlementApprovalModalOpen, setIsSettlementApprovalModalOpen] = useState(false);
  const [isPhase7Complete, setIsPhase7Complete] = useState(false);
  const [isPhase8Complete, setIsPhase8Complete] = useState(false);
  const [isSettlementPDFModalOpen, setIsSettlementPDFModalOpen] = useState(false);
  const [isSettlementEmailModalOpen, setIsSettlementEmailModalOpen] = useState(false);
  const [isPhase9Complete, setIsPhase9Complete] = useState(false);
  const [isPhase10Complete, setIsPhase10Complete] = useState(false);
  const [isTribunalEmailModalOpen, setIsTribunalEmailModalOpen] = useState(false);
  const [isPhase11Complete, setIsPhase11Complete] = useState(false);

  // Settlement Offer Form State
  const [recommendedPrecedent, setRecommendedPrecedent] = useState('');
  const [agreedMediation, setAgreedMediation] = useState('Agreed for Injury to Dignity: $5,000, Wage Loss: $7,000');
  const [injuryToDignity, setInjuryToDignity] = useState('5000');
  const [wageLoss, setWageLoss] = useState('7000');
  const [separateDamages, setSeparateDamages] = useState<'yes' | 'no' | null>('yes');
  const [auditCompleted, setAuditCompleted] = useState<'yes' | 'no' | null>('yes');
  const [auditDetails, setAuditDetails] = useState('Completion internal review');
  const [policyAuditCompleted, setPolicyAuditCompleted] = useState<'yes' | 'no' | null>('yes');
  const [dutyToAccommodate, setDutyToAccommodate] = useState("Obligation with duty to accommodate an employee's disability to the point of undue hardship under the Human Rights Code");
  const [discriminationLanguage, setDiscriminationLanguage] = useState<'yes' | 'no' | null>('yes');

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
  };

  const handleUploadComplete = () => {
    if (uploadedFile) {
      setIsPhase1Complete(true);
      setIsUploadModalOpen(false);
    }
  };

  const handleClearFile = () => {
    setUploadedFile(null);
  };

  const handleResponseSubmit = (data: ResponseFormData) => {
    // Handle response data submission
    console.log('Response submitted:', data);
    // Close response modal and open PDF modal
    setIsResponseModalOpen(false);
    setIsPDFModalOpen(true);
  };

  const handlePDFSaveDraft = () => {
    console.log('Saving PDF as draft...');
    setIsPDFModalOpen(false);
  };

  const handlePDFApprove = () => {
    console.log('PDF approved');
    setIsPhase2Complete(true);
    setIsPDFModalOpen(false);
  };

  const handleSubmitResponse = () => {
    // Open email composer modal
    setIsEmailModalOpen(true);
  };

  const handleEmailSend = () => {
    // Close email modal
    setIsEmailModalOpen(false);

    // Mark phase as complete
    setIsPhase3Complete(true);
  };

  const handleMediationPreparation = () => {
    // Open mediation preparation modal
    setIsMediationPrepModalOpen(true);
  };

  const handleMediationPrepComplete = () => {
    // Mark phase 4 as complete and close modal
    setIsPhase4Complete(true);
    setIsMediationPrepModalOpen(false);
  };

  const handleMediation = () => {
    // Open mediation notes modal
    setIsMediationNotesModalOpen(true);
  };

  const handleSaveMediationNotes = () => {
    setIsPhase5Complete(true);
    setIsMediationNotesModalOpen(false);
  };

  const handlePrepareSettlement = (choice: 'yes' | 'no') => {
    setPrepareSettlement(choice);
    setIsPhase6Complete(true);
  };

  const handleSettlementResponse = (response: 'accepted' | 'rejected') => {
    if (response === 'accepted') {
      setSettlementAccepted(true);
      setIsPhase10Complete(true);
      setShowCelebration(true);
      // Hide celebration after 5 seconds
      setTimeout(() => setShowCelebration(false), 5000);
    }
  };

  const handlePrepareSettlementOffer = () => {
    // Open settlement offer form modal
    setIsSettlementApprovalModalOpen(true);
  };

  const handleSettlementOfferSubmit = () => {
    // Mark phase 7 as complete and close modal
    setIsPhase7Complete(true);
    setIsSettlementApprovalModalOpen(false);
  };

  const handleApproveSettlementLetter = () => {
    // Open settlement PDF modal
    setIsSettlementPDFModalOpen(true);
  };

  const handleSettlementPDFSaveDraft = () => {
    console.log('Saving settlement offer letter as draft...');
    setIsSettlementPDFModalOpen(false);
  };

  const handleSettlementPDFApprove = () => {
    console.log('Settlement offer letter approved');
    setIsPhase8Complete(true);
    setIsSettlementPDFModalOpen(false);
  };

  const handleDeliverSettlementOffer = () => {
    // Open settlement email composer modal
    setIsSettlementEmailModalOpen(true);
  };

  const handleSettlementEmailSend = () => {
    // Close email modal and mark phase complete
    setIsSettlementEmailModalOpen(false);
    setIsPhase9Complete(true);
  };

  const handleNotifyTribunal = () => {
    // Open tribunal email composer modal
    setIsTribunalEmailModalOpen(true);
  };

  const handleTribunalEmailSend = () => {
    // Close email modal and mark phase complete
    setIsTribunalEmailModalOpen(false);
    setIsPhase11Complete(true);
  };

  const handleAskBot = () => {
    if (!currentQuestion.trim()) return;

    // Add user message
    const userMessage = { role: 'user' as const, message: currentQuestion };

    // Bot's consistent response
    const botMessage = {
      role: 'bot' as const,
      message: "Based on your case details and BC Human Rights Tribunal guidelines, I recommend focusing on three key areas for mediation preparation:\n\n1. **Review Your Case Materials**: Thoroughly review the complaint form, your response, and all supporting documentation. Be prepared to discuss specific incidents, dates, and any evidence you have.\n\n2. **Identify Your Goals**: Consider what outcomes would be acceptable to you. Mediation is about finding common ground, so think about both your ideal resolution and what compromises you'd be willing to make.\n\n3. **Prepare Your Opening Statement**: Plan a brief, clear explanation of your perspective. Focus on facts rather than emotions, and be ready to listen actively to the other party's viewpoint.\n\nRemember, the mediator (Susan McFee) is neutral and will help facilitate productive conversation. The process is confidential, and nothing said in mediation can be used later if the case proceeds to a hearing."
    };

    setChatMessages([...chatMessages, userMessage, botMessage]);
    setCurrentQuestion('');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--primary-background)' }}>
      {/* Celebration - Professional & Sleek with Elegant Balloons */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          {/* Elegant backdrop with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent animate-fade-in" style={{ overflow: 'hidden' }} />

          {/* Elegant Balloons - Matching Design System */}
          {[...Array(16)].map((_, i) => {
            const colors = ['#d4edf4', '#bfe6f0', '#aadee8', '#8fd0dd', '#74c2d2'];
            const size = 35 + Math.random() * 20;
            return (
              <div
                key={i}
                className="absolute animate-float-up"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  bottom: '0',
                  transform: 'translateY(150px)',
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${5 + Math.random() * 3}s`
                }}
              >
                <div
                  className="relative"
                  style={{
                    width: `${size}px`,
                    height: `${size * 1.2}px`,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.08), 0 8px 30px rgba(0,0,0,0.12)',
                    transform: `rotate(${-15 + Math.random() * 30}deg)`,
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}
                >
                  {/* Balloon string */}
                  <div
                    className="absolute"
                    style={{
                      bottom: `${-40 - Math.random() * 20}px`,
                      left: '50%',
                      width: '1.5px',
                      height: `${40 + Math.random() * 20}px`,
                      backgroundColor: 'rgba(52, 92, 114, 0.3)',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px'
                    }}
                  />
                  {/* Balloon knot */}
                  <div
                    className="absolute"
                    style={{
                      bottom: `${-45 - Math.random() * 20}px`,
                      left: '50%',
                      width: '5px',
                      height: '5px',
                      backgroundColor: '#345c72',
                      borderRadius: '50%',
                      transform: 'translateX(-50%)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  />
                  {/* Balloon highlight - glossy effect */}
                  <div
                    className="absolute"
                    style={{
                      top: `${size * 0.2}px`,
                      left: `${size * 0.25}px`,
                      width: `${size * 0.25}px`,
                      height: `${size * 0.35}px`,
                      backgroundColor: 'rgba(255,255,255,0.5)',
                      borderRadius: '50%',
                      filter: 'blur(3px)',
                      opacity: 0.8
                    }}
                  />
                  {/* Secondary highlight */}
                  <div
                    className="absolute"
                    style={{
                      top: `${size * 0.15}px`,
                      left: `${size * 0.2}px`,
                      width: `${size * 0.15}px`,
                      height: `${size * 0.15}px`,
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      borderRadius: '50%',
                      filter: 'blur(1px)'
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Professional Success Message */}
          <div className="pointer-events-auto animate-scale-in">
            <div
              className="rounded-3xl p-12 shadow-2xl max-w-2xl mx-4"
              style={{
                backgroundColor: 'var(--primary-bubble)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '3px solid rgb(34, 197, 94)'
                  }}
                >
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="rgb(34, 197, 94)"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2
                className="font-bold text-center mb-6"
                style={{
                  fontSize: '42px',
                  color: 'var(--primary-bubble-text)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em'
                }}
              >
                Settlement Accepted
              </h2>

              {/* Divider */}
              <div
                className="h-px mx-auto mb-6"
                style={{
                  width: '60%',
                  backgroundColor: 'var(--primary-bubble-text)',
                  opacity: 0.2
                }}
              />

              {/* Details */}
              <div className="text-center">
                <p
                  className="text-sm"
                  style={{
                    color: 'var(--primary-bubble-text)',
                    opacity: 0.6
                  }}
                >
                  You can now proceed to notify the tribunal
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 px-6" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold mb-4" style={{
            fontSize: 'var(--text-title)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            {uploadedFile || isPhase1Complete ? 'E. Travis (BCHRT 15916)' : 'Timeline'}
          </h1>
          <p className="italic" style={{
            fontSize: 'var(--text-subheading)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            We'll guide you step-by-step through the entire process. Let's get started.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-dark/20" />

          {/* Phase 1: Upload Complaint Letter */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
              {isPhase1Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-white text-sm font-bold">1</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setIsUploadModalOpen(true)}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Upload Notice Letter
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 2: Prepare Response */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase2Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase2Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">2</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase1Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase1Complete && setIsResponseModalOpen(true)}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Prepare Response
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 3: Submit Response */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase3Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase3Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">3</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase2Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase2Complete && handleSubmitResponse()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Submit Response
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 4: Mediation Preparation */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase4Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase4Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">4</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase3Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase3Complete && handleMediationPreparation()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Mediation Preparation
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 5: Mediation */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase5Complete ? 'bg-primary-dark' : 'bg-gray-300'
            }`}>
              {isPhase5Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">5</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase3Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase3Complete && handleMediation()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Mediation
                </h2>
                {isPhase3Complete && (
                  <p className="mt-2" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)', opacity: 0.7 }}>{mediationDate}</p>
                )}
              </Card>
            </div>
          </div>

          {/* Phase 6: Prepare Settlement */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase6Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase6Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">6</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase5Complete ? '' : 'opacity-60'}`}
              >
                <h2 className="font-bold mb-4" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Prepare Settlement
                </h2>
                <p className="mb-4" style={{ fontSize: 'var(--text-body)', color: 'var(--primary-bubble-text)', opacity: 0.7 }}>Do you want to prepare a settlement offer?</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="prepareSettlement"
                      checked={prepareSettlement === 'yes'}
                      onChange={() => handlePrepareSettlement('yes')}
                      disabled={!isPhase5Complete}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="prepareSettlement"
                      checked={prepareSettlement === 'no'}
                      onChange={() => handlePrepareSettlement('no')}
                      disabled={!isPhase5Complete}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">No</span>
                  </label>
                </div>
              </Card>
            </div>
          </div>

          {/* Phase 7: Prepare Settlement Offer */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase7Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase7Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">7</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${prepareSettlement === 'yes' ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => prepareSettlement === 'yes' && handlePrepareSettlementOffer()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Prepare Settlement Offer
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 8: Approve Settlement Offer Letter */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase8Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase8Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">8</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase7Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase7Complete && handleApproveSettlementLetter()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Approve Settlement Offer Letter
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 9: Deliver Settlement Offer Letter */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase9Complete ? 'bg-primary-dark' : 'bg-gray-300'
            }`}>
              {isPhase9Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-primary-dark text-sm font-bold">9</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase8Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase8Complete && handleDeliverSettlementOffer()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Deliver Settlement Offer Letter
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 10: Settlement Response */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase10Complete ? 'bg-primary-dark' : 'bg-accent-warm'
            }`}>
              {isPhase10Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className="text-white text-sm font-bold">10</span>
              )}
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="border-2 border-accent-warm">
                <h2 className="font-bold mb-4" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Settlement Response
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="border-2 border-secondary-beige rounded-xl p-4 cursor-pointer hover:bg-green-50 hover:border-green-400 transition-colors"
                    onClick={() => handleSettlementResponse('accepted')}
                  >
                    <h3 className="font-semibold text-primary-dark">Accepted</h3>
                  </div>

                  <div
                    className="border-2 border-secondary-beige rounded-xl p-4 cursor-pointer hover:bg-red-50 hover:border-red-400 transition-colors"
                    onClick={() => handleSettlementResponse('rejected')}
                  >
                    <h3 className="font-semibold text-primary-dark">Rejected</h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Phase 11: Notify Tribunal */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase11Complete ? 'bg-primary-dark' : isPhase10Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              {isPhase11Complete ? (
                <span className="text-green-500 text-xl font-bold">✓</span>
              ) : (
                <span className={isPhase10Complete ? 'text-white' : 'text-primary-dark'} style={{ fontSize: '14px', fontWeight: 'bold' }}>11</span>
              )}
            </div>

            <div className="ml-20">
              <Card
                padding="large"
                rounded="large"
                className={`${isPhase10Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}
                onClick={() => isPhase10Complete && handleNotifyTribunal()}
              >
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Notify Tribunal
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 12: Disclosure Preparation */}
          <div className="relative mb-8">
            <div className={`absolute left-4 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
              isPhase11Complete ? 'bg-primary-dark' : 'bg-secondary-beige'
            }`}>
              <span className="text-sm font-bold" style={{ color: isPhase11Complete ? '#ffffff' : 'var(--primary-dark)' }}>12</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className={`${isPhase11Complete ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'opacity-60'}`}>
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Disclosure Preparation
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 13: Disclosure Submission */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">13</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Disclosure Submission
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 14: Hearing Preparation */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">14</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Hearing Preparation
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 15: The Hearing */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">15</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  The Hearing
                </h2>
              </Card>
            </div>
          </div>

          {/* End of Timeline */}
          <div className="relative">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-accent-warm border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-lg">✓</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="bg-accent-warm/10">
                <h2 className="font-bold" style={{
                  fontSize: 'var(--text-subheading)',
                  color: 'var(--primary-bubble-text)',
                  fontWeight: 'var(--weight-bold)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  Resolution Achieved
                </h2>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 px-6" style={{ backgroundColor: 'var(--primary-background)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold mb-4" style={{
            fontSize: 'var(--text-subheading)',
            color: 'var(--primary-text)',
            fontWeight: 'var(--weight-bold)',
            fontFamily: 'var(--font-heading)'
          }}>
            Need Help Getting Started?
          </h2>
          <p className="mb-6" style={{
            fontSize: 'var(--text-body)',
            color: 'var(--primary-text)',
            opacity: 0.8
          }}>
            Our team is here to support you through every phase of the process.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/resources">
              <Button variant="secondary" size="large">
                View Resources
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="large">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      <Modal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        title="Upload Notice Letter"
      >
        <FileUpload
          key={uploadedFile ? 'with-file' : 'no-file'}
          onFileSelect={handleFileSelect}
          accept=".pdf"
        />

        {uploadedFile && (
          <div className="mt-6 flex justify-end gap-4">
            <Button
              variant="secondary"
              size="large"
              onClick={handleClearFile}
            >
              Clear
            </Button>
            <Button size="large" onClick={handleUploadComplete}>
              Continue →
            </Button>
          </div>
        )}
      </Modal>

      {/* Response Modal */}
      <Modal
        isOpen={isResponseModalOpen}
        onClose={() => setIsResponseModalOpen(false)}
        title="Prepare Response"
      >
        <ResponseForm onSubmit={handleResponseSubmit} />
      </Modal>

      {/* PDF Viewer Modal */}
      <Modal
        isOpen={isPDFModalOpen}
        onClose={() => setIsPDFModalOpen(false)}
        title="Response Form"
        size="large"
      >
        <div className="h-full">
          <PDFViewer
            pdfUrl="/response-form.pdf#toolbar=1&view=FitH"
            onSaveDraft={handlePDFSaveDraft}
            onApprove={handlePDFApprove}
          />
        </div>
      </Modal>

      {/* Email Composer Modal */}
      <Modal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title=""
        size="large"
      >
        <EmailComposer
          to="BCHumanRightsTribunal@gov.bc.ca"
          subject="Response to Human Rights Complaint - Case #15916"
          body={`Dear Human Rights Tribunal,

Please see attached my Complaint Response Form for HRT 15916.`}
          attachmentName="Response Form Filled.pdf"
          onSend={handleEmailSend}
          onClose={() => setIsEmailModalOpen(false)}
        />
      </Modal>

      {/* Mediation Preparation Modal */}
      <Modal
        isOpen={isMediationPrepModalOpen}
        onClose={() => setIsMediationPrepModalOpen(false)}
        title=""
        size="large"
      >
        <div className="p-8">
          {/* Large Heading */}
          <h2 className="text-5xl font-bold text-primary-dark mb-4">Mediation Preparation</h2>
          <p className="text-xl text-primary-dark/70 mb-8">Here's what you need to know for your mediation session</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-5">
              {/* Mediation Details Card */}
              <div className="bg-primary-yellow rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Mediation Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-primary-dark/70 mb-1">Mediation Date</p>
                    <p className="text-xl text-primary-dark font-semibold">December 15, 2016</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary-dark/70 mb-1">Mediator</p>
                    <p className="text-xl text-primary-dark font-semibold">Susan McFee</p>
                  </div>
                </div>
              </div>

              {/* Review Materials Card */}
              <div className="bg-secondary-beige rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Review Materials</h3>
                <p className="text-base text-primary-dark">Complaint Form, Provisions & Precedents, Recommendations</p>
              </div>

              {/* Resources Card */}
              <div className="bg-white rounded-3xl p-6 border border-secondary-beige">
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Resources</h3>
                <div className="space-y-3">
                  <div>
                    <a
                      href="https://www.bchrt.bc.ca/complaint-process/mediation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-primary-dark underline hover:no-underline"
                    >
                      What is mediation?
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.bchrt.bc.ca/law-library/policies/mediation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-primary-dark underline hover:no-underline"
                    >
                      Mediation policies
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.bchrt.bc.ca/law-library/faq/mediation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-primary-dark underline hover:no-underline"
                    >
                      Frequently asked questions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - AI Assistant */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-3xl p-6 h-full border-2 border-gray-700">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">AI Assistant</h3>
                <p className="text-sm text-gray-300 mb-4">Ask anything about mediation preparation</p>

                {/* Chat Messages */}
                {chatMessages.length > 0 && (
                  <div className="bg-gray-700/50 rounded-2xl p-3 mb-4 max-h-64 overflow-y-auto space-y-2 border border-gray-600">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[90%] rounded-xl p-3 ${
                            msg.role === 'user'
                              ? 'bg-primary-yellow text-primary-dark'
                              : 'bg-white text-primary-dark'
                          }`}
                        >
                          <p className="whitespace-pre-line text-xs leading-relaxed">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Input Area */}
                <div className="space-y-2">
                  <input
                    type="text"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskBot()}
                    placeholder="Type your question..."
                    className="w-full px-4 py-3 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-xl border-2 border-gray-600 focus:border-gray-500 focus:outline-none transition-colors text-sm"
                  />
                  <button
                    onClick={handleAskBot}
                    className="w-full px-5 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm"
                  >
                    Ask
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-primary-dark/10">
            <Button
              variant="secondary"
              size="large"
              onClick={handleMediationPrepComplete}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {/* Mediation Notes Modal */}
      <Modal
        isOpen={isMediationNotesModalOpen}
        onClose={() => setIsMediationNotesModalOpen(false)}
        title="Mediation Notes"
        size="large"
      >
        <div className="p-8">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Add Mediation Notes</h2>
          <p className="text-lg text-primary-dark/70 mb-6">
            Record your notes from the mediation session held on {mediationDate}
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-primary-dark mb-2">
              Notes
            </label>
            <textarea
              value={mediationNotes}
              onChange={(e) => setMediationNotes(e.target.value)}
              placeholder="Enter your mediation notes here..."
              rows={12}
              className="w-full px-4 py-3 border-2 border-secondary-beige rounded-2xl focus:border-primary-dark focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4 border-t border-primary-dark/10">
            <Button
              variant="secondary"
              size="large"
              onClick={() => setIsMediationNotesModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={handleSaveMediationNotes}
            >
              Save Notes
            </Button>
          </div>
        </div>
      </Modal>

      {/* Settlement Offer Form Modal */}
      <Modal
        isOpen={isSettlementApprovalModalOpen}
        onClose={() => setIsSettlementApprovalModalOpen(false)}
        title="Prepare Settlement Offer"
        size="large"
      >
        <div className="p-8 max-h-[80vh] overflow-y-auto">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Prepare Settlement Offer</h2>
          <p className="text-lg text-primary-dark/70 mb-8">
            Complete the settlement offer details below
          </p>

          {/* Monetary Section */}
          <div className="mb-8 p-6 bg-primary-yellow/20 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Monetary</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Recommended based on precedent
                </label>
                <input
                  type="text"
                  value={recommendedPrecedent}
                  onChange={(e) => setRecommendedPrecedent(e.target.value)}
                  placeholder="Enter details..."
                  className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Agreed upon during mediation
                </label>
                <input
                  type="text"
                  value={agreedMediation}
                  onChange={(e) => setAgreedMediation(e.target.value)}
                  placeholder="Enter details..."
                  className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  How much for Injury to Dignity?
                </label>
                <input
                  type="text"
                  value={injuryToDignity}
                  onChange={(e) => setInjuryToDignity(e.target.value)}
                  placeholder="5000"
                  className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  How much for Wage Loss?
                </label>
                <input
                  type="text"
                  value={wageLoss}
                  onChange={(e) => setWageLoss(e.target.value)}
                  placeholder="7000"
                  className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-3">
                  Does your settlement offer separate the damages related to discrimination under the Code from all other required payments?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="separateDamages"
                      checked={separateDamages === 'yes'}
                      onChange={() => setSeparateDamages('yes')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="separateDamages"
                      checked={separateDamages === 'no'}
                      onChange={() => setSeparateDamages('no')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Audit Section */}
          <div className="mb-8 p-6 bg-secondary-beige/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Audit</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-3">
                  Completed?
                </label>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="auditCompleted"
                      checked={auditCompleted === 'yes'}
                      onChange={() => setAuditCompleted('yes')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="auditCompleted"
                      checked={auditCompleted === 'no'}
                      onChange={() => setAuditCompleted('no')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">No</span>
                  </label>
                </div>
              </div>

              {auditCompleted === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Provide details of the adequacy of the internal review
                  </label>
                  <textarea
                    value={auditDetails}
                    onChange={(e) => setAuditDetails(e.target.value)}
                    placeholder="Enter audit details..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors resize-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-3">
                  Audit of policy and dismissal procedures completed?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="policyAuditCompleted"
                      checked={policyAuditCompleted === 'yes'}
                      onChange={() => setPolicyAuditCompleted('yes')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="policyAuditCompleted"
                      checked={policyAuditCompleted === 'no'}
                      onChange={() => setPolicyAuditCompleted('no')}
                      className="w-5 h-5"
                    />
                    <span className="text-primary-dark font-medium">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  How did you address: Obligation with duty to accommodate an employee's disability to the point of undue hardship under the Human Rights Code
                </label>
                <textarea
                  value={dutyToAccommodate}
                  onChange={(e) => setDutyToAccommodate(e.target.value)}
                  placeholder="Enter your response..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-secondary-beige rounded-xl focus:border-primary-dark focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Address Discrimination Section */}
          <div className="mb-8 p-6 bg-accent-warm/10 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Address Discrimination</h3>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-3">
                Included language confirming that the alleged discrimination will stop and not be repeated in the future
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="discriminationLanguage"
                    checked={discriminationLanguage === 'yes'}
                    onChange={() => setDiscriminationLanguage('yes')}
                    className="w-5 h-5"
                  />
                  <span className="text-primary-dark font-medium">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="discriminationLanguage"
                    checked={discriminationLanguage === 'no'}
                    onChange={() => setDiscriminationLanguage('no')}
                    className="w-5 h-5"
                  />
                  <span className="text-primary-dark font-medium">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-primary-dark/10">
            <Button
              variant="secondary"
              size="large"
              onClick={() => setIsSettlementApprovalModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              size="large"
              onClick={handleSettlementOfferSubmit}
            >
              Generate Offer Letter
            </Button>
          </div>
        </div>
      </Modal>

      {/* Settlement Offer Letter PDF Viewer Modal */}
      <Modal
        isOpen={isSettlementPDFModalOpen}
        onClose={() => setIsSettlementPDFModalOpen(false)}
        title="Approve Settlement Offer Letter"
        size="large"
      >
        <div className="h-full">
          <PDFViewer
            pdfUrl="/Settlement Offer Letter (1).pdf#toolbar=1&view=FitH"
            onSaveDraft={handleSettlementPDFSaveDraft}
            onApprove={handleSettlementPDFApprove}
          />
        </div>
      </Modal>

      {/* Deliver Settlement Offer Email Modal */}
      <Modal
        isOpen={isSettlementEmailModalOpen}
        onClose={() => setIsSettlementEmailModalOpen(false)}
        title=""
        size="large"
      >
        <EmailComposer
          to="steven.wang@lawfirm.com"
          subject="15916 HRT Complaint Settlement Agreement"
          body={`Mr. Wang,

Attached is a Settle Offer Letter for your Complainant, Ms. Travis on HRT Complaint 15916 on with agreed upon terms post mediation.

Please review and return a signed copy.

Thanks.`}
          attachmentName="Settlement Offer Letter (1).pdf"
          onSend={handleSettlementEmailSend}
          onClose={() => setIsSettlementEmailModalOpen(false)}
        />
      </Modal>

      {/* Notify Tribunal Email Modal */}
      <Modal
        isOpen={isTribunalEmailModalOpen}
        onClose={() => setIsTribunalEmailModalOpen(false)}
        title=""
        size="large"
      >
        <EmailComposer
          to="BCHumanRightsTribunal@gov.bc.ca"
          subject="15916 HRT Complaint Settlement Agreement"
          body={`Human Rights Tribunal,

A settlement offer was accepted by Complainant, Ms. Travis on HRT Complaint 15916 on January 4, 2025. Attached is the signed copy.

Please provide confirmation that this closes the complaint with no further action(s).

Thanks.`}
          attachmentName="Settlement Offer Letter (1).pdf"
          onSend={handleTribunalEmailSend}
          onClose={() => setIsTribunalEmailModalOpen(false)}
        />
      </Modal>
    </div>
  );
}
