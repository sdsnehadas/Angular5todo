import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 2, description: "breakfast", time: '8 A.M' },
      { id: 3, description: "sleep", time: '10 P.M' },
      { id: 4, description: "work", time: '10 A.M' },
    ];
    return {tasks};
  }
}
