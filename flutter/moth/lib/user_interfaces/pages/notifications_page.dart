import 'package:flutter/material.dart';

class NotificationsPage extends StatefulWidget {

  static const String path = '/NotificationPage';

  @override
  _NotificationsPageState createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container (
        child : Center (
          child : Text(NotificationsPage.path),
        ),
      ),
    );
  }
}
