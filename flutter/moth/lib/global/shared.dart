import 'package:flutter/material.dart';

class Shared {
  static int _themeCount = 0;

  static bool incrTheme() {
    if (_themeCount < themes.length - 1) {
      _themeCount++;
      return true;
    }
    return false;
  }

  static bool decrTheme() {
    if (_themeCount > 0) {
      _themeCount--;
      return true;
    }
    return false;
  }

  static void selectFirstTheme() => _themeCount = 0;

  static void selectLastTheme() => _themeCount = themes.length - 1;

  static ThemeData get theme => themes[_themeCount];

  static List<ThemeData> themes = [
    ThemeData(
      textTheme: TextTheme(title: TextStyle(color: Colors.black)),
      primaryColor: Colors.blue,
      backgroundColor: Colors.white,
      cardColor: Colors.grey[200],
      iconTheme: IconThemeData(color: Colors.black87),
    ),
    ThemeData(
      textTheme: TextTheme(title: TextStyle(color: Colors.grey[900])),
      primaryColor: Colors.blue,
      backgroundColor: Colors.grey[400],
      cardColor: Colors.grey,
      iconTheme: IconThemeData(color: Colors.black),
    ),
    ThemeData(
      textTheme: TextTheme(title: TextStyle(color: Colors.grey[400])),
      primaryColor: Colors.blue[700],
      backgroundColor: Colors.grey[600],
      cardColor: Colors.grey[700],
      iconTheme: IconThemeData(color: Colors.black),
    ),
    ThemeData(
      textTheme: TextTheme(title: TextStyle(color: Colors.grey[400])),
      primaryColor: Colors.blue[900],
      backgroundColor: Colors.grey[700],
      cardColor: Colors.grey[800],
      iconTheme: IconThemeData(color: Colors.grey[400]),
    ),
    ThemeData(
      textTheme: TextTheme(title: TextStyle(color: Colors.grey[400])),
      primaryColor: Colors.blue[800],
      backgroundColor: Colors.grey[900],
      cardColor: Colors.grey[600],
      iconTheme: IconThemeData(color: Colors.grey[400]),
    )
  ];
}
