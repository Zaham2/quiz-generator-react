export class Quiz {
    constructor(data) {
      this.created = data.created;
      this.description = data.description;
      this.id = data.id;
      this.modified = data.modified;
      this.questions = data.questions_answers.map(questionData => new Question(questionData));
      this.finalScore = data.finalScore;
      this.title = data.title;
      this.url = data.url;
    }
  }
