export class Correction{
    constructor(
        public correctionId:number,
        public employeeIdTakeCorrections:number,
        public employeeIdDeliverMessage:number,
        public receivingDate:Date,
        public goldsmithId:number,
        public isDeliveredMessage:boolean,
        public forHoeDeliveredMessage:string,
        public correctionDescription:string,
        public isReady:boolean,
    )
    {}
}