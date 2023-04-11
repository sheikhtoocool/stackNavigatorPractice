// enum TaskStatus {
//   Pending = 'pending',
//   Completed = 'finished',
// }
interface ITodo {
  id: number;
  task: string;
  status: 'Finished' | 'Pending';
}
