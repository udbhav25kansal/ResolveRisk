/**
 * Home Page - Process Timeline
 * Vertical timeline showing all phases of the HR complaint resolution process
 * Following APP_ARCHITECTURE.md phases
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card, Modal, FileUpload, ResponseForm, ResponseFormData, PDFViewer, EmailComposer } from '@/components/ui';

export default function Home() {
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
    // For now, just mark as complete when clicked
    // In future, this can open a modal or navigate to a mediation page
    console.log('Mediation clicked');
    setIsPhase5Complete(true);
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
    <div className="min-h-screen bg-secondary-cream">
      {/* Hero Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Your Complaint Resolution Journey
          </h1>
          <p className="text-lg text-primary-dark/80 italic">
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
                <h2 className="text-2xl font-bold text-primary-dark">
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
                <h2 className="text-2xl font-bold text-primary-dark">
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
                <h2 className="text-2xl font-bold text-primary-dark">
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
                <h2 className="text-2xl font-bold text-primary-dark">
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
                <h2 className="text-2xl font-bold text-primary-dark">
                  Mediation
                </h2>
                <p className="text-primary-dark/70 mt-2">{mediationDate}</p>
              </Card>
            </div>
          </div>

          {/* Phase 6: Settlement Offer Writing */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">6</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Settlement Offer Writing
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 7: Deliver Offer */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">7</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Deliver Settlement Offer
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 8: Settlement Rejected */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-accent-warm border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">8</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="border-2 border-accent-warm opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark mb-4">
                  Settlement Rejected
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-secondary-beige rounded-xl p-4">
                    <h3 className="font-semibold text-primary-dark">Application to Dismiss</h3>
                  </div>

                  <div className="border-2 border-secondary-beige rounded-xl p-4">
                    <h3 className="font-semibold text-primary-dark">Proceed to Disclosure</h3>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Phase 9: Disclosure Preparation */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">9</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Disclosure Preparation
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 10: Disclosure Submission */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">10</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Disclosure Submission
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 11: Hearing Preparation */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-secondary-beige border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">11</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
                  Hearing Preparation
                </h2>
              </Card>
            </div>
          </div>

          {/* Phase 12: The Hearing */}
          <div className="relative mb-8">
            <div className="absolute left-4 w-8 h-8 rounded-full bg-gray-300 border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-primary-dark text-sm font-bold">12</span>
            </div>

            <div className="ml-20">
              <Card padding="large" rounded="large" className="opacity-60">
                <h2 className="text-2xl font-bold text-primary-dark">
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
                <h2 className="text-2xl font-bold text-primary-dark">
                  Resolution Achieved
                </h2>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Need Help Getting Started?
          </h2>
          <p className="text-lg text-primary-dark/80 mb-6">
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
              <div className="bg-primary-dark rounded-3xl p-6 h-full">
                <h3 className="text-2xl font-bold text-white mb-2">AI Assistant</h3>
                <p className="text-sm text-white/80 mb-4">Ask anything about mediation preparation</p>

                {/* Chat Messages */}
                {chatMessages.length > 0 && (
                  <div className="bg-white/10 rounded-2xl p-3 mb-4 max-h-64 overflow-y-auto space-y-2">
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
                    className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/60 rounded-xl border-2 border-white/20 focus:border-white/40 focus:outline-none transition-colors text-sm"
                  />
                  <button
                    onClick={handleAskBot}
                    className="w-full px-5 py-3 bg-white text-primary-dark rounded-full font-semibold hover:bg-white/90 transition-colors text-sm"
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
              onClick={() => setIsMediationPrepModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
