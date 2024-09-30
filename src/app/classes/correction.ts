export class Correction{
    constructor(
        public correctionId:number,
        public employeeIdTakeCorrections:number,
        public employeeIdDeliverMessage:number,
        public receivingDate:Date,
        public goldsmithId:number,
        public name:string,
        public phone:string,
        public isDeliveredMessage:boolean,
        public forHoeDeliveredMessage:string,
        public correctionDescription:string,
        public isReady:boolean,
        public sentTo:string,
        public DateSent:Date,
        public returnDate:Date
    )
    {}
}