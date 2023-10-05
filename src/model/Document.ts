export class Document {
    constructor(
        public path: string,
        public name: string,
        public content: string,
        public saved: boolean)
    {
        this.path = path;
        this.name = name;
        this.content = content;
        this.saved = saved;
    }
}
