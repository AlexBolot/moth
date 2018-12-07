import 'package:flutter/material.dart';
import 'package:moth/user_interfaces/pages/health_page.dart';
import 'package:moth/user_interfaces/pages/notifications_page.dart';
import 'package:moth/user_interfaces/pages/tasks_page.dart';
import 'package:moth/user_interfaces/pages/dash_board.dart';

const String dashboard = DashBoard.path;
const String healthPage = HealthPage.path;
const String tasksPage = TasksPage.path;
const String notificationsPage = NotificationsPage.path;

navigateToPage(String destination, BuildContext context, {bool replace = false}) {
  if (replace)
    Navigator.of(context).pushReplacementNamed(destination);
  else
    Navigator.of(context).pushNamed(destination);
}
