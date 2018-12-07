import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:moth/models/task.dart';

class TaskService {
  static Firestore _firestore = Firestore.instance;

  static Stream<QuerySnapshot> tasksStream;

  static List<Task> tasks = [];

  static const String tasksPath = 'Tasks';

  static addTasks(List<Task> tasks) {
    for (Task task in tasks) {
      _firestore.collection(tasksPath).document().setData(task.toMap());
    }
  }

  static streamAllTasks() => tasksStream = _firestore.collection(tasksPath).snapshots();

  static listenToTasks(VoidCallback notify) {
    tasksStream?.listen((snap) {
      tasks.clear();
      for (DocumentSnapshot doc in snap.documents) {
        tasks.add(Task.fromMap(doc.data, doc.documentID));
      }
      notify();
    });
  }

  static updateTask(Task task) => _firestore.collection(tasksPath).document(task.id).setData(task.toMap());
}
