class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    toString() {
        return [`Post: ${this.title}`,
        `Content: ${this.content}`].join('\n');
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }

    toString() {
        if (this.comments.length > 0) {
            return [`Post: ${this.title}`,
            `Content: ${this.content}`,
            `Rating: ${this.likes - this.dislikes}`,
                'Comments:',
            this.comments
                .map(comment => { return ` * ${comment}`; })
                .join('\n')].join('\n');
        } else {
            return [`Post: ${this.title}`,
            `Content: ${this.content}`,
            `Rating: ${this.likes - this.dislikes}`].join('\n');
        }
    }
}

class BlogPost extends Post {
    constructor(title, content, views) {
        super(title, content);
        this.views = views;
    }

    view() {
        this.views++;
        return this;
    }

    toString() {
        return [`Post: ${this.title}`,
        `Content: ${this.content}`,
        `Views: ${this.views}`].join('\n');
    }
}

let scm = new BlogPost('TestTitle', 'TestContent', 2);

scm.view();
scm.view();

console.log(scm.toString());
