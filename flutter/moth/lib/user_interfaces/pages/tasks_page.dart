import 'package:flutter/material.dart';
import 'package:moth/models/task.dart';
import 'package:moth/services/task_service.dart';
import 'package:moth/user_interfaces/fragments/task_widget.dart';

class TasksPage extends StatefulWidget {
  static const String path = '/TasksPage';

  @override
  _TasksPageState createState() => _TasksPageState();
}

class _TasksPageState extends State<TasksPage> {
  TaskService taskService = TaskService();
  List<Task> tasks = [];

  @override
  void initState() {
    taskService.listenToTasks(() => setState(() => tasks = taskService.tasks));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Tasks')),
      body: Container(
        child: ListView.builder(
          padding: EdgeInsets.symmetric(horizontal: 16.0),
          itemCount: tasks.length,
          itemBuilder: (context, index) {
            Task task = tasks[index];
            return Padding(
              padding: EdgeInsets.symmetric(vertical: 8.0),
              child: TaskWidget(
                task: task,
                onChange: (val) {
                  setState(() {
                    task.isDone = val;
                    taskService.updateTask(task);
                  });
                },
              ),
            );
          },
        ),
      ),
    );
  }
}
