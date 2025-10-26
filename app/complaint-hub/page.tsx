/**
 * Complaint Hub Page
 * Central location for all complaint information and documents
 * Organized with expandable sections containing detailed information
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';

// Complaint data structure
const complaintData = {
  caseNumber: '15916',

  // I. Parties and Representation
  parties: [
    {
      role: 'Complainant',
      name: 'Evelyn Travis',
      details: 'Former employee of the Respondent.'
    },
    {
      role: "Complainant's Counsel",
      name: 'Steven L. Wang',
      details: ''
    },
    {
      role: 'Respondent',
      name: 'The Penticton and Area Access Society (the Society)',
      details: 'Non-profit organization; primary mandate is to alleviate the effects of poverty on vulnerable populations.'
    },
    {
      role: "Respondent's Counsel",
      name: 'Katrina McKeown',
      details: ''
    },
    {
      role: 'Tribunal Member',
      name: 'Barbara Korenkiewicz',
      details: ''
    }
  ],

  // II. Allegation of Discrimination
  allegation: {
    basis: 'Physical disability',
    area: 'Employment',
    legislation: 'Section 13 of the Human Rights Code [Code], RSBC 1996, c. 210 (as amended)',
    position: "Ms. Travis says the Society's termination of her employment violates s. 13 of the Code."
  },

  // III. Employment and Background Facts
  employment: {
    duration: 'February 1, 2014, until August 10, 2016',
    position: 'Advocacy Outreach Worker, working 20 hours per week at the Society\'s satellite office. Ms. Travis also worked a second part-time job.',
    incident: 'On April 30, 2016, Ms. Travis was involved in a motorcycle accident.',
    injuries: 'Concussion-like symptoms, ankle sprain, torn knee ligament, injuries to her neck, and various other soft tissue injuries.',
    accommodationPeriod: [
      'The Society informed Ms. Travis on May 12, 2016, that her position would be held open without pay until August 10, 2016 (three months).',
      'Ms. Travis did not attend work during May or most of June.',
      'From June 24 to July 15, 2016, Ms. Travis began a gradual return to work program, initially working four hours per week (one four-hour shift for the Society every other week).',
      'Starting July 19, 2016, she increased to one four-hour shift per week at both of her jobs.'
    ],
    termination: 'Ms. Travis\' employment was terminated on August 10, 2016. The termination letter confirmed she was able to work four hours per week but stated she could not give a return date, and the Society "need[s] to provide more stability regarding our service"'
  },

  // HRT Provisions
  hrtProvisions: [
    {
      title: 'Section 13 (Prohibition against Discrimination in Employment)',
      description: 'This is the provision Ms. Travis alleges the Society violated. She claims the Society discriminated against her in employment on the basis of physical disability, contrary to s. 13 of the Code.'
    },
    {
      title: 'Section 27(1)(d)(ii) (Application to Dismiss a Complaint)',
      description: 'This is the specific section under which the Society applied to dismiss Ms. Travis\'s complaint. This section allows the Tribunal to dismiss a complaint on the basis that the respondent has made a reasonable settlement offer.'
    },
    {
      title: 'Section 37(2)(d)(ii) (Purpose of Compensation)',
      description: 'This section relates to the remedies a Tribunal may order if a complaint is successful. The purpose of compensation under this section is to restore a complainant, to the extent possible, to the position they would have been in had the discrimination not occurred.'
    }
  ],

  // Legal Precedents
  precedents: [
    { name: 'Carter v. Travelex Canada Ltd.', citation: '2009 BCCA 180', purpose: 'Cited to establish that it may not further the purposes of the Code to proceed with a complaint if a respondent has made a reasonable settlement offer.' },
    { name: 'Complainant v. British Columbia (Health Authority)', citation: '2017 BCHRT 150', purpose: 'Cited regarding the two-part assessment required for a dismissal application under s. 27(1)(d)(ii).' },
    { name: 'Sloane-Seale v. Swick\'s Organic Landscaping and another (No. 2)', citation: '2012 BCHRT 22', purpose: 'Cited regarding the assessment premise that the complainant\'s allegations would be proven.' },
    { name: 'Frick v. UBC and another (No. 3)', citation: '2009 BCHRT 85', purpose: 'Cited to explain that a settlement offer must provide reasonable compensation and other likely remedies.' },
    { name: 'Issa v. Loblaw Co.', citation: '2009 BCHRT 264', purpose: 'Cited as setting out the factors the Tribunal should consider when determining whether a settlement offer is reasonable.' },
    { name: 'McGowan v. Pretty Estates', citation: '2013 BCHRT 40', purpose: 'Relied upon by the Society in arguing that its monetary offer was reasonable; awarded $5,000 for injury to dignity.' },
    { name: 'Willems-Wilson v. Allbright Drycleaners', citation: '1997 BCHRT 39', purpose: 'Relied upon by the Society; awarded $3,500 for injury to dignity (roughly $5,000 in 2018 dollars).' },
    { name: 'Gichuru v. Law Society of British Columbia', citation: '2011 BCHRT 185', purpose: 'Cited to explain the purpose of compensation under the Code.' }
  ],

  // Legal Recommendations
  recommendations: [
    {
      title: 'Appropriate Monetary Compensation for Injury to Dignity',
      description: 'Offer compensation for injury to dignity that was closer to the established range for similar cases.'
    },
    {
      title: 'Calculate and Include Compensation for Wage Loss',
      description: 'Recognize and offer compensation for Ms. Travis\'s likely entitlement to wage loss. Calculate the difference in pay between the two jobs and offer compensation for that differential.'
    },
    {
      title: 'Proper Offset Damages with Statutory Payments',
      description: 'Recognize that payments required under the Employment Standards Act (such as severance pay, vacation pay, and wages earned during gradual return to work) cannot be used to offset damages awarded for injury to dignity.'
    },
    {
      title: 'Provide Substantive Non-Monetary Remedies and Policy Assurance',
      description: 'Include language confirming that the alleged discrimination will stop and not be repeated. Provide details on internal audit of policy and dismissal procedures.'
    },
    {
      title: 'Avoid Arguments Based on Financial Hardship or Organizational Mandate',
      description: 'Focus submission solely on compensating Ms. Travis for discrimination, as required by the Code.'
    }
  ],

  // Mediation Details
  mediation: {
    date: 'December 15, 2016',
    mediator: 'Susan McFee',
    resources: [
      { title: 'What is a mediation?', url: 'https://www.bchrt.bc.ca/complaint-process/mediation/' },
      { title: 'Mediation Policies', url: 'https://www.bchrt.bc.ca/law-library/policies/mediation/' },
      { title: 'FAQs about Mediation', url: 'https://www.bchrt.bc.ca/law-library/faq/mediation/' }
    ],
    notes: {
      monetary: {
        injuryToDignity: '$5,000',
        wageLoss: '$7,000'
      },
      audit: 'Completion internal review',
      policyReview: 'Policy & Dismissal review',
      dutyToAccommodate: 'Address: Obligation with duty to accommodate an employee\'s disability to the point of undue hardship under the Human Rights Code',
      discrimination: 'Included language confirming that the alleged discrimination will stop and not be repeated in the future'
    }
  },

  // Settlement Agreement
  settlement: {
    status: 'Accepted',
    acceptanceDate: 'January 4, 2019',
    terms: [
      'The Respondent agrees to pay the Complainant the sum $5,000 as general damages for injury to dignity, feelings and self-respect.',
      'The Respondent agrees to pay the Complainant the sum $7,000, less applicable deductions, as compensation for loss of wages.',
      'The Respondent agrees to provide the Complainant with a letter confirming the Complainant\'s position, dates of employment and wage.',
      'The Respondent agrees to provide the Complainant with proof of internal audit of policies and dismissal procedures. The Respondent will provide the Complainant with a full explanation to clarify how the Society\'s obligations under the Human Rights Code, particularly the duty to accommodate an employee\'s disability to the point of undue hardship, were specifically addressed and remedied in the process of the internal audit.'
    ]
  },

  // Documents
  documents: [
    { name: 'HRT Complaint Form', url: '/documents/complaint-form.pdf', type: 'Complaint' },
    { name: 'Response Form Filled', url: '/Response Form Filled.pdf', type: 'Response' },
    { name: 'Settlement Offer Letter', url: '/Settlement Offer Letter (1).pdf', type: 'Settlement' }
  ]
};

export default function ComplaintHub() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const SectionBubble = ({ title, children, sectionId }: { title: string; children: React.ReactNode; sectionId: string }) => {
    const isExpanded = expandedSections.has(sectionId);

    return (
      <div className="relative mb-8">
        {/* Timeline dot */}
        <div className="absolute left-4 w-8 h-8 rounded-full bg-primary-dark border-4 border-white shadow-lg flex items-center justify-center">
          <span className="text-white text-lg">{isExpanded ? '−' : '+'}</span>
        </div>

        <div className="ml-20">
          <Card
            padding="large"
            rounded="large"
            className="cursor-pointer hover:shadow-xl transition-all"
            onClick={() => toggleSection(sectionId)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary-dark">
                {title}
              </h2>
              <span className="text-2xl text-primary-dark">
                {isExpanded ? '▼' : '▶'}
              </span>
            </div>

            {isExpanded && (
              <div className="mt-6 pt-6 border-t-2 border-secondary-beige" onClick={(e) => e.stopPropagation()}>
                {children}
              </div>
            )}
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-secondary-cream">
      {/* Hero Section */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/">
              <Button variant="secondary" size="medium">
                ← Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Complaint Hub - Case #{complaintData.caseNumber}
          </h1>
          <p className="text-lg text-primary-dark/80 italic">
            Complete complaint information and documents
          </p>
        </div>
      </section>

      {/* Complaint Summary Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary-dark/20" />

          {/* I. Parties and Representation */}
          <SectionBubble title="I. Parties and Representation" sectionId="parties">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-secondary-beige">
                    <th className="text-left py-3 px-4 font-bold text-primary-dark">Role</th>
                    <th className="text-left py-3 px-4 font-bold text-primary-dark">Name</th>
                    <th className="text-left py-3 px-4 font-bold text-primary-dark">Organization/Details</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintData.parties.map((party, index) => (
                    <tr key={index} className="border-b border-secondary-beige/50">
                      <td className="py-3 px-4 font-semibold text-primary-dark">{party.role}</td>
                      <td className="py-3 px-4 text-primary-dark">{party.name}</td>
                      <td className="py-3 px-4 text-primary-dark/80">{party.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionBubble>

          {/* II. Allegation of Discrimination */}
          <SectionBubble title="II. Allegation of Discrimination" sectionId="allegation">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Basis of Discrimination:</h3>
                <p className="text-primary-dark/80">{complaintData.allegation.basis}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Area of Activity:</h3>
                <p className="text-primary-dark/80">{complaintData.allegation.area}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Applicable Legislation:</h3>
                <p className="text-primary-dark/80">{complaintData.allegation.legislation}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Complainant's Position:</h3>
                <p className="text-primary-dark/80">{complaintData.allegation.position}</p>
              </div>
            </div>
          </SectionBubble>

          {/* III. Employment and Background Facts */}
          <SectionBubble title="III. Employment and Background Facts" sectionId="employment">
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Employment Duration:</h3>
                <p className="text-primary-dark/80">{complaintData.employment.duration}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Position:</h3>
                <p className="text-primary-dark/80">{complaintData.employment.position}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Incident/Injury:</h3>
                <p className="text-primary-dark/80">{complaintData.employment.incident}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Injuries Sustained:</h3>
                <p className="text-primary-dark/80">{complaintData.employment.injuries}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Accommodation Period:</h3>
                <ul className="list-disc list-inside space-y-2 text-primary-dark/80">
                  {complaintData.employment.accommodationPeriod.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Termination:</h3>
                <p className="text-primary-dark/80">{complaintData.employment.termination}</p>
              </div>
            </div>
          </SectionBubble>

          {/* IV. HRT Provisions */}
          <SectionBubble title="IV. HRT Provisions" sectionId="provisions">
            <div className="space-y-6">
              {complaintData.hrtProvisions.map((provision, index) => (
                <div key={index} className="pb-4 border-b border-secondary-beige/50 last:border-0">
                  <h3 className="font-bold text-primary-dark mb-2">{provision.title}</h3>
                  <p className="text-primary-dark/80">{provision.description}</p>
                </div>
              ))}
            </div>
          </SectionBubble>

          {/* V. Legal Precedents */}
          <SectionBubble title="V. Legal Precedents" sectionId="precedents">
            <div className="space-y-4">
              {complaintData.precedents.map((precedent, index) => (
                <div key={index} className="pb-4 border-b border-secondary-beige/50 last:border-0">
                  <h3 className="font-bold text-primary-dark mb-1">{precedent.name}</h3>
                  <p className="text-sm italic text-primary-dark/60 mb-2">{precedent.citation}</p>
                  <p className="text-primary-dark/80">{precedent.purpose}</p>
                </div>
              ))}
            </div>
          </SectionBubble>

          {/* VI. Legal Recommendations */}
          <SectionBubble title="VI. Legal Recommendations" sectionId="recommendations">
            <div className="space-y-4">
              {complaintData.recommendations.map((rec, index) => (
                <div key={index} className="pb-4 border-b border-secondary-beige/50 last:border-0">
                  <h3 className="font-bold text-primary-dark mb-2">{rec.title}</h3>
                  <p className="text-primary-dark/80">{rec.description}</p>
                </div>
              ))}
            </div>
          </SectionBubble>

          {/* VII. Complaint Response */}
          <SectionBubble title="VII. Complaint Response" sectionId="response">
            <div className="space-y-4">
              <p className="text-primary-dark/80">
                Response submitted to BC Human Rights Tribunal for Case #15916
              </p>
              <Link href="/Response Form Filled.pdf" target="_blank">
                <Button variant="secondary" size="medium">
                  View Response Form (PDF)
                </Button>
              </Link>
            </div>
          </SectionBubble>

          {/* VIII. Mediation */}
          <SectionBubble title="VIII. Mediation Preparation & Session" sectionId="mediation">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Mediation Date:</h3>
                <p className="text-primary-dark/80">{complaintData.mediation.date}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-2">Mediator:</h3>
                <p className="text-primary-dark/80">{complaintData.mediation.mediator}</p>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-3">Resources:</h3>
                <div className="space-y-2">
                  {complaintData.mediation.resources.map((resource, index) => (
                    <Link key={index} href={resource.url} target="_blank">
                      <Button variant="secondary" size="small" className="w-full text-left justify-start">
                        {resource.title}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-3">Mediation Notes:</h3>
                <div className="bg-secondary-beige/30 p-4 rounded-xl space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Monetary:</h4>
                    <ul className="list-disc list-inside space-y-1 text-primary-dark/80">
                      <li>Injury to Dignity: {complaintData.mediation.notes.monetary.injuryToDignity}</li>
                      <li>Wage Loss: {complaintData.mediation.notes.monetary.wageLoss}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Audit:</h4>
                    <p className="text-primary-dark/80">{complaintData.mediation.notes.audit}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Policy Review:</h4>
                    <p className="text-primary-dark/80">{complaintData.mediation.notes.policyReview}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Duty to Accommodate:</h4>
                    <p className="text-primary-dark/80">{complaintData.mediation.notes.dutyToAccommodate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Discrimination:</h4>
                    <p className="text-primary-dark/80">{complaintData.mediation.notes.discrimination}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionBubble>

          {/* IX. Settlement Agreement */}
          <SectionBubble title="IX. Settlement Agreement" sectionId="settlement">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-full">
                  {complaintData.settlement.status}
                </span>
                <span className="text-primary-dark/70">
                  {complaintData.settlement.acceptanceDate}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-primary-dark mb-3">Settlement Terms:</h3>
                <ol className="list-decimal list-inside space-y-3 text-primary-dark/80">
                  {complaintData.settlement.terms.map((term, index) => (
                    <li key={index} className="pl-2">{term}</li>
                  ))}
                </ol>
              </div>

              <div className="mt-6">
                <Link href="/Settlement Offer Letter (1).pdf" target="_blank">
                  <Button variant="secondary" size="medium">
                    View Settlement Offer Letter (PDF)
                  </Button>
                </Link>
              </div>
            </div>
          </SectionBubble>

          {/* X. All Documents */}
          <SectionBubble title="X. All Documents" sectionId="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {complaintData.documents.map((doc, index) => (
                <Link key={index} href={doc.url} target="_blank">
                  <Card padding="medium" rounded="medium" className="hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-dark mb-1">{doc.name}</h3>
                        <span className="text-xs px-2 py-1 bg-secondary-beige rounded-full text-primary-dark/70">
                          {doc.type}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </SectionBubble>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-primary-yellow py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <Button size="large">
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
