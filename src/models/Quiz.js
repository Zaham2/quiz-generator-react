export class Quiz {
    constructor(data) {
      this.created = data.created;
      this.description = data.description;
      this.id = data.id;
      this.modified = data.modified;
      this.questions_answers = data.questions_answers;
      this.score = data.score
      this.title = data.title;
      this.url = data.url;
    }
  }
