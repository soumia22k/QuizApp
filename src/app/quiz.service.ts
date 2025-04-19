import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface ApiResponse {
  response_code: number;
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private readonly API_URL = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('https://opentdb.com/api_category.php').pipe(
      map((response: any) => response.trivia_categories)
    );
  }

  getQuestions(amount: number, category?: string, difficulty?: string) {
    let params: any = { amount };
    if (category) params.category = category;
    if (difficulty) params.difficulty = difficulty;

    return this.http.get<ApiResponse>(this.API_URL, { params });
  }
}