import 'dart:async';

import 'package:flutter/material.dart';
import 'package:moth/global/router.dart';
import 'package:moth/global/shared.dart';
import 'package:moth/user_interfaces/fragments/circle_button.dart';
import 'package:moth/user_interfaces/others/app_builder.dart';

class DashBoard extends StatefulWidget {
  static const String path = '/DashBoard';

  @override
  _DashBoardState createState() => _DashBoardState();
}

class _DashBoardState extends State<DashBoard> {

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);
    return Scaffold(
      backgroundColor: theme.backgroundColor,
      appBar: AppBar(
        title: Text('Dashboard', style: theme.textTheme.title),
        iconTheme: theme.iconTheme,
      ),
      drawer: Container(child: Image.asset('images/spanish_inquisition.png')),
      endDrawer: Container(child: Image.asset('images/spanish_inquisition.png')),
      body: Stack(
        alignment: AlignmentDirectional(0.0, 1.0),
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(left: 32.0, right: 32.0, bottom: 20.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                FloatingActionButton(
                  heroTag: null,
                  backgroundColor: theme.primaryColor,
                  child: Icon(Icons.brightness_low, color: theme.iconTheme.color),
                  onPressed: () {
                    if (Shared.decrTheme()) AppBuilder.of(context).rebuild();
                  },
                ),
                FloatingActionButton(
                  heroTag: null,
                  backgroundColor: theme.primaryColor,
                  child: Icon(Icons.brightness_high, color: theme.iconTheme.color),
                  onPressed: () {
                    if (Shared.incrTheme()) AppBuilder.of(context).rebuild();
                  },
                ),
              ],
            ),
          ),
          Center(
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
        ],
      ),
    );
  }
}
