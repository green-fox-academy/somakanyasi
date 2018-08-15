class PostIt {
    private backgroundColor: string;
    private text: string;
    private textColor: string;
    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let firstPostIt: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let secondPostIt: PostIt = new PostIt('pink', 'Awesome', 'black');
let thirdPostIt: PostIt = new PostIt('yellow', 'Superb!', 'green');
