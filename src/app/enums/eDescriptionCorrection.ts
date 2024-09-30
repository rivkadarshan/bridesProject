export const eDescriptionCorrection = {
    Value: 'לשבץ',
    Value1: 'להלחים',
    Value2: 'לקצר',
    Value3: 'להאריך',
  } as const;
  
  export type DescriptionCorrection = typeof eDescriptionCorrection[keyof typeof eDescriptionCorrection];
  