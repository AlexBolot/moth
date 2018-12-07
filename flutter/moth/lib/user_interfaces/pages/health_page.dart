import 'package:flutter/material.dart';

class HealthPage extends StatefulWidget {
  static const String path = '/HealthPage';

  @override
  _HealthPageState createState() => _HealthPageState();
}

class _HealthPageState extends State<HealthPage> with SingleTickerProviderStateMixin {
  int heartBeat = 85;
  double temperature = 70.0;
  int humidity = 5;
  int stepsCount = 1843;

  Animation<double> animationHeart;
  AnimationController controllerHeart;

  @override
  void initState() {
    super.initState();
    controllerHeart = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 800),
      lowerBound: 0.3,
      upperBound: 1.0,
    );
    controllerHeart.repeat();
    animationHeart = CurvedAnimation(parent: controllerHeart, curve: Curves.linear);
  }

  @override
  void dispose() {
    super.dispose();
    controllerHeart.dispose();
  }

  updateFrequence() {
    int frequence = (60 / heartBeat * 1000).round();
    print(frequence);
    controllerHeart.duration = Duration(milliseconds: frequence);
  }

  @override
  Widget build(BuildContext context) {
    updateFrequence();

    ThemeData theme = Theme.of(context);
    Color textColor = theme.textTheme.title.color;

    return Scaffold(
      backgroundColor: theme.backgroundColor,
      appBar: AppBar(title: Text('Health Page', style: Theme.of(context).textTheme.title)),
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
                    ScaleTransition(
                        scale: animationHeart, child: Icon(Icons.favorite, size: 70.0, color: Colors.redAccent)),
                    Text('$heartBeat bmp', style: TextStyle(fontSize: 30.0, color: textColor)),
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
                            Icon(Icons.brightness_low, size: 40.0, color: Theme.of(context).iconTheme.color),
                            Text('$temperature°C', style: TextStyle(fontSize: 25.0, color: textColor)),
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
                            Icon(
                              Icons.filter_drama,
                              size: 40.0,
                              color: Theme.of(context).iconTheme.color,
                            ),
                            Text('$humidity%', style: TextStyle(fontSize: 25.0, color: textColor)),
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
                    Text('$stepsCount steps', style: TextStyle(fontSize: 30.0, color: textColor)),
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
