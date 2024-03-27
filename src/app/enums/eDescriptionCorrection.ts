export const eNamesOfJewlery = {
    Value: 'לשבץ',
    Value1: 'להלחים',
    Value2: 'לקצר',
    Value3: 'להאריך',
  } as const;
  
  export type JewelryNameType = typeof eNamesOfJewlery[keyof typeof eNamesOfJewlery];
  