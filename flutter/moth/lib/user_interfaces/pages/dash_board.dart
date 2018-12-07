import 'package:flutter/material.dart';
import 'package:moth/global/router.dart';
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
      drawer: Container(child: Image.asset('images/spanish_inquisition.png')),
      endDrawer: Container(child: Image.asset('images/spanish_inquisition.png')),
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            CircleButton(iconData: Icons.favorite, onTap: () => navigateToPage(healthPage, context)),
            CircleButton(iconData: Icons.assignment, onTap: () => navigateToPage(tasksPage, context)),
            CircleButton(iconData: Icons.notifications, onTap: () => navigateToPage(notificationsPage, context)),
          ],
        ),
      ),
    );
  }
}
