import 'package:flutter/material.dart';
import 'package:moth/global/router.dart';
import 'package:moth/services/task_service.dart';
import 'package:moth/user_interfaces/fragments/circle_button.dart';

class DashBoard extends StatefulWidget {
  static const String path = '/DashBoard';

  @override
  _DashBoardState createState() => _DashBoardState();
}

class _DashBoardState extends State<DashBoard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            CircleButton(iconData: Icons.favorite, onTap: () => navigateToPage(healthPage, context)),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                CircleButton(iconData: Icons.assignment, onTap: () => navigateToPage(tasksPage, context)),
                CircleButton(iconData: Icons.notifications, onTap: () => navigateToPage(notificationsPage, context)),
              ],
            ),
            CircleButton(iconData: Icons.map, onTap: () => navigateToPage(mapPage, context)),
          ],
        ),
      ),
    );
  }
}
