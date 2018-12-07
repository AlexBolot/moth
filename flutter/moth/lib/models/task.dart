class Task {
  String text;
  bool isDone;
  String id;

  Task({this.text, this.isDone, this.id});

  Task.fromMap(Map<String, dynamic> data, String id) {
    this.id = id;
    this.text = data['text'];
    this.isDone = data['isDone'];
  }

  Map<String, dynamic> toMap() {
    return {
      "text": text,
      "isDone": isDone,
    };
  }
}
