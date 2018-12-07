export class Task {

  id: string;
  text: string;
  isDone: boolean;

  constructor(id?: string, text?: string, isDone?: boolean) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
  }

  static fromObject(obj: Object): Task {
    let task = new Task();
    task = Object.assign(task, obj);
    return task;
  }

  storable(): Object {
    const exportable = Object.assign({}, this);
    delete exportable.id;
    return exportable;
  }

}
