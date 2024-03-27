export class shop{
    constructor(
        public username:string,
        public password:string,
        public image: string | ArrayBuffer | null // שדה נתמך ב-Base64
    )
    {}
}

