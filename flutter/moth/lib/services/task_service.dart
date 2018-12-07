import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:moth/models/task.dart';

class TaskService {
  static Firestore _firestore = Firestore.instance;

  static Stream<QuerySnapshot> tasksStream;

  List<Task> tasks = [];

  String tasksPath = 'Tasks';

  addTasks(List<Task> tasks) {
    for (Task task in tasks) {
      _firestore.collection(tasksPath).document().setData(task.toMap());
    }
  }

  streamAllTasks() => tasksStream = _firestore.collection(tasksPath).snapshots();

  listenToTasks(VoidCallback notify) {
    tasksStream?.listen((snap) {
      tasks.clear();
      for (DocumentSnapshot doc in snap.documents) {
        tasks.add(Task.fromMap(doc.data, doc.documentID));
      }
      notify();
    });
  }

  updateTask(Task task) => _firestore.collection(tasksPath).document(task.id).setData(task.toMap());
}
