import 'package:flutter/material.dart';
import 'package:moth/models/task.dart';

class TaskWidget extends StatefulWidget {
  static const String path = '/Task';

  final Task task;
  final ValueChanged<bool> onChange;

  TaskWidget({this.task, this.onChange});

  @override
  _TaskWidgetState createState() => _TaskWidgetState();
}

class _TaskWidgetState extends State<TaskWidget> {
  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4.0,
      child: Row(
        children: <Widget>[
          Checkbox(
            value: widget.task.isDone,
            onChanged: widget.onChange,
          ),
          Container(
            padding: EdgeInsets.all(10.0),
            child: Text(widget.task.text),
          ),
        ],
      ),
    );
  }
}
