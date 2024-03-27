export const eNamesOfJewlery = {
    Value: 'כללי',
    Value1: 'שרשרת',
    Value2: 'צמיד',
    Value3: 'עגילים',
    Value4: 'טבעת קידושין',
    Value5: 'טבעת זרקון',
    Value6: 'טבעת קישוט',
  } as const;
  
  export type JewelryNameType = typeof eNamesOfJewlery[keyof typeof eNamesOfJewlery];
  