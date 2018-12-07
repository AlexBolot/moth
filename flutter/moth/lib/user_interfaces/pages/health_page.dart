import 'package:flutter/material.dart';

class HealthPage extends StatefulWidget {
  static const String path = '/HealthPage';

  @override
  _HealthPageState createState() => _HealthPageState();
}

class _HealthPageState extends State<HealthPage> with SingleTickerProviderStateMixin {
  int heartBeat = 80;
  double temperature = 70.0;
  int humidity = 5;
  int stepsCount = 1843;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Health Page')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Expanded(
              child: Card(
                elevation: 4.0,
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: <Widget>[
                    Icon(Icons.favorite, size: 70.0, color: Colors.redAccent),
                    Text('$heartBeat bmp', style: TextStyle(fontSize: 30.0)),
                  ],
                ),
              ),
            ),
            Expanded(
              child: Row(
                mainAxisSize: MainAxisSize.max,
                children: <Widget>[
                  Expanded(
                    child: Container(
                      height: double.infinity,
                      child: Card(
                        elevation: 4.0,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: <Widget>[
                            Icon(Icons.brightness_low, size: 40.0),
                            Text('$temperature°C', style: TextStyle(fontSize: 25.0)),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(
                      height: double.infinity,
                      child: Card(
                        elevation: 4.0,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: <Widget>[
                            Icon(Icons.filter_drama, size: 40.0),
                            Text('$humidity%', style: TextStyle(fontSize: 25.0)),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: Card(
                elevation: 4.0,
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Icon(Icons.directions_run, size: 70.0, color: Colors.green[800]),
                    Text('$stepsCount steps', style: TextStyle(fontSize: 30.0)),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
