'use client';

import TreatmentLayout from './TreatmentLayout';
import { Treatment } from '@/lib/treatments';

interface TreatmentPageProps {
  treatment: Treatment;
  children: React.ReactNode;
}

export default function TreatmentPage({ treatment, children }: TreatmentPageProps) {
  return (
    <TreatmentLayout
      title={treatment.name}
      subtitle={treatment.description}
      mainImage={treatment.image}
      clinicImage="/images/clinic/aboutclinic_1.png"
    >
      {children}
    </TreatmentLayout>
  );
}