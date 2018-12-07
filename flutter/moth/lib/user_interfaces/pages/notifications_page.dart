import 'dart:math';

import 'package:flutter/material.dart';

class NotificationsPage extends StatefulWidget {
  static const String path = '/NotificationPage';

  @override
  _NotificationsPageState createState() => _NotificationsPageState();
}

class _NotificationsPageState extends State<NotificationsPage> {
  Random random = Random();
  int hoursDrink = 0;
  int minutesDrink = 0;
  int hoursLeft = 0;
  int minutesLeft = 0;

  @override
  void initState() {
    super.initState();
    hoursDrink = random.nextInt(5);
    minutesDrink = random.nextInt(60);
    hoursLeft = random.nextInt(7);
    minutesLeft = random.nextInt(60);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Notifications')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: <Widget>[
            Container(
              margin: EdgeInsets.symmetric(vertical: 8.0),
              width: double.infinity,
              child: Card(
                elevation: 8.0,
                color: Colors.green[300],
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 32.0),
                  child: Text(
                    'I AM OK !',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 24.0),
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(vertical: 8.0),
              width: double.infinity,
              child: GestureDetector(
                onTap: () => setState(() => hoursDrink = minutesDrink = 0),
                child: Card(
                  color: getWaterColor(),
                  elevation: 8.0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 32.0),
                    child: Text(
                      'Drank water ${hoursDrink}h : ${minutesDrink}min ago',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 20.0),
                    ),
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(vertical: 8.0),
              width: double.infinity,
              child: GestureDetector(
                onTap: () => setState(() => hoursLeft = minutesLeft = 0),
                child: Card(
                  color: getCampColor(),
                  elevation: 8.0,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 32.0),
                    child: Text(
                      'Left camp ${hoursLeft}h : ${minutesLeft}min ago',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 20.0),
                    ),
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.symmetric(vertical: 8.0),
              width: double.infinity,
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 32.0),
                  child: Text(
                    'Time left ${autonomyHoursLeft}h : ${autonomyMinutesLeft}min ago',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 20.0),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Color getWaterColor() {
    if (hoursDrink < 2) return Colors.green[300];
    if (hoursDrink < 3) return Colors.yellow[300];
    return Colors.redAccent;
  }

  Color getCampColor() {
    if (hoursLeft < 3) return Colors.green[300];
    if (hoursLeft < 4) return Colors.yellow[300];
    return Colors.redAccent;
  }

  int get autonomyHoursLeft => minutesLeft == 0 ? (8 - hoursLeft) : (7 - hoursLeft);

  int get autonomyMinutesLeft => minutesLeft == 0 ? 0 : (60 - minutesLeft);
}
