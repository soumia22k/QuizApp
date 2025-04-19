import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: any[] = [];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer: string | null = null;
  quizCompleted = false;
  
  constructor(private router: Router, private quizService: QuizService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      category: string;
      difficulty: string;
      amount: number;
    };
    
    this.loadQuestions(state.category, state.difficulty, state.amount);
  }

  loadQuestions(category: string, difficulty: string, amount: number) {
    this.quizService.getQuestions(amount, category, difficulty).subscribe({
      next: (response: any) => {
        this.questions = response.results.map((q: any) => ({
          ...q,
          all_answers: this.shuffleArray([...q.incorrect_answers, q.correct_answer])
        }));
      },
      error: (err) => console.error('Erreur chargement questions', err)
    });
  }
  shuffleArray(arg0: any[]) {
    throw new Error('Method not implemented.');
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].correct_answer) {
      this.score++;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
    } else {
      this.quizCompleted = true;
    }
  }
  goToHome() {
    this.router.navigate(['/']);
  }

  get progress(): number {
    return this.questions.length > 0 
      ? (this.currentQuestionIndex / this.questions.length) * 100
      : 0;
  }

}