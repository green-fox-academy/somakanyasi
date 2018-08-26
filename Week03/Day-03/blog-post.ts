'use strict';

export class BlogPost {
    private authorName: string;
    private title: string;
    private text: string;
    private publicationDate: string;
    constructor(title: string, authorName: string, publicationDate: string, text: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

export let firstText: string = 'Lorem ipsum dolor sit amet.';
export let secondText: string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
export let thirdText: string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

export let firstBook: BlogPost = new BlogPost('Lorem Ipsum', 'John Doe', '2000.05.04.', firstText);
export let secondBook: BlogPost = new BlogPost('Wait but why', 'Tim Urban','2010.10.10.', secondText);
export let thirdBook: BlogPost = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trump', 'William Turton', '2017.03.28.', thirdText);


