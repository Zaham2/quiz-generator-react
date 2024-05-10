export class Question {
    constructor(data) {
      this.feedback_false = data.feedback_false;
      this.feedback_true = data.feedback_true;
      this.id = data.id;
      this.text = data.text;
      this.answers = data.answers.map(answerData => new Answer(answerData));
    }
  }
  