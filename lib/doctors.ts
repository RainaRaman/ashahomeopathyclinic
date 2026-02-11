export interface DoctorQualification {
  degree: string;
  description: string;
}

export interface DoctorSpecialization {
  title: string;
  description: string;
}

export interface DoctorEducation {
  degree: string;
  field: string;
  university: string;
  year: string;
  verified: boolean;
}

export interface DoctorCertification {
  title: string;
  university: string;
  year: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  yearsOfExperience: number;
  degrees: string;
  bio: string;
  slug: string;
  image: string;
  fullBio: string;
  qualifications: DoctorQualification[];
  professionalExperience: string[];
  specializations: DoctorSpecialization[];
  approach: string;
  education: DoctorEducation[];
  registrations: string[];
  certifications: DoctorCertification[];
  memberships: string[];
  clinicName: string;
  services: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: 'ashish',
    name: 'Dr. Ashish Manapure',
    title: 'Chief Homeopathy Physician & Mental Health Professional',
    specialization: 'Homeopathy, Psychology, Psychotherapy & Mental Health Counselling',
    experience: '25+ Years',
    yearsOfExperience: 25,
    slug: 'ashish-manapure',
    image: '/images/doctors/ashish.png',
    degrees: 'BHMS, M.A. (Psychology), M.S. (Psychotherapy)',
    bio: 'Renowned homeopathy specialist with expertise in treating complex chronic conditions and psychological wellbeing. Known for technical acumen in expert diagnosis, integrating homeopathy with psychology and psychotherapy for comprehensive patient care.',
    fullBio: 'Dr. Ashish Manapure is a homeopathic physician and mental health professional with more than 25 years of clinical experience in the field of chronic diseases and psychological wellbeing. With a strong foundation in both homeopathy and psychology, he provides integrated, holistic care that addresses the deepest aspects of health and wellness.',
    clinicName: 'Asha Homeopathic Clinic, Nagpur',
    education: [
      {
        degree: 'BHMS',
        field: 'Bachelor of Homeopathic Medicine and Surgery',
        university: 'Nagpur College of Homoeopathy, Nagpur',
        year: '2000',
        verified: false,
      },
      {
        degree: 'M.A.',
        field: 'Clinical Psychology',
        university: 'Nagpur University',
        year: '2006',
        verified: false,
      },
    ],
    registrations: [
      'Maharashtra Council of Homoeopathy - Registration #32347 (2001)',
    ],
    certifications: [
      {
        title: 'M.S. Psychotherapy',
        university: 'Nagpur University',
        year: '2006',
      },
    ],
    memberships: [
      'Maharashtra Council of Homoeopathy',
    ],
    services: [
      'Skin Disease Treatment',
      'Hair Loss Treatment',
      'Allergy Treatment',
      'Weight Loss Diet Counseling',
      'Irritable Bowel Syndrome (IBS) Treatment',
      'Gastritis Treatment',
      'Hypertension Treatment',
      'Kidney Stone Treatment',
      'Gall Bladder (Biliary) Stone Treatment',
      'Cancer Treatment',
      'Liver Disease Treatment',
      'Arthritis Management',
      'Dandruff Treatment',
      'Diabetes Management',
      'Obesity Treatment',
      'Bronchial Asthma Treatment',
      'Infertility Evaluation/Treatment',
      'Acne/Pimples Treatment',
      'Bronchitis Treatment',
      'Cervical Spondylitis Treatment',
      'Cysts Treatment',
      'Depression Treatment',
      'Dermatitis Treatment',
      'Eczema Treatment',
      'Insomnia Treatment',
      'Dysmenorrhea Treatment',
      'Migraine Treatment',
      'Thyroid Disorder Treatment',
      'Psoriasis Treatment',
      'Rheumatism Treatment',
      'Dengue Fever Treatment',
      'Heart Conditions',
      'Skin Disorder Treatment',
      'Psychological Problems Adult Counselling',
      'Neurological Problems',
      'Youth Counselling',
      'Joints and Musculoskeletal Disorders',
      'Lifestyle Disorders Treatment',
      'Acute and Chronic Diseases',
    ],
    qualifications: [
      {
        degree: 'BHMS',
        description: 'Bachelor of Homeopathic Medicine and Surgery',
      },
      {
        degree: 'M.A. (Psychology)',
        description: 'Providing strong grounding in human behaviour and mental processes',
      },
      {
        degree: 'M.S. (Psychotherapy)',
        description: 'Integrating structured therapeutic techniques with clinical practice for emotional and behavioural issues',
      },
    ],
    professionalExperience: [
      'Over 25 years of clinical practice, combining homeopathy, psychology, and psychotherapy for holistic care',
      'Work experience in the Department of Psychiatry at Government Medical College (GMC), Nagpur, offering exposure to a wide spectrum of psychiatric and neurodevelopmental conditions',
      'Extensive work with patients suffering from various chronic diseases, focusing on long-term management and improving quality of life',
    ],
    specializations: [
      {
        title: 'Mental Health And Counselling',
        description: 'Provides structured counselling for mental health concerns such as stress, anxiety, mood difficulties, adjustment issues, and family or relationship-related problems. Uses psychotherapeutic approaches along with supportive counselling to help patients understand their emotions, build coping skills, and restore emotional balance.',
      },
      {
        title: 'Child Development And Neurodevelopmental Issues',
        description: 'Special interest and expertise in developmental problems in children, including autism spectrum disorder (ASD), attention-deficit/hyperactivity disorder (ADHD), learning and behavioural difficulties. Focuses on early identification, behavioural guidance for parents, educational support strategies, and integrative care using homeopathy and counselling for better functional outcomes.',
      },
      {
        title: 'Bach Flower And Holistic Care',
        description: 'Trained in Bach Flower Remedies, a gentle system using 38 flower essences to support emotional balance, reduce stress, anxiety, and negative thought patterns. Integrates Bach Flower Therapy with counselling and psychotherapy to enhance inner calm, resilience, and mental wellbeing in both adults and children.',
      },
    ],
    approach: 'Dr. Ashish Manapure integrates homeopathy, psychology, and psychotherapy to provide comprehensive, holistic care that addresses both the physical and emotional dimensions of health. His approach is centered on understanding the unique needs of each patient and developing personalized treatment plans that promote long-term wellness and emotional resilience.',
  },
  {
    id: 'vaishali',
    name: 'Dr. Vaishali Manapure',
    title: 'Senior Homeopathy Physician & Gynaecology Specialist',
    specialization: 'Homeopathy, Gynaecology, Cosmetics & Mental Health Counselling',
    experience: '25+ Years',
    yearsOfExperience: 25,
    slug: 'vaishali-manapure',
    image: '/images/doctors/vaishali.png',
    degrees: 'BHMS, Postgraduate (Homeopathy-London), M.A. (Psychology), CGO',
    bio: 'Highly experienced homeopathic physician specializing in women\'s health and integrated wellness. Known for compassionate care combining science, sensitivity, and technical expertise in treating gynaecological, cosmetic, and psychological conditions with holistic homeopathic principles.',
    fullBio: 'Dr. Vaishali Manapure is a highly experienced homeopathic physician with more than 25 years of clinical expertise. She holds a Bachelor of Homeopathic Medicine and Surgery (BHMS) and a Postgraduate qualification in Homeopathy from London, along with a Master\'s degree in Psychology. She is also a Certified Gynaecology and Obstetrics Practitioner (CGO) from Matru Seva Sangh, Nagpur. Over the course of her career, Dr. Vaishali has developed a deep understanding of both the physical and emotional aspects of health, offering compassionate, holistic care.',
    clinicName: 'Asha Homeopathic Clinic, Nagpur',
    education: [
      {
        degree: 'BHMS',
        field: 'Bachelor of Homeopathic Medicine and Surgery',
        university: 'India',
        year: 'Completed',
        verified: false,
      },
      {
        degree: 'Postgraduate',
        field: 'Homeopathy',
        university: 'London',
        year: 'Completed',
        verified: false,
      },
      {
        degree: 'M.A.',
        field: 'Psychology',
        university: 'Nagpur University',
        year: 'Completed',
        verified: false,
      },
      {
        degree: 'CGO',
        field: 'Certified Gynaecology and Obstetrics Practitioner',
        university: 'Matru Seva Sangh, Nagpur',
        year: 'Completed',
        verified: false,
      },
    ],
    registrations: [],
    certifications: [],
    memberships: [],
    services: [
      'Gynaecological Disorders',
      'Reproductive Health',
      'Hormonal Imbalances',
      'Fertility and Infertility Treatment',
      'Pregnancy and Childbirth Support',
      'Menstrual Disorders',
      'Menopausal Symptoms',
      'Ovarian Cysts',
      'Fibroid Treatment',
      'Cosmetic and Skin Treatment',
      'Acne Treatment',
      'Pigmentation Issues',
      'Wrinkles and Aging Skin',
      'Hair Loss Treatment',
      'Eczema and Dermatitis',
      'Psoriasis Treatment',
      'Mental Health Counselling',
      'Stress and Anxiety',
      'Depression Treatment',
      'Mood Disorders',
      'Family and Relationship Counselling',
      'Bach Flower Remedies',
      'Emotional Balance',
      'Chronic Disease Management',
      'Diabetes Management',
      'Hypertension Treatment',
      'Thyroid Disorders',
      'Weight Management',
      'Allergies',
      'Respiratory Conditions',
      'Digestive Disorders',
      'Holistic Wellness Counselling',
    ],
    qualifications: [
      {
        degree: 'BHMS',
        description: 'Bachelor of Homeopathic Medicine and Surgery',
      },
      {
        degree: 'Postgraduate Qualification in Homeopathy',
        description: 'From London, providing advanced clinical expertise and international standards',
      },
      {
        degree: 'M.A. (Psychology)',
        description: 'Master\'s degree in Psychology, providing expertise in behavioral and mental health aspects',
      },
      {
        degree: 'CGO (Certified Gynaecology and Obstetrics Practitioner)',
        description: 'From Matru Seva Sangh, Nagpur, specializing in women\'s health',
      },
    ],
    professionalExperience: [
      'Over 25 years of clinical expertise in homeopathic medicine and women\'s health',
      'Deep understanding of both the physical and emotional aspects of health developed through extensive practice',
      'Specialized experience in treating gynaecological disorders and pregnancy-related concerns',
      'Expertise in cosmetic concerns and skin health through natural, homeopathic approaches',
    ],
    specializations: [
      {
        title: 'Gynaecological Disorders',
        description: 'Comprehensive homeopathic treatment for various gynaecological conditions, menstrual disorders, fertility issues, and pregnancy-related concerns. Dr. Vaishali\'s approach combines her certification in gynecology and obstetrics with homeopathic principles to provide holistic care for women at every stage of life.',
      },
      {
        title: 'Cosmetic And Skin Care',
        description: 'Natural, non-invasive homeopathic solutions for cosmetic concerns including skin texture, appearance, and overall skin health. Her approach focuses on treating the root causes of skin issues rather than just managing symptoms, resulting in long-lasting, natural improvements.',
      },
      {
        title: 'Mental Health And Counselling',
        description: 'Expert counselling for various mental health and social issues, leveraging her psychology background. Dr. Vaishali addresses stress, anxiety, mood difficulties, and relationship issues with compassionate, evidence-based approaches combined with homeopathic care.',
      },
      {
        title: 'Bach Flower Remedies',
        description: 'Special expertise in Bach Flower Remedies, using these gentle, natural therapies to support emotional well-being and balance. These remedies complement her homeopathic practice to provide comprehensive mental and emotional wellness.',
      },
    ],
    approach: 'Dr. Vaishali Manapure combines science, sensitivity, and experience to help patients achieve true wellness—physically, mentally, and emotionally. By integrating her psychological background with homeopathic principles and gynecological expertise, she offers compassionate, holistic care that addresses the root causes of illness rather than just the symptoms. Her approach is particularly effective for women\'s health, emotional wellbeing, and long-term wellness.',
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctorsData.find(d => d.slug === slug);
}