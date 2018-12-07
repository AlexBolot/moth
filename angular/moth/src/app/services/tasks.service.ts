import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {BehaviorSubject} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: BehaviorSubject<Task[]>;
  private collection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collection = firestore.collection('Tasks');
  }

  async addTask(task: Task): Promise<void> {
    const taskRef = await this.collection.add(task.storable());
    task.id = taskRef.id;
  }

  getTasks(): BehaviorSubject<Task[]> {
    if (this.tasks === undefined) {
      this.tasks = new BehaviorSubject<Task[]>([]);
      this.collection.snapshotChanges().subscribe(values => this.tasks.next(values.map(
        (v) => {
          const task: Task = Task.fromObject(v.payload.doc.data());
          task.id = v.payload.doc.id;
          return task;
        })));
    }
    return this.tasks;
  }

  updateTask(task: Task) {
    this.firestore
      .collection('Tasks')
      .doc(task.id)
      .update({isDone: task.isDone});
  }
}
